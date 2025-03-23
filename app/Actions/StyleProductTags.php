<?php

namespace App\Actions;

use App\Data\TagData;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\Tags\Tag;

class StyleProductTags
{
    use AsAction;

    public string $commandSignature = 'style:product-tags {selected}';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly AddTagToStyleAction $action
    ) {
    }

    public function handle(string $selected): void
    {
        $styles = Style::query()->with('products')->get();

            $styles->map(function ($style) use ($selected) {

                $products = $style?->products;
                $products->map(function ($product, $index) use ($style, $selected) {
                    if($selected === 'colors') {
                        $this->action->onQueue()->execute($style, $product->color_name, 'colors');
                    }
                    if($selected === 'sizes') {
                        $this->action->onQueue()->execute($style, $product->size, 'sizes');
                    }
               });
            });

    }

    public function asCommand(Command $command): void
    {

            $this->handle($command->argument('selected'));



        $command->info('Beginning Extraction!');
    }
}

