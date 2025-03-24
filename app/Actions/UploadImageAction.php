<?php

namespace App\Actions;

use Spatie\QueueableAction\QueueableAction;

class UploadImageAction
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
     * @return mixed
     */
    public function execute(string $imageUrl, string $id)
    {


        $url = config('tenancy.image_api.url');

        $authorization = "Bearer " . config('tenancy.image_api.token');

        $postData = [
            'url' => $imageUrl,
            'id' => $id
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: $authorization"
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // Return response as a string
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); // Form data

        // Execute the request and store the response
        $response = curl_exec($ch);

        // Check for errors
        if (curl_errno($ch)) {
            echo 'cURL Error: '.curl_error($ch);
        } else {
            // Display the response
            echo $response;
        }

        // Close the cURL session
        curl_close($ch);
    }
}
