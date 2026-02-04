<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController; // <--- JANGAN LUPA INI
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| HALAMAN PUBLIK (Bisa diakses siapa saja)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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


/*
|--------------------------------------------------------------------------
| HALAMAN ADMIN (Harus Login)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    
    // Dashboard Utama Admin
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // CRUD Artikel (Otomatis membuat route untuk index, create, store, edit, update, destroy)
    // URL: /dashboard/articles, /dashboard/articles/create, dst.
    Route::resource('articles', ArticleController::class);

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