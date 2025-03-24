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

        $s = $style->load('miller');

        $s->miller->getFirstMediaUrl('logo');

        $products = Product::query()
            ->where('style', $s->id)
            ->where('size', 'M')
            ->get([
                'id',
                'color_name',
                'color_square_image',
                'available_sizes',
                'msrp',
                'size',
                'front_model_image_url',
                'back_model_image_url',
                'front_flat_image_url',
                'back_flat_image_url',
                'piece_weight',
                'case_size',
                'gtin',
            ])
            ->all();

        $s->products = $products;

        return response()->json([
            "menu" => config('menu'),

            "style" => $s,

            "user" => $request->user(),
        ]);
    }
}
