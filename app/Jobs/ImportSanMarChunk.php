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
use Illuminate\Support\Str;


class ImportSanMarChunk implements ShouldBeUnique, ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public $uniqueFor = 3600;


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

    public function uniqueId(): string
    {
        return Str::uuid()->toString();
    }
}
