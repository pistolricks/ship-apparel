<?php

namespace App\Actions;

use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;

class StyleGalleryImage
{
    use AsAction;

    public string $commandSignature = 'style:image {selected}';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly StyleSelectImageAction $action
    ) {
    }

    /**
     * @throws FileCannotBeAdded
     */
    public function handle($selected): void
    {

        $this->action->onQueue()->execute($selected);


    }

    public function asCommand(Command $command): void
    {

            $this->handle($command->argument('selected'));



        $command->info('Beginning Extraction!');
    }
}
