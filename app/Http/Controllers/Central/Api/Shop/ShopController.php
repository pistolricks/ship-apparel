<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Http\Integrations\Vendors\Requests\StylesRequest;
use App\Http\Integrations\Vendors\VendorConnector;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class ShopController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     * @throws ConnectionException
     */
    public function __invoke(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters((array) $request)
            ->get('http://localhost:4000/v1/styles?sort=mill,id');


        return response()->json([
            "menu" => config('menu'),
            "products" => $response->json(),
            "user" => $request->user(),
        ]);
    }
}
