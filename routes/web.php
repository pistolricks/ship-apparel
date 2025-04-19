<?php

use App\Http\Controllers\Central as Controllers;
use App\Http\Controllers\CreateStyleController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByRequestData;



Route::view('/', 'app')->name('central.app');

Route::view('/our-company', 'app')->name('central.our-company');
Route::view('/contact-us', 'app')->name('central.contact-us');


Route::view('/shop', 'app')->name('central.shop');
Route::view('/shop/style/{id}', 'app')->name('central.style.show');
Route::view('/shop/brands', 'app')->name('central.shop.brand.index');
Route::view('/shop/brands/{brand}', 'app')->name('central.shop.brand.show');
Route::view('/shop/{category}', 'app')->name('central.shop.category');
Route::view('/shop/{category}/{subCategory}', 'app')->name('central.products.category.subcategory');


Route::view('/login', 'app')->name('login');
Route::view('/register', 'app')->name('register');
Route::view('/resend', 'app')->name('app');
Route::view('/activate', 'app')->name('app');


Route::view('/api/login', 'app')->name('central.api.login');
Route::view('/api/register', 'app')->name('central.api.register');

// Route::get('/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
// Route::post('/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');
//
// Route::get('/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
// Route::post('/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');

