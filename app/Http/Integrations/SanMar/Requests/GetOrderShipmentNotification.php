<?php

namespace App\Http\Integrations\SanMar\Requests;

use Saloon\Enums\Method;
use Saloon\Http\Request;

class GetOrderShipmentNotification extends Request
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
        return '';
    }

    protected function defaultHeaders(): array
    {
        return [
            'SOAPAction' => 'getOrderShipmentNotification',
        ];
    }}
