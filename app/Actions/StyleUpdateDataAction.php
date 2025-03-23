<?php

namespace App\Actions;

use App\Console\Commands\UpdateOrCreateStyle;
use App\Data\TagData;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\QueueableAction\QueueableAction;
use Spatie\Tags\Tag;

class StyleUpdateDataAction
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
    public function execute(Style $style): void
    {
        $style->update([
            'data' => [
                ...$style->tags->map(function (Tag $tag) {
                    $td = TagData::from([
                        'name' => $tag->getTranslation('name', 'en'),
                        'slug' => $tag->getTranslation('slug', 'en'),
                        'type' => $tag->type
                    ]);
                    return $td;
                })
            ]
        ]);
    }
}
