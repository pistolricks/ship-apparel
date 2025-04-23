<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Support\PiecePriceSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StyleController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $id)
    {

        $response = Http::retry(3, 10)
            ->get('http://localhost:4000/v1/styles/'.$id);

        $resp = $response->json();

        $collection = collect($resp['style']['data']);

        $filtered = PiecePriceSupport::make($collection);

        $style = $resp['style'];

        $style = $filtered[0];

        $style['data'] = $filtered;


        return response()->json([
            "menu" => config('menu'),
            "data" => $style,
            "user" => $request->user(),
        ]);
    }
}
