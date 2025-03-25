<?php

namespace App\Actions;

use App\Data\TagData;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;

class TagDataAction
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
     * @return TagData
     * @throws FileCannotBeAdded
     */
    public function execute($tag): TagData
    {

        return TagData::from([
            'name' => $tag->getTranslation('name', 'en'),
            'slug' => $tag->getTranslation('slug', 'en'),
            'type' => $tag->type
        ]);


    }
}
