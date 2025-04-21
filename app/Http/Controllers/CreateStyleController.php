<?php

namespace App\Http\Controllers;


use App\Actions\Style\StyleAction;
use App\Models\Product;

class CreateStyleController extends Controller
{
    public function __construct(
        private readonly StyleAction $action
    )
    {}

    public function __invoke()
    {
        $products = Product::query()
            ->where('product_status', '!=', 'Discontinued')
            ->get()->unique('style')->values()->map(fn($product) => $this->action->onQueue()->execute($product));


        return $products;

    }
}
