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
            ->where('categories','LIKE', '%'.$categoryName.'%')
            ->select('id','title','description','mill', 'msrp', 'front_model_image_url')
            ->with('tags:id,name,slug,type')
            ->orderBy('mill')
            ->paginate(1000);



        return response()->json([
            "menu" => config('menu'),
            "products" => $styles,
            "user" => $request->user(),
        ]);
    }
}
