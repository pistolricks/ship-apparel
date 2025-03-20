<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __invoke(Request $request, string $category)
    {



        return response()->json([
            "menu" => config('menu'),
            "products" => Product::query()->where('CATEGORY_NAME', $category)->paginate(100),
            "user" => $request->user(),
        ]);
    }
}
