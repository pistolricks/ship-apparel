<?php

namespace App\Console\Commands\Style;

use App\Actions\TagDataAction;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;

class StylesUpdateCommand
{
    use AsAction;

    public string $commandSignature = 'style:update-data';
    public string $commandDescription = 'update data.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly TagDataAction $action
    ) {
    }

    public function handle(): void
    {


        DB::table('styles')->orderBy('id')->chunkById(100,
            function (Collection $styles) {
            foreach ($styles as $style) {
                $this->action->onQueue()->execute($style);
            }
        });



    }

    public function asCommand(Command $command): void
    {

        $this->handle();


        $command->info('Beginning Extraction!');
    }
}

