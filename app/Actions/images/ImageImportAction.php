<?php

namespace App\Actions\images;


use Illuminate\Support\Facades\Http;
use Spatie\QueueableAction\QueueableAction;

class ImageImportAction
{
    use QueueableAction;

    /**
     * Create a new action instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Prepare the action for execution, leveraging constructor injection.
    }

    /**
     * Execute the action.
     *

     */
    public function execute(string $url, string $id)
    {



        $response = Http::asMultipart()
            ->post('http://localhost:4000/v1/cdn/upload', [
                [
                    'name' => 'url',
                    'contents' => $url,
                ],
                [
                    'name' => 'id',
                    'contents' => $id,
                ],
            ]);

        // Optional: Handle the response
        if ($response->failed()) {
            // Log or handle the failure as needed
            \Log::error('CDN Upload failed', [
                'url' => $url,
                'id' => $id,
                'response' => $response->body(),
            ]);
        }

    }
}
