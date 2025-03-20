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
        return response()->json([
            "menu" => config('menu'),
            "products" => Product::query()->where('MILL', $brandName)->paginate(100),
            "user" => $request->user(),
        ]);
    }
}
