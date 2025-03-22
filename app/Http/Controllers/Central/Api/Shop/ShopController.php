<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function __invoke(Request $request)
    {
        $products = Product::query()->where('product_status', '!=', 'Discontinued')->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }
}
