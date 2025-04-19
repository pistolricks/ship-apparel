<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Integrations\Vendors\Requests\StylesRequest;
use App\Http\Integrations\Vendors\VendorConnector;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class CategoryController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     * @throws ConnectionException
     */
    public function __invoke(Request $request, string $category)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'category_name' => $categoryName,
                'sort' => 'product_title',
                (array) $request
            ])->get('http://localhost:4000/v1/styles');

        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
            "user" => $request->user(),
        ]);
    }
}
