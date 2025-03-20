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
        return response()->json([
            "menu" => config('menu'),
            "products" => ProductData::collect(Product::query()->paginate(100)),
            "user" => $request->user(),
        ]);
    }
}
