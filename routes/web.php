<?php

use App\Http\Controllers\Central as Controllers;
use Illuminate\Support\Facades\Route;

Route::view('/', 'app')->name('app');
Route::view('/login', 'app')->name('app');
Route::view('/register', 'app')->name('app');
Route::view('/resend', 'app')->name('app');
Route::view('/activate', 'app')->name('app');

Route::get('/clients/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
Route::post('/clients/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');

Route::get('/clients/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
Route::post('/clients/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');
