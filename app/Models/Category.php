<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    // Mengizinkan semua kolom diisi (kecuali id)
    protected $guarded = ['id'];

    // Relasi: Satu kategori bisa punya BANYAK artikel
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}