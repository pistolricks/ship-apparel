<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use App\Models\Style;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

class AddTagToStyleAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Prepare the action for execution, leveraging constructor injection.
    }

    /**
     * Execute the action.
     *
     * @return Style
     * @throws FileCannotBeAdded
     */
    public function execute(Style $style, string $value, string $type): Style
    {

        // gallery, specs

        $m = Tag::findOrCreate($value, $type);

        $style->attachTag($m);

        return $style;
    }
}
