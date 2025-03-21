<?php

use App\Http\Controllers\Central as Controllers;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByRequestData;



Route::view('/', 'app')->name('central.app');
Route::view('/products', 'app')->name('central.products');
Route::view('/products/brands/{brand}', 'app')->name('central.products.brand');
Route::view('/products/category/{category}', 'app')->name('central.products.category');
// Route::view('/login', 'app')->name('central.tenants.login');
// Route::view('/register', 'app')->name('central.tenants.register');
// Route::view('/resend', 'app')->name('app');
// Route::view('/activate', 'app')->name('app');


Route::get('/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
Route::post('/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');

Route::get('/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
Route::post('/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');
