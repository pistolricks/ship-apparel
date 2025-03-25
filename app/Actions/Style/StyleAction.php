<?php

namespace App\Actions\Style;

use App\Console\Commands\Style\StyleCommand;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;

class StyleAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct(
        private readonly StyleCommand $updateOrCreateStyleCollection,
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
        $q = Str::replace('- ', '', $r);
        $title = Str::replace('.', '', $q);
        $product->product_title = Str::trim($title);

        $slug = Str::slug($product->mill);

        $product->mill = Str::trim($slug);

        return $this->updateOrCreateStyleCollection->handle($product);

    }
}
