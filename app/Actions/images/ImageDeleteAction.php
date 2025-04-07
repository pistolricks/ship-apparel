<?php

namespace App\Actions\images;


use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Spatie\QueueableAction\QueueableAction;

class ImageDeleteAction
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
    public function execute(string $id)
    {

        $response = Http::withHeaders([
           // 'X-Auth-Email' => config('services.cloudflare.email'),
           // 'X-Auth-Key' => config('services.cloudflare.token'),
        // ])->post('https://api.cloudflare.com/client/v4/accounts/1d255d4f4a8aa1ef689a5286f80516cc/images/v1/'.$id);
        ])->delete('http://localhost:8080/api/v1/images/'.$id);
        return $response;

    }
}
