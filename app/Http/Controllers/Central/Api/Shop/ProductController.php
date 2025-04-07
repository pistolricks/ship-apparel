<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Actions\images\ImageDeleteAction;
use App\Actions\images\ImageImportAction;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(
        private readonly ImageImportAction $importAction,
        private readonly ImageDeleteAction $deleteAction
    ) {

    }

    public function index(Request $request)
    {

        $styles = Style::query()
            ->select('id', 'title', 'description', 'mill', 'data', 'msrp', 'front_model_image_url',
                'back_model_image_url', 'front_flat_image_url', 'back_flat_image_url', 'slug')
            ->where('title', 'NOT LIKE', '%'.'Discontinued'.'%')
            ->orderBy('id')->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $styles,
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
