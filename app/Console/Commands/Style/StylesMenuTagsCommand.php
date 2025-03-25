<?php

namespace App\Console\Commands\Style;

use App\Actions\ModelTagsAction;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Lorisleiva\Actions\Concerns\AsAction;

class StylesMenuTagsCommand
{
    use AsAction;

    public string $commandSignature = 'style:menu-tags';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly ModelTagsAction $action
    ) {
    }

    public function handle(Collection $collection): void
    {

        $collection->map(function ($style) {

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
