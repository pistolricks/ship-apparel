<?php

use Illuminate\Support\Facades\Route;


Route::view('/', 'app')->name('central.app');
Route::view('/cart', 'app')->name('central.cart');
Route::view('/checkout', 'app')->name('central.checkout');
Route::view('/our-company', 'app')->name('central.our-company');
Route::view('/contact-us', 'app')->name('central.contact-us');

Route::view('/design-lab', 'app')->name('central.design-lab');
Route::view('/workwear', 'app')->name('central.workwear');
Route::view('/school-spirit', 'app')->name('central.school-spirit');
Route::view('/team-uniforms', 'app')->name('central.team-uniforms');
Route::view('/team-uniforms/{id}', 'app')->name('central.team-uniforms.show');


Route::view('/team-uniforms/sports/{category}', 'app')->name('central.team-uniforms.sports.show');

Route::view('/popups', 'app')->name('central.popups');

Route::view('/apparel', 'app')->name('central.apparel');
Route::view('/apparel/style/{id}', 'app')->name('central.style.show');
Route::view('/apparel/brands', 'app')->name('central.apparel.brand.index');
Route::view('/apparel/brands/{brand}', 'app')->name('central.apparel.brand.show');
Route::view('/apparel/{category}', 'app')->name('central.apparel.category');
Route::view('/apparel/{category}/{subCategory}', 'app')->name('central.products.category.subcategory');


Route::view('/login', 'app')->name('login');
Route::view('/register', 'app')->name('register');
Route::view('/resend', 'app')->name('app');
Route::view('/activate', 'app')->name('app');


Route::view('/sign-in', 'app')->name('central.api.login');
Route::view('/create-account', 'app')->name('central.api.register');

// Route::get('/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
// Route::post('/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');
//
// Route::get('/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
// Route::post('/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');

