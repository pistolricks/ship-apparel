<?php

namespace App\Actions;

use App\Data\TagData;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
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


        DB::table('styles')->orderBy('id')->chunkById(/**
         * @throws FileCannotBeAdded
         */ 100, function (Collection $styles) {
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

