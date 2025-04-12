<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Http\Integrations\Vendors\Requests\StylesRequest;
use App\Http\Integrations\Vendors\VendorConnector;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Http\Request;
use Saloon\Exceptions\Request\FatalRequestException;
use Saloon\Exceptions\Request\RequestException;

class ShopController extends Controller
{
    /**
     * @throws FatalRequestException
     * @throws RequestException
     */
    public function __invoke(Request $request)
    {
        /*
        $products = Product::query()
            ->where('product_status', '!=', 'Discontinued')
            ->where('size', 'S')
            ->orderBy('mill')
            ->paginate(1000);



*/

        $connector = new VendorConnector;
        $request = new StylesRequest;

        $response = $connector->send($request);

        $styles = Style::query()
            ->select('id','title','description','mill','data', 'msrp', 'front_model_image_url','back_model_image_url', 'front_flat_image_url', 'back_flat_image_url', 'slug')
            ->where('title', 'NOT LIKE', '%'.'Discontinued'.'%')
            ->orderBy('id')->paginate(1000);

        return response()->json([
            "menu" => config('menu'),
            "products" => $response,
            "user" => $request->user(),
        ]);
    }
}
