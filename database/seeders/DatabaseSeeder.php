<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        //member
        \App\Models\Member::create([
            'name' => 'Igdo Ragil',
            'position' => 'Ketua BEM',
            'division' => 'BPH',
            'status' => 'aktif'
        ]);

        \App\Models\Member::create([
            'name' => 'Fulanah',
            'position' => 'Sekretaris',
            'division' => 'BPH',
            'status' => 'aktif'
        ]);

        // proker
        \App\Models\Program::create([
            'title' => 'LKMM-TD',
            'description' => 'Latihan Kepemimpinan Tingkat Dasar',
            'slug' => 'lkmm-td',
            'status' => 'terlaksana'
        ]);

        \App\Models\Program::create([
            'title' => 'FIX CUP',
            'description' => 'Kompetisi Olahraga Futsal',
            'slug' => 'fix-cup',
            'status' => 'berjalan'
        ]);
    
        \App\Models\Program::create([
            'title' => 'PCP',
            'description' => 'Pembekalan Calon Pengurus',
            'slug' => 'pcp',
            'status' => 'belum'
        ]);
    }
}
