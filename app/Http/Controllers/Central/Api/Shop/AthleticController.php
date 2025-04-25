<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Support\PiecePriceSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AthleticController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $id)
    {

        $response = Http::retry(3, 10)
            ->get('http://localhost:4000/v1/athletics?parent_sku='.$id);

        $resp = $response->json();

        $collection = collect($resp['athletics']);

//        $filtered = PiecePriceSupport::make($collection);

        $athletics = $collection;

        $product = $collection->first();


        return response()->json([
            "menu" => config('menu'),
            "product" => $product,
            "data" => $athletics,
            "user" => $request->user(),
        ]);
    }
}
