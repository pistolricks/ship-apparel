<?php

namespace App\Http\Integrations\SanMar;

use Saloon\Http\Connector;
use Saloon\Traits\Plugins\AcceptsJson;

class ProductInfoByCategoryService extends Connector
{
    use AcceptsJson;

    /**
     * The Base URL of the API
     */
    public function resolveBaseUrl(): string
    {
        return "https://ws.sanmar.com:8080/SanMarWebService/SanMarProductInfoServicePort?wsdl";
    }

    /**
     * Default headers for every request
     */
    protected function defaultHeaders(): array
    {
        return [
            "Content-Type" => "text/xml",
        ];
    }

    /**
     * Default HTTP client options
     */
    protected function defaultConfig(): array
    {
        return [];
    }
}

