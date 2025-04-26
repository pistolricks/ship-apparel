<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Support\PriceSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class AthleticStylesController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     * @throws ConnectionException
     */
    public function __invoke(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'sort' => 'brand',
                (array) $request
            ])->get('http://localhost:4000/v1/athletic-styles');

        $resp = $response->json();

        $collection = collect($resp['athletics']);

        // $filtered = PriceSupport::make($collection);

        return response()->json([
            "menu" => config('menu'),
            "list" => $collection,
            "metadata" => $resp['metadata'],
            "user" => $request->user(),
        ]);
    }
}
