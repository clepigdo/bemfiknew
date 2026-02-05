<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ContactController; 
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| HALAMAN PUBLIK (Bisa diakses siapa saja)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    // Ambil data program unggulan untuk ditampilkan di Welcome
    $programs = \App\Models\Program::latest()->get();
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'programs' => $programs,
    ]);
});

// --- Route Halaman Statis Divisi ---
Route::get('/pages/profil-p3', function () { return Inertia::render('P3Page'); })->name('p3');
Route::get('/pages/profil-ekokraf', function () { return Inertia::render('EkokrafPage'); })->name('ekokraf');
Route::get('/pages/profil-pr', function () { return Inertia::render('PrPage'); })->name('pr');
Route::get('/pages/profil-psdm', function () { return Inertia::render('PsdmPage'); })->name('psdm');
Route::get('/pages/profil-medkref', function () { return Inertia::render('MedkrefPage'); })->name('medkref');
Route::get('/pages/profil-mikat', function () { return Inertia::render('MikatPage'); })->name('mikat');

// --- Route Artikel Pengunjung ---
Route::get('/artikel', [ArticleController::class, 'publicIndex'])->name('public.articles');
Route::get('/artikel/{article:slug}', [ArticleController::class, 'show'])->name('public.articles.show');

// --- Route Kirim Pesan (Public) ---
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');


/*
|--------------------------------------------------------------------------
| HALAMAN ADMIN (Harus Login)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    
    // 1. Dashboard Utama Admin
    Route::get('/', function () {
        // Hitung pesan yang belum dibaca untuk ditampilkan di statistik
        $unreadMessages = \App\Models\Contact::where('is_read', false)->count();

        return Inertia::render('Dashboard', [
            'stats' => [
                'artikel' => [
                    'total' => \App\Models\Article::count(), 
                    'trend' => '+2 bulan ini', 
                    'trend_color' => 'text-green-500'
                ],
                'pengurus' => [
                    'total' => \App\Models\Member::count(), 
                    'trend' => 'Tetap', 
                    'trend_color' => 'text-gray-500'
                ],
                'proker' => [
                    'total' => \App\Models\Program::count(), 
                    'trend' => '3 Selesai', 
                    'trend_color' => 'text-blue-500'
                ],
                // Kita ganti 'pengunjung' jadi statistik Pesan Masuk agar lebih berguna
                'pengunjung' => [
                    'total' => \App\Models\Contact::count(), 
                    'trend' => $unreadMessages . ' Belum Dibaca', 
                    'trend_color' => $unreadMessages > 0 ? 'text-red-500' : 'text-green-500'
                ],
            ]
        ]);
    })->name('dashboard');

    // 2. Manajemen Artikel
    Route::resource('articles', ArticleController::class);

    // 3. Manajemen Pengurus
    Route::resource('members', MemberController::class);

    // 4. Manajemen Program Kerja
    Route::resource('programs', ProgramController::class);

    // 5. Manajemen Pesan Masuk (Inbox) - BARU DITAMBAHKAN
    Route::get('/inbox', [ContactController::class, 'index'])->name('admin.inbox.index');
    Route::patch('/inbox/{contact}', [ContactController::class, 'update'])->name('admin.inbox.update');
    Route::delete('/inbox/{contact}', [ContactController::class, 'destroy'])->name('admin.inbox.destroy');

});


/*
|--------------------------------------------------------------------------
| PROFILE USER (Bawaan Breeze)
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';