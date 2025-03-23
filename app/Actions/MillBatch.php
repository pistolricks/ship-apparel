<?php

namespace App\Actions;

use App\Models\Mill;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class MillBatch
{
    use AsAction;

    public string $commandSignature = 'mill:batch';
    public string $commandDescription = 'Create mill.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly CreateMillAction $action
    )
    {
    }

    public function handle(): void
    {
        $names = Style::get()->unique('mill')->pluck('mill')->values()->all();

        $collection = collect($names);

        $collection->map(function ($name) {
            $this->action->onQueue()->execute($name);
        });
    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Extraction!');
    }
}
