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

        $response = Http::async(true)
            ->withQueryParameters(['id' => $id])
            ->get('http://localhost:4000/v1/styles/' . $id );



        return response()->json([
            "menu" => config('menu'),
            "data" => $response->json(),
            "user" => $request->user(),
        ]);
    }
}
