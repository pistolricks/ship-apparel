<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Actions\images\ImageDeleteAction;
use App\Actions\images\ImageImportAction;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function __construct(
        private readonly ImageImportAction $importAction,
        private readonly ImageDeleteAction $deleteAction
    ) {

    }

    /**
     * @throws ConnectionException
     */
    public function index(Request $request)
    {

        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'sort' => 'mill',
                (array) $request
            ])->get('http://localhost:4000/v1/styles');
        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
            "user" => $request->user(),
        ]);
    }

    public function store(Request $request)
    {
    }

    public function show(Product $product)
    {
    }

    public function update(Request $request, Product $product)
    {
    }

    public function destroy(Product $product)
    {

    }

    public function importImages(): \Illuminate\Http\JsonResponse
    {

        $path = storage_path('app/csvjson2.json');
        $products = json_decode(file_get_contents($path), true);
        foreach ($products as $product) {
            $this->importAction->onQueue()->execute($product['url'], $product['id']);
            return response()->json([
                "message" => "success"
            ]);
        }
    }

    public function bulkDelete(): \Illuminate\Http\JsonResponse
    {
        $path = storage_path('app/images.json');
        $products = json_decode(file_get_contents($path), true);

        foreach ($products as $product) {
            $this->deleteAction->onQueue()->execute($product['id']);
        };

        return response()->json([
            "message" => "success"
        ]);
    }
}
