<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Menampilkan daftar artikel di halaman publik.
     */
    public function publicIndex(Request $request)
{
    $search = $request->input('search');

    $articles = Article::with('category')
        ->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
        })
        ->latest()
        ->paginate(9)
        ->withQueryString(); 

    $featured = Article::with('category')->where('is_featured', true)->latest()->first();

    return Inertia::render('ArticlePage', [
        'articles' => $articles,
        'featuredArticle' => $featured,
        'filters' => $request->only(['search']) 
    ]);
}

    /**
     * Menampilkan detail artikel di halaman publik.
     */
    public function show(Article $article)
    {
        return Inertia::render('ArticleDetail', [
            'article' => $article->load('category')
        ]);
    }

    /**
     * Menampilkan daftar artikel di halaman Admin.
     */
    public function index()
    {
        $articles = Article::with('category')
            ->latest()
            ->paginate(10); 

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles
        ]);
    }

    /**
     * Menampilkan form untuk membuat artikel baru.
     */
    public function create()
    {
        return Inertia::render('Admin/Articles/Create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Menyimpan artikel baru dengan sistem Modular Blocks.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'blocks' => 'required|array', 
            'image' => 'nullable|image|max:2048', // Cover Utama
            'published_at' => 'nullable|date',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('articles/covers', 'public');
        }

        $processedBlocks = $this->processBlocks($request);

        Article::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title) . '-' . time(),
            'category_id' => $request->category_id,
            'content' => json_encode($processedBlocks),
            'excerpt' => Str::limit(strip_tags($request->title), 150),
            'image' => $imagePath,
            'author' => $request->user()->name, 
            'published_at' => $request->published_at ?? now(),
        ]);

        return redirect()->route('articles.index')->with('success', 'Artikel berhasil diterbitkan!');
    }

    /**
     * Menampilkan form edit artikel.
     */
    public function edit(Article $article)
    {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article,
            'categories' => Category::all()
        ]);
    }

    /**
     * Memperbarui artikel yang sudah ada.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'blocks' => 'required|array',
            'image' => 'nullable|image|max:2048',
            'published_at' => 'nullable|date',
        ]);

        $processedBlocks = $this->processBlocks($request);

        $data = [
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => json_encode($processedBlocks),
            'excerpt' => Str::limit(strip_tags($request->title), 150),
            'published_at' => $request->published_at ?? $article->published_at,
        ];

        if ($request->hasFile('image')) {
            if ($article->image) {
                Storage::disk('public')->delete($article->image);
            }
            $data['image'] = $request->file('image')->store('articles/covers', 'public');
        }
        $article->update($data);

        return redirect()->route('articles.index')->with('success', 'Artikel berhasil diperbarui!');
    }

    /**
     * Menghapus artikel beserta filenya.
     */
    public function destroy(Article $article)
    {
        // Hapus cover image
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }

        // Hapus gambar-gambar di dalam blok konten jika ada
        $blocks = json_decode($article->content, true);
        if (is_array($blocks)) {
            foreach ($blocks as $block) {
                if ($block['type'] === 'image') {
                    // Ekstrak path dari URL
                    $path = str_replace('/storage/', '', $block['value']);
                    Storage::disk('public')->delete($path);
                }
            }
        }

        $article->delete();

        return redirect()->back()->with('success', 'Artikel berhasil dihapus!');
    }

    /**
     * Helper function untuk memproses array blocks.
     */
    private function processBlocks(Request $request)
{
    $processedBlocks = [];
    foreach ($request->blocks as $index => $block) {
        if ($block['type'] === 'text') {
            $processedBlocks[] = [
                'type' => 'text',
                'value' => $block['value']
            ];
        } elseif ($block['type'] === 'image') {
            // Jika ada file baru yang diunggah di blok ini
            if ($request->hasFile("blocks.{$index}.value")) {
                $file = $request->file("blocks.{$index}.value");
                $path = $file->store('articles/content', 'public');
                $processedBlocks[] = [
                    'type' => 'image',
                    'value' => Storage::url($path)
                ];
            } else {
                $processedBlocks[] = [
                    'type' => 'image',
                    'value' => $block['value']
                ];
            }
        }
    }
    return $processedBlocks;
}
}