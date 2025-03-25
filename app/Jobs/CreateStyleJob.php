<?php

namespace App\Jobs;

use App\Actions\Style\StyleAction;
use App\Models\Product;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Queue\Queueable;

class CreateStyleJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(

        private readonly Collection|Product $product)
    {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $action = new StyleAction;

        $action->onQueue()->execute($this->product);



    }
}
