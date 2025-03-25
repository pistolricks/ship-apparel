<?php

namespace App\Console\Commands\Mill;

use App\Actions\Mill\MillAction;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Lorisleiva\Actions\Concerns\AsAction;

class MillsCommand
{
    use AsAction;

    public string $commandSignature = 'mill:batch {collection}';
    public string $commandDescription = 'Create mill.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly MillAction $action
    )
    {
    }

    public function handle(Collection $collection): void
    {
        // $names = Style::get()->unique('mill')->pluck('mill')->values()->all();

        $collection->sortBy('id')->chunk(100)->each(function ($chunk) {
            $this->action->onQueue()->execute($chunk);
        });

    }

    public function asCommand(Command $command): void
    {
        $this->handle($command->argument('collection'));

        $command->info('Beginning Extraction!');
    }
}
