<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Integrations\Vendors\Requests\StylesRequest;
use App\Http\Integrations\Vendors\VendorConnector;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $brand)
    {
        // $brandName = BrandSupport::lookupBrand($brand);

        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'mill' => $brand,
                (array) $request
            ])->get('http://localhost:4000/v1/styles');

        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
            "user" => $request->user(),
        ]);
    }
}
