<?php

namespace App\Jobs;

use App\Data\ProductData;
use App\Models\Product;
use Illuminate\Bus\Batchable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Queue\Queueable;


class LargeDataImportJob implements ShouldQueue
{
    private $skip, $take;

    use Queueable, Batchable;

    /**
     * Create a new job instance.
     */
    public function __construct($skip = 0, $take = 10)
    {
        $this->skip = $skip;
        $this->take = $take;
    }


    public function getProducts()
    {
        return Product::orderByDesc('id')
            ->skip($this->skip)
            ->take($this->take)
            ->get();
    }

    public function makeDataArrayToImport($products): void
    {
        $data = [];

        foreach ($products as $product) {
            $data = ProductData::from($product);

            Model::withoutTimestamps(fn() => Product::updateOrCreate([
                "id" => $data->id,
            ],
                $data->toArray())
            );
        }
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $productsChunkData = $this->getProducts();

        $this->makeDataArrayToImport($productsChunkData);

    }
}
