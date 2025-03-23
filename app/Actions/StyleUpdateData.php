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
        private readonly StyleUpdateDataAction $action
    ) {
    }

    public function handle(): void
    {
        $styles = Style::query()->with('tags')->get();

        $styles->map(function ($style) {
            $this->action->onQueue()->execute($style);
        });
    }

    public function asCommand(Command $command): void
    {

        $this->handle();


        $command->info('Beginning Extraction!');
    }
}

