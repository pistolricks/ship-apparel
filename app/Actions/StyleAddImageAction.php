<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

class StyleAddImageAction
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
     *
     * @throws FileCannotBeAdded
     */
    public function execute(Style $style, string $image): void
    {
        if (Str::contains($image, 'http')) {
            $style->addMediaFromUrl($image)->toMediaCollection('gallery');
        }
    }
}
