<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Integrations\Vendors\Requests\StylesRequest;
use App\Http\Integrations\Vendors\VendorConnector;
use App\Models\Product;
use App\Models\Style;
use App\Support\BrandSupport;
use App\Support\CategorySupport;
use Illuminate\Http\Request;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class CategoryController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     */
    public function __invoke(Request $request, string $category)
    {

        $categoryName = CategorySupport::lookupCategory($category);

        $connector = new VendorConnector;
        $r = new StylesRequest;
        $r->query()->add($request);

        $response = $connector->send($r);

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
