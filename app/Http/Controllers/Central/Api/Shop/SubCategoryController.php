<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use App\Support\SubCategorySupport;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function __invoke(Request $request, string $category, string $subCategory)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $subCategoryName = SubCategorySupport::lookupSubCategory($subCategory);

        $styles = Style::query()
            ->select('id','title','description','mill','data', 'msrp', 'front_model_image_url','back_model_image_url', 'front_flat_image_url', 'back_flat_image_url', 'slug')
            ->where('categories','LIKE', '%'.$categoryName.'%')
            ->orwhere('title','LIKE', '%'.$subCategoryName.'%')
            ->orWhere('description','LIKE', '%'.$subCategoryName.'%')
            ->with(['miller' => function ($query) {
                $query->select('id','name');
            }])
           // ->with('tags:id,name,slug,type')
            ->orderBy('mill')
            ->paginate(1000);



        return response()->json([
            "menu" => config('menu'),
            "products" => $styles,
            "user" => $request->user(),
        ]);
    }
}
