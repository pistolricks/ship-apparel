<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

class StyleSelectImageAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct(
        private readonly StyleAddImageAction $action
    ) {
        // Prepare the action for execution, leveraging constructor injection.
    }

    /**
     * Execute the action.
     *
     * @return Style
     * @throws FileCannotBeAdded
     */
    public function execute(string $selected): Style
    {


        if ($selected === 'front-model') {
            Style::get()->each(function ($style) {
                $this->action->onQueue()->execute($style, $style->front_model_image_url);
            });
        }

        if ($selected === 'back-model') {
            Style::get()->each(function ($style) {
                $this->action->onQueue()->execute($style, $style->back_model_image_url);
            });
        }

        if ($selected === 'front-flat') {
            Style::get()->each(function ($style) {
                $this->action->onQueue()->execute($style, $style->front_flat_image_url);
            });
        }

        if ($selected === 'back-flat') {
            Style::get()->each(function ($style) {
                $this->action->onQueue()->execute($style, $style->back_flat_image_url);
            });
        }

    }
}
