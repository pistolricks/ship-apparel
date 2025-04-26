<?php

use App\Http\Controllers\Central as Controllers;
use App\Http\Controllers\Central\Api\Shop\ProductController;
use App\Http\Controllers\Central\Api\Upload\ImageController;
use App\Models\Style;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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
Route::get('/shop/v1/products/brands/{brand}', Controllers\Api\Shop\BrandController::class)->name('api.brand.index');
Route::get('/shop/v1/products/category/{category}', Controllers\Api\Shop\CategoryController::class)->name('api.category.index');


Route::get('/shop/v1/products/category/{category}/{subCategory}', Controllers\Api\Shop\SubCategoryController::class)->name('api.subcategory.index');
Route::get('/shop/v1/styles/{style}', Controllers\Api\Shop\StyleController::class)->name('api.styles.show');

Route::get('/shop/v1/athletics', Controllers\Api\Shop\AthleticsController::class)->name('api.athletics.index');

Route::get('/shop/v1/athletics/{id}', Controllers\Api\Shop\AthleticController::class)->name('api.athletics.show');
Route::get('/shop/v1/athletic-styles', Controllers\Api\Shop\AthleticStylesController::class)->name('api.athletics-styles.index');
Route::get('/shop/v1/athletic-images/{style_color}', Controllers\Api\Shop\AthleticImagesController::class)->name('api.athletics-images.index');

Route::get('/products/v1/images/import',[ProductController::class,"importImages"])->name('api.products.images.import');
Route::get('/products/v1/images/bulk/delete',[ProductController::class,"bulkDelete"])->name('api.products.images.bulk.delete');

Route::post('/images/v1/upload', [ImageController::class, "create"])->name('api.images.create');

Route::post("/v1/carts", [Controllers\Api\Shop\CartController::class, "store"])->name('api.carts.store');
Route::get("/v1/carts/{id}", [Controllers\Api\Shop\CartController::class, "show"])->name('api.carts.show');
Route::get("/v1/users/{id}/cart", [Controllers\Api\Shop\CartController::class, "userCart"])->name('api.carts.users.show');
Route::post("/v1/carts/{id}/items", [Controllers\Api\Shop\CartController::class, "addItems"])->name('api.carts.index');
Route::put("/v1/carts/{id}/items", [Controllers\Api\Shop\CartController::class, "items"])->name('api.carts.index');
Route::delete("/v1/carts/{id}/items", [Controllers\Api\Shop\CartController::class, "destroy"])->name('api.carts.index');

Route::post("/v1/orders", [Controllers\Api\Shop\OrderController::class, "store"])->name('api.orders.store');
Route::get("/v1/orders/{id}", [Controllers\Api\Shop\OrderController::class, "show"])->name('api.orders.show');
Route::get("/v1/users/{id}/orders", [Controllers\Api\Shop\OrderController::class, "index"])->name('api.orders.index');
Route::put("/v1/orders/{id}/status", [Controllers\Api\Shop\OrderController::class, "status"])->name('api.orders.status');
Route::get("/v1/orders/{id}/track", [Controllers\Api\Shop\OrderController::class, "track"])->name('api.orders.track');


Route::post("/v1/shipping/token",[\App\Http\Controllers\Central\Api\Shop\ShippingController::class, "token"])->name('api.shipping.token');
Route::post("/v1/shipping/validate-address",[\App\Http\Controllers\Central\Api\Shop\ShippingController::class, "validateAddress"])->name('api.shipping.validate-address');;
Route::post("/v1/shipping/shipments",[\App\Http\Controllers\Central\Api\Shop\ShippingController::class, "store"])->name('api.shipping.store');
Route::get("/v1/shipping/shipments/{tracking_number}",[\App\Http\Controllers\Central\Api\Shop\ShippingController::class, ""])->name('api.shipping.');


Route::get('/v1/styles', function () {
    return Style::query()->get();
});

Route::get('/v1/products', function ($id, Request $request) {
    return Http::retry(3, 100)
        ->withQueryParameters(["style" => $id,
            (array) $request
        ])
        ->get('http://localhost:4000/v1/products', []);
});
