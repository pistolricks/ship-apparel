<?php

namespace App\Console\Commands\Style;

use App\Actions\ModelTagsAction;
use App\Models\Product;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Lorisleiva\Actions\Concerns\AsAction;

class StylesProductTagsCommand
{
    use AsAction;

    public string $commandSignature = 'style:product-tags {selected}';
    public string $commandDescription = 'Create menu tags.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly ModelTagsAction $action
    ) {
    }

    public function handle(string $selected): void
    {

        DB::table('styles')->orderBy('id')->chunkById(100,
            function (Collection $styles) use ($selected) {
                foreach ($styles as $style) {

                    $products = Product::query()->where('style', '=', $style->id)->get();
                    $products->map(function ($product, $index) use ($style, $selected) {
                        if ($selected === 'colors') {
                            $this->action->onQueue()->execute($style, $product->color_name, 'colors');
                        }
                        if ($selected === 'sizes') {
                            $this->action->onQueue()->execute($style, $product->size, 'sizes');
                        }
                    });
               }
            }
        );

    }

    public function asCommand(Command $command): void
    {

        $this->handle($command->argument('selected'));


        $command->info('Beginning Extraction!');
    }
}

