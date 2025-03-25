<?php

namespace App\Actions;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

class ModelTagsAction
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
     * @return \App\Models\Model
     * @throws FileCannotBeAdded
     */
    public function execute(\App\Models\Model $model, string $value, string $type): \App\Models\Model
    {

        // gallery, specs

        $trimmed = Str::trim($value);

        $m = Tag::findOrCreate($trimmed, $type);

        $model->attachTag($m);

        return $model;
    }
}
