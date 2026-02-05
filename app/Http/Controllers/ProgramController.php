<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProgramController extends Controller
{
    /**
     * Tampilkan daftar proker di Admin.
     */
    public function index()
    {
        return Inertia::render('Admin/Programs/Index', [
            'programs' => Program::latest()->get()
        ]);
    }

    /**
     * Halaman tambah proker.
     */
    public function create()
    {
        return Inertia::render('Admin/Programs/Create');
    }

    /**
     * Simpan proker baru ke database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'status' => 'required|in:terlaksana,berjalan,belum',
            'image' => 'nullable|image|max:2048', // Max 2MB
        ]);

        // Upload Gambar jika ada
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('programs', 'public');
        }

        // Buat Slug otomatis (misal: "Latihan Dasar" -> "latihan-dasar")
        $validated['slug'] = Str::slug($request->title);

        Program::create($validated);

        return redirect()->route('programs.index')->with('success', 'Program kerja berhasil dibuat!');
    }

    /**
     * Halaman edit proker.
     */
    public function edit(Program $program)
    {
        return Inertia::render('Admin/Programs/Edit', [
            'program' => $program
        ]);
    }

    /**
     * Update data proker.
     */
    public function update(Request $request, Program $program)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'status' => 'required|in:terlaksana,berjalan,belum',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Hapus gambar lama agar hemat storage
            if ($program->image) {
                Storage::disk('public')->delete($program->image);
            }
            $validated['image'] = $request->file('image')->store('programs', 'public');
        }

        if ($request->title !== $program->title) {
            $validated['slug'] = Str::slug($request->title);
        }

        $program->update($validated);

        return redirect()->route('programs.index')->with('success', 'Program kerja diperbarui!');
    }

    
    public function destroy(Program $program)
    {
        if ($program->image) {
            Storage::disk('public')->delete($program->image);
        }
        
        $program->delete();

        return redirect()->back()->with('success', 'Program kerja dihapus.');
    }
}