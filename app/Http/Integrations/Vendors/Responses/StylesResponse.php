<?php

namespace App\Http\Integrations\Vendors\Responses;

use App\Data\StyleData;
use Saloon\Http\Response;

class StylesResponse extends Response
{
    public function createDtoFromResponse(Response $response): StyleData
    {
        $responseData = $response->json();

        /** @var StyleData $responseData */
        return new StyleData($responseData);
    }
}
