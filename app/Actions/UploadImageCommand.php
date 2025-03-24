<?php

namespace App\Actions;

use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;

class UploadImageCommand
{
    use AsAction;

    public string $commandSignature = 'upload:images';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly UploadImageAction $action
    ) {
    }

    /**
     * @throws FileCannotBeAdded
     */
    public function handle(): void
    {

        DB::table('products')->orderBy('id')->chunkById(/**
         * @throws FileCannotBeAdded
         */ 100, function (Collection $product) {
            foreach ($product as $product) {
                if (Str::contains($product?->front_model_image_url, 'http')) {


                    $filename = str_replace("https://cdnm.sanmar.com/imglib/mresjpg/", "",
                        $product?->front_model_image_url);


                    $this->action->onQueue()->execute($product?->front_model_image_url, $filename);


                }


            }
        });


    }

    public function asCommand(Command $command): void
    {

        $this->handle();


        $command->info('Beginning Extraction!');
    }
}
