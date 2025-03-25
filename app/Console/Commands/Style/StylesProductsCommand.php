<?php

namespace App\Console\Commands\Style;

use App\Actions\Style\StyleAction;
use App\Models\Product;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;

class StylesProductsCommand
{
    use AsAction;

    public string $commandSignature = 'style:products';
    public string $commandDescription = 'Create product styles.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly StyleAction $action
    ) {
    }

    public function handle(): void
    {
        $products = Product::query()
            ->where('product_status', '!=', 'Discontinued')
            ->get()->unique('style')->values();

       $chunks = $products->chunk(100);
       $chunks->each(fn($chunk) => $chunk->each(fn($product) => $this->action->execute($product)));

    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Extraction!');
    }
}
