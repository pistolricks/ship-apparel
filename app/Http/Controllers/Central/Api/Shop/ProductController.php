<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {

        $products = Product::query()->where('product_status', '!=', 'Discontinued')->paginate(1000);


        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }

    public function store(Request $request)
    {
    }

    public function show(Product $product)
    {
    }

    public function update(Request $request, Product $product)
    {
    }

    public function destroy(Product $product)
    {
    }
}
