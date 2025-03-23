<?php

namespace App\Actions;

use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class StyleGalleryImage
{
    use AsAction;

    public string $commandSignature = 'style:image {selected}';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly AddTagToStyleAction $action
    ) {
    }

    public function handle($selected): void
    {
        $styles = Style::all();

        $styles->map(function ($style) use($selected) {

            if($selected === 'front-model' && Str::contains($style?->front_model_image_url, 'http')) {
                $style->addMediaFromUrl($style?->front_model_image_url)->toMediaCollection('gallery');
            }
            if($selected === 'back-model' && Str::contains($style?->back_model_image_url, 'http')) {
                $style->addMediaFromUrl($style?->back_model_image_url)->toMediaCollection('gallery');
            }
            if($selected === 'front-flat' && Str::contains($style?->front_flat_image_url, 'http')) {
                $style->addMediaFromUrl($style?->front_flat_image_url)->toMediaCollection('gallery');
            }
            if($selected === 'back-flat' && Str::contains($style?->back_flat_image_url, 'http')) {
                $style->addMediaFromUrl($style?->back_flat_image_url)->toMediaCollection('gallery');
            }
            if($selected === 'spec' && Str::contains($style?->decoration_spec_sheet, 'http')) {
                $style->addMediaFromUrl($style?->decoration_spec_sheet)->toMediaCollection('specs');
            }
        });

    }

    public function asCommand(Command $command): void
    {

            $this->handle($command->argument('selected'));



        $command->info('Beginning Extraction!');
    }
}
