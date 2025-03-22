<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __invoke(Request $request, string $category)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $products = Product::query()->where('category_name', $categoryName)->where('product_status', '!=', 'Discontinued')->paginate(2000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }
}
