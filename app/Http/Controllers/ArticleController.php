<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ArticleController extends Controller
{
    /**
     * Menampilkan daftar artikel di halaman publik (Frontend).
     */
    public function publicIndex(Request $request)
    {
        $search = $request->input('search');

        $articles = Article::with('category')
            ->when($search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                      ->orWhere('excerpt', 'like', "%{$search}%");
            })
            ->whereNotNull('published_at') // Hanya yang sudah publish
            ->latest('published_at')
            ->paginate(9)
            ->withQueryString();

        // Ambil artikel unggulan (Featured)
        $featured = Article::with('category')
            ->where('is_featured', true)
            ->whereNotNull('published_at')
            ->latest('published_at')
            ->first();

        return Inertia::render('ArticlePage', [
            'articles' => $articles,
            'featuredArticle' => $featured,
            'filters' => $request->only(['search'])
        ]);
    }

    /**
     * Menampilkan detail artikel di halaman publik.
     */
    public function show($slug)
    {
        // Cari berdasarkan Slug, bukan ID, agar URL lebih SEO friendly
        $article = Article::with('category')
            ->where('slug', $slug)
            ->whereNotNull('published_at')
            ->firstOrFail();

        // Increment view count (Opsional: jika ada kolom views)
        // $article->increment('views');

        return Inertia::render('ArticleDetail', [
            'article' => $article
        ]);
    }

    /**
     * DASHBOARD ADMIN: Menampilkan daftar artikel.
     */
    public function index(Request $request)
    {
        $articles = Article::with('category')
            ->when($request->search, function($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
            'filters' => $request->only(['search'])
        ]);
    }

    /**
     * Menampilkan form create.
     */
    public function create()
    {
        return Inertia::render('Admin/Articles/Create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Menyimpan artikel baru.
     */
    public function store(Request $request)
    {
        // 1. Validasi
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'blocks' => 'required|array',
            'blocks.*.type' => 'required|string|in:text,image',
            'blocks.*.value' => 'nullable', // Bisa string (text) atau file (image)
            'image' => 'nullable|image|max:2048|mimes:jpg,jpeg,png,webp',
            'published_at' => 'nullable|date',
            'is_featured' => 'boolean'
        ]);

        // 2. Upload Cover Utama
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('articles/covers', 'public');
        }

        // 3. Proses Modular Blocks (Text & Image dalam konten)
        $processedBlocks = $this->processBlocks($request);

        // 4. Generate Slug Unik
        $slug = Str::slug($request->title);
        $count = Article::where('slug', 'LIKE', "{$slug}%")->count();
        if ($count > 0) {
            $slug .= '-' . ($count + 1);
        }

        // 5. Simpan ke Database
        Article::create([
            'title' => $request->title,
            'slug' => $slug,
            'category_id' => $request->category_id,
            'content' => json_encode($processedBlocks), // Simpan blocks sebagai JSON
            'excerpt' => Str::limit(strip_tags($request->title), 150), // Buat excerpt otomatis
            'image' => $imagePath,
            'author' => $request->user()->name ?? 'Admin',
            'published_at' => $request->published_at,
            'is_featured' => $request->is_featured ?? false,
        ]);

        return redirect()->route('articles.index')->with('success', 'Artikel berhasil diterbitkan!');
    }

    /**
     * Menampilkan form edit.
     */
    public function edit(Article $article)
    {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article->load('category'),
            'categories' => Category::all(),
            // Decode content JSON kembali ke array agar bisa diedit di frontend
            'initialBlocks' => json_decode($article->content)
        ]);
    }

    /**
     * Memperbarui artikel.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'blocks' => 'required|array',
            'image' => 'nullable|image|max:2048|mimes:jpg,jpeg,png,webp',
            'published_at' => 'nullable|date',
            'is_featured' => 'boolean'
        ]);

        // 1. Proses Blocks Baru
        $processedBlocks = $this->processBlocks($request);

        $data = [
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => json_encode($processedBlocks),
            'published_at' => $request->published_at,
            'is_featured' => $request->is_featured ?? false,
        ];

        // 2. Cek apakah judul berubah untuk update slug (Opsional)
        if ($request->title !== $article->title) {
            $slug = Str::slug($request->title);
            $count = Article::where('slug', 'LIKE', "{$slug}%")->where('id', '!=', $article->id)->count();
            $data['slug'] = $count > 0 ? $slug . '-' . ($count + 1) : $slug;
        }

        // 3. Update Cover Image jika ada yang baru
        if ($request->hasFile('image')) {
            // Hapus gambar lama
            if ($article->image) {
                Storage::disk('public')->delete($article->image);
            }
            $data['image'] = $request->file('image')->store('articles/covers', 'public');
        }

        $article->update($data);

        return redirect()->route('articles.index')->with('success', 'Artikel berhasil diperbarui!');
    }

    /**
     * Menghapus artikel.
     */
    public function destroy(Article $article)
    {
        // 1. Hapus cover image
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }

        // 2. Hapus gambar-gambar yang ada di dalam konten (Blocks)
        $blocks = json_decode($article->content, true);
        if (is_array($blocks)) {
            foreach ($blocks as $block) {
                if ($block['type'] === 'image' && !empty($block['value'])) {
                    // Konversi URL storage ke path relatif
                    // Contoh: /storage/articles/content/abc.jpg -> articles/content/abc.jpg
                    $path = str_replace('/storage/', '', $block['value']);
                    if (Storage::disk('public')->exists($path)) {
                        Storage::disk('public')->delete($path);
                    }
                }
            }
        }

        $article->delete();

        return redirect()->back()->with('success', 'Artikel berhasil dihapus!');
    }

    /**
     * Helper: Memproses upload gambar di dalam Modular Blocks.
     * Logic ini menangani campuran antara text dan upload file dalam satu array.
     */
    private function processBlocks(Request $request)
    {
        $processedBlocks = [];

        // Loop setiap blok yang dikirim frontend
        foreach ($request->blocks as $index => $block) {
            
            // --- TIPE TEXT ---
            if ($block['type'] === 'text') {
                $processedBlocks[] = [
                    'id' => Str::uuid(), // ID unik untuk key di React
                    'type' => 'text',
                    'value' => $block['value'] ?? ''
                ];
            } 
            
            // --- TIPE IMAGE ---
            elseif ($block['type'] === 'image') {
                // Cek 1: Apakah user mengunggah file baru di index ini?
                if ($request->hasFile("blocks.{$index}.value")) {
                    $file = $request->file("blocks.{$index}.value");
                    $path = $file->store('articles/content', 'public');
                    
                    $processedBlocks[] = [
                        'id' => Str::uuid(),
                        'type' => 'image',
                        'value' => Storage::url($path) // Simpan URL publik
                    ];
                } 
                // Cek 2: Jika tidak ada file baru, pakai URL lama (saat mode edit)
                else {
                    $processedBlocks[] = [
                        'id' => Str::uuid(),
                        'type' => 'image',
                        'value' => $block['value'] // Ini berisi URL string gambar yang sudah ada
                    ];
                }
            }
        }

        return $processedBlocks;
    }
}