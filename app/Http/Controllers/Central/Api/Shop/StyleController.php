<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Data\StyleData;
use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StyleController extends Controller
{
    public function __invoke(Request $request,string $id)
    {

        $style = Http::retry(3, 100)
            ->withQueryParameters(['id' => $id])
            ->get('http://localhost:4000/v1/styles/' . $id );


        $response = Http::retry(3, 100)
            ->withQueryParameters(['style' => $id])
            ->get('http://localhost:4000/v1/products');



        return response()->json([
            "menu" => config('menu'),
            "style" => $style->json(),
            "products" => $response->json(),

            "user" => $request->user(),
        ]);
    }
}
