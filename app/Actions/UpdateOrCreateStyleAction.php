<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;

class UpdateOrCreateStyleAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct(
        private readonly UpdateOrCreateStyle $updateOrCreateStyleCollection,
    ) {
        // Prepare the action for execution, leveraging constructor injection.
    }

    /**
     * Execute the action.
     *
     * @return Style
     * @throws FileCannotBeAdded
     * @throws \Throwable
     */
    public function execute(Product $product): Style
    {
        $s = Str::replace($product->style, '', $product->product_title);
        $r = Str::replace($product->mill, '', $s);
        $title = Str::replace('.', '', $r);
        $product->product_title = Str::trim($title);

        $slug = Str::slug($product->mill);

        $product->mill = Str::trim($slug);

        return $this->updateOrCreateStyleCollection->handle($product);

    }
}
