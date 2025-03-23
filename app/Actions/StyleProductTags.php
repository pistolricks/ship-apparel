<?php

namespace App\Actions;

use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class StyleProductTags
{
    use AsAction;

    public string $commandSignature = 'style:product-tags';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly AddTagToStyleAction $action
    ) {
    }

    public function handle(): void
    {
        $styles = Style::query()->with('products')->get();

            $styles->map(function ($style) {

                $products = $style?->products;
                $products->map(function ($product) use ($style) {
                  $this->action->onQueue()->execute($style, $product->color_name, 'colors');
                   $this->action->onQueue()->execute($style, $product->size, 'sizes');
               });
            });

    }

    public function asCommand(Command $command): void
    {

            $this->handle();



        $command->info('Beginning Extraction!');
    }
}

