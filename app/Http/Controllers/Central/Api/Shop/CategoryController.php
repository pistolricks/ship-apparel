<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __invoke(Request $request, string $category)
    {

        $products = Product::query()->where('category_name', $category)->where('product_status', '!=', 'Discontinued')->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }
}
