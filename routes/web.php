<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/pages/profil-p3', function () {
    return Inertia::render('P3Page'); 
})->name('p3');

Route::get('/pages/profil-ekokraf', function () {
    return Inertia::render('EkokrafPage'); 
})->name('ekokraf');

Route::get('/pages/profil-pr', function () {
    return Inertia::render('PrPage'); 
})->name('pr');

Route::get('/pages/profil-psdm', function () {
    return Inertia::render('PsdmPage'); 
})->name('psdm');

Route::get('/pages/profil-medkref', function () {
    return Inertia::render('MedkrefPage'); 
})->name('medkref');

Route::get('/pages/profil-mikat', function () {
    return Inertia::render('MikatPage'); 
})->name('mikat');

Route::get('/artikel', function () {
    return Inertia::render('ArticlePage');
})->name('artikel');




