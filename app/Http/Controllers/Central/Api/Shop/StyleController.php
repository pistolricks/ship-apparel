<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StyleController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function __invoke(Request $request, Style $style)
    {

        $response = Http::retry(3, 100)
            ->withQueryParameters(["style" => $style['id'],
                (array) $request
            ])
            ->get('http://localhost:4000/v1/products');


        return response()->json([
            "menu" => config('menu'),
            "style" => $style,
            "products" => $response->json(),

            "user" => $request->user(),
        ]);
    }
}
