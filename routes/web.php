<?php

use App\Http\Controllers\Central as Controllers;
use Illuminate\Support\Facades\Route;

Route::view('/', 'app')->name('app');
Route::view('/login', 'app')->name('app');
Route::view('/register', 'app')->name('app');
Route::view('/resend', 'app')->name('app');
Route::view('/activate', 'app')->name('app');

Route::get('/v1/products', Controllers\ProductController::class)->name('central.products.index');

Route::get('/v1/products/import', Controllers\Import\SanMarController::class)->name('central.products.import');
Route::get('/v1/products/csv', Controllers\Import\CsvController::class)->name('central.products.csv');
Route::get('/v1/products/unzip', Controllers\Import\UnzipController::class)->name('central.products.unzip');

Route::get('/admin/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
Route::post('/admin/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');

Route::get('/admin/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
Route::post('/admin/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');
