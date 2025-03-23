<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    public function __invoke(Request $request, string $brand)
    {
        $brandName = BrandSupport::lookupBrand($brand);

        $products = Style::query()
            ->select('id','title','description','mill', 'msrp', 'front_model_image_url')
            ->with('tags:id,name,slug,type')
            ->where('mill', $brandName)
            ->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $products,
            "user" => $request->user(),
        ]);
    }
}
