<?php

use App\Http\Controllers\Central as Controllers;
use Illuminate\Support\Facades\Route;

Route::view('/', 'app')->name('app');

Route::get('/register', [Controllers\RegisterTenantController::class, 'show'])->name('central.tenants.register');
Route::post('/register/submit', [Controllers\RegisterTenantController::class, 'submit'])->name('central.tenants.register.submit');

Route::get('/login', [Controllers\LoginTenantController::class, 'show'])->name('central.tenants.login');
Route::post('/login/submit', [Controllers\LoginTenantController::class, 'submit'])->name('central.tenants.login.submit');
