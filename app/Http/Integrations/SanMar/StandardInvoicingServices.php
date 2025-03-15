<?php

namespace App\Http\Integrations\SanMar;

use Saloon\Http\Connector;
use Saloon\Traits\Plugins\AcceptsJson;

class StandardInvoicingServices extends Connector
{
    use AcceptsJson;

    /**
     * The Base URL of the API
     */
    public function resolveBaseUrl(): string
    {
        return 'https://ws.sanmar.com:8080/SanMarWebService/InvoicePort?wsdl';
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

