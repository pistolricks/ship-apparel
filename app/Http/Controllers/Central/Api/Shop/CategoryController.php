<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __invoke(Request $request, string $category)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $styles = Style::query()
            ->select('id','title','description','mill','data', 'msrp', 'front_model_image_url','back_model_image_url', 'front_flat_image_url', 'back_flat_image_url', 'slug')
            ->where('categories','LIKE', '%'.$categoryName.'%')
            ->where('title', 'NOT LIKE', '%'.'Discontinued'.'%')
            ->with(['miller' => function ($query) {
                $query->select('id','name');
            }])
           // ->with('tags:id,name,slug,type')
            ->orderBy('id')
            ->paginate(1000);



        return response()->json([
            "menu" => config('menu'),
            "products" => $styles,
            "user" => $request->user(),
        ]);
    }
}
