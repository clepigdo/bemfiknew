<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * ADMIN: Menampilkan daftar pesan masuk (Inbox).
     */
    public function index()
    {
        return Inertia::render('Admin/Inbox/Index', [
            'contacts' => Contact::latest()->get()
        ]);
    }

    /**
     * PUBLIC: Menyimpan pesan dari formulir kontak.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        // Redirect back dengan pesan sukses
        return back()->with('success', 'Pesan kamu berhasil dikirim! Kami akan segera merespons.');
    }

    /**
     * ADMIN: Menandai pesan sebagai sudah dibaca / belum.
     */
    public function update(Contact $contact)
    {
        // Fitur Toggle: Kalau sudah baca jadi belum, kalau belum jadi sudah.
        $contact->update([
            'is_read' => !$contact->is_read
        ]);

        return back()->with('success', 'Status pesan diperbarui.');
    }

    /**
     * ADMIN: Menghapus pesan selamanya.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return back()->with('success', 'Pesan berhasil dihapus.');
    }
}