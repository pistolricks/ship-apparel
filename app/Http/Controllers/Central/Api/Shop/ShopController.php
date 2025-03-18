<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Data\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ShopController extends Controller
{
    public function __invoke()
    {
        return ProductData::collect(Product::query()->paginate(100));
    }
}
