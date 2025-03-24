<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Request;

class StyleController extends Controller
{
    public function __invoke(Request $request, Style $style)
    {

        $s = $style->load('miller','products');

        return response()->json([
            "menu" => config('menu'),
            "style" => $s,
            "user" => $request->user(),
        ]);
    }
}
