<?php

namespace App\Http\Integrations\Vendors\Requests;

use Saloon\Enums\Method;
use Saloon\Http\Request;

class ProductsRequest extends Request
{
    /**
     * The HTTP method of the request
     */
    protected Method $method = Method::GET;

    /**
     * The endpoint for the request
     */
    public function resolveEndpoint(): string
    {
        return '/products';
    }

    protected function defaultQuery(): array
    {
        return [
            'sort' => 'name', // ?sort=name
            'filter[active]' => 'true', // ?filter[active]=true
        ];
    }
}
