<?php

namespace App\Http\Integrations\Vendors\Responses;

use App\Data\ProductData;
use Saloon\Http\Response;

class ProductsResponse extends Response
{
    public function createDtoFromResponse(Response $response): ProductData
    {
        $responseData = $response->json();

        /** @var ProductData $responseData */
        return new ProductData($responseData);
    }
}
