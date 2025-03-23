<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function __invoke(Request $request)
    {
        /*
        $products = Product::query()
            ->where('product_status', '!=', 'Discontinued')
            ->where('size', 'S')
            ->orderBy('mill')
            ->paginate(1000);
*/
        $styles = Style::query()
            ->select('id','title','description','mill', 'msrp', 'front_model_image_url')
            ->with('tags:id,name,slug,type')
            ->orderBy('mill')->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $styles,
            "user" => $request->user(),
        ]);
    }
}
