<?php

namespace App\Nova\Actions;

use App\Actions\images\ImageUploadAction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Actions\ActionResponse;
use Laravel\Nova\Fields\ActionFields;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\URL;
use Laravel\Nova\Http\Requests\NovaRequest;

class ImageUpload extends Action
{
    use InteractsWithQueue, Queueable;

    public function __construct(

    )
    {}

    /**
     * Perform the action on the given models.
     *
     * @param  \Laravel\Nova\Fields\ActionFields  $fields
     * @param  \Illuminate\Support\Collection  $models
     * @return mixed
     * @throws ConnectionException
     */
    public function handle(ActionFields $fields, Collection $models): ActionResponse
    {
        $apiUrl = config('services.image_api.url');


        $authorization = "Bearer " . config('services.image_api.token');

        $postData = [
            'url' => $fields->get('url'),
            'id' => $fields->get('id')
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $apiUrl);
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




        return ActionResponse::message($response);
    }

    /**
     * Get the fields available on the action.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request): array
    {
        return [
            Text::make('url'),
            Text::make('id'),

        ];
    }
}
