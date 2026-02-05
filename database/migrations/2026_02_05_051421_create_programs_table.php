<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('programs', function (Blueprint $table) {
        $table->id();
        $table->string('title');            // Nama Proker (misal: LKMM-TD)
        $table->text('description');        // Deskripsi singkat
        $table->string('slug')->unique();   // Untuk link (misal: lkmm-td)
        $table->enum('status', ['terlaksana', 'berjalan', 'belum'])->default('belum');
        $table->date('date')->nullable();   // Tanggal pelaksanaan
        $table->string('image')->nullable();// Poster proker
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programs');
    }
};
