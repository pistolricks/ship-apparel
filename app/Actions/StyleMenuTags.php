<?php

namespace App\Actions;

use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class StyleMenuTags
{
    use AsAction;

    public string $commandSignature = 'style:menu-tags';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly AddTagToStyleAction $action
    ) {
    }

    public function handle(): void
    {
        $styles = Style::all();

        $styles->map(function ($style) {

            $cats = explode(";", $style->categories);

            $collection = collect($cats);

            $collection->map(function ($cat) use ($style) {
                $this->action->onQueue()->execute($style, $cat, 'menus');
            });
        });

    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Extraction!');
    }
}
