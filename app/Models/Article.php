<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    // Mengizinkan semua kolom diisi (kecuali id)
    protected $guarded = ['id'];

    // Ubah format data otomatis
    protected $casts = [
        'published_at' => 'date',   // Biar tanggal mudah diolah
        'is_featured' => 'boolean', // Biar jadi true/false (bukan 1/0)
    ];

    // Relasi: Artikel ini milik SATU kategori
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}