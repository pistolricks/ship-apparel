<?php

namespace App\Http\Controllers;

use App\Actions\AddImageToStyleAction;
use App\Actions\AddTagToStyleAction;
use App\Actions\UpdateOrCreateStyleAction;
use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use Illuminate\Support\Collection;

class CreateStyleController extends Controller
{
    public function __construct(
        private readonly UpdateOrCreateStyleAction $action
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
