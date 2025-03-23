<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Collection;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

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
    )
    {
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

       return $this->updateOrCreateStyleCollection->handle($product);

    }
}
