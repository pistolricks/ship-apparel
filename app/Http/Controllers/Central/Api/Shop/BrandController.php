<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Support\BrandSupport;
use App\Support\PriceSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BrandController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $brand)
    {
        $brandName = BrandSupport::lookupBrand($brand);




        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'mill' => $brand,
                'sort' => 'category_name',
                (array) $request
            ])->get('http://localhost:4000/v1/styles');


        $resp = $response->json();

        $collection = collect($resp['styles']);

        $filtered = PriceSupport::make($collection);


        return response()->json([
            "list" => $filtered,
            "metadata" => $resp['metadata'],
            "user" => $request->user(),
            "banner" => $brandName,
            "menu" => config('menu'),
        ]);
    }
}
