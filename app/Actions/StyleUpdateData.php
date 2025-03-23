<?php

namespace App\Actions;

use App\Data\TagData;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\Tags\Tag;

class StyleUpdateData
{
    use AsAction;

    public string $commandSignature = 'style:update-data';
    public string $commandDescription = 'update data.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly AddTagToStyleAction $action
    ) {
    }

    public function handle(): void
    {
        $styles = Style::query()->with('tags')->get();

            $styles->map(function ($style) {

                $style->update([
                    'data' => [...$style->tags->map(function (Tag $tag) {
                        $td =  TagData::from([
                            'name' => $tag->getTranslation('name', 'en'),
                            'slug' => $tag->getTranslation('slug', 'en'),
                            'type' => $tag->type
                        ]);
                        return $td;
                    })]
                ]);
            });
    }

    public function asCommand(Command $command): void
    {

            $this->handle();



        $command->info('Beginning Extraction!');
    }
}

