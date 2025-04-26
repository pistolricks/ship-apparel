<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Support\PriceSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class AthleticImagesController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $id)
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'style_color' => $id
            ])->get('http://localhost:4000/v1/athletic-images');

        $resp = $response->json();



        // $filtered = PriceSupport::make($collection);

        return response()->json([
            "images" => $resp,
            "metadata" => $resp['metadata'],
        ]);
    }
}
