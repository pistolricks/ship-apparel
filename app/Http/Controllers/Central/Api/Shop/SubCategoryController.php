<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use App\Support\SubCategorySupport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SubCategoryController extends Controller
{
    public function __invoke(Request $request, string $category, string $subCategory)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $subCategoryName = SubCategorySupport::lookupSubCategory($subCategory);

        $categoryName = CategorySupport::lookupCategory($category);

        $response = Http::retry(3, 100)
            ->withQueryParameters([
                'category_name' => $categoryName,
                'subcategory_name' => $subCategoryName,
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
