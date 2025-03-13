<?php

namespace App\Http\Controllers\Central;

use App\Data\ProductData;
use App\Data\ProductDataCollection;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function __invoke()
    {
        return Product::query()->paginate(100);
    }
}
