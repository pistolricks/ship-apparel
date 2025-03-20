<?php

use App\Http\Controllers\Central as Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home/v1', Controllers\Api\HomeController::class)->name('api.home.index');
Route::get('/shop/v1', Controllers\Api\Shop\ShopController::class)->name('api.shop.index');
Route::get('/shop/v1/products', [Controllers\Api\Shop\ProductController::class, "index"])->name('api.products.index');
