<?php

namespace App\Actions;

use App\Jobs\ExtractSanMarFileData;
use App\Models\Product;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;

class CreateProductStyles
{
    use AsAction;

    public string $commandSignature = 'create:product-styles';
    public string $commandDescription = 'Create product styles.';
    public string $commandHelp = 'pretty self explanatory';


    public function __construct(
        private readonly UpdateOrCreateStyleAction $action
    )
    {}

    public function handle(): void
    {
        $products = Product::query()
            ->where('product_status', '!=', 'Discontinued')
            ->get()->unique('style')->values()->map(fn($product) => $this->action->onQueue()->execute($product));


    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Extraction!');
    }
}
