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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');             // Nama Pengurus
            $table->string('position');         // Jabatan 
            $table->string('division');         // Divisi 
            $table->string('photo')->nullable(); // Foto (boleh kosong)
            $table->enum('status', ['aktif', 'nonaktif'])->default('aktif'); // Status
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
