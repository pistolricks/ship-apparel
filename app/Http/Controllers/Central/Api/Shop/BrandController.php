<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Support\BrandSupport;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function __invoke(Request $request, string $brand)
    {
        $brandName = BrandSupport::lookupBrand($brand);

        $products = Product::query()->where('mill', $brandName)->where('product_status', '!=', 'Discontinued')->paginate(2000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }
}
