<?php

namespace App\Jobs;

use App\Data\ProductData;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportSanMarChunk implements ShouldBeUnique, ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * Create a new job instance.
     */
    public function __construct(
        public $chunk
    ) {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->chunk->each(function (array $row) {

            $data = ProductData::from($row);

            Model::withoutTimestamps(fn() => Product::updateOrCreate([
                "id" => $data->id,
            ],
                $data->toArray())
            );
        });
    }
}
