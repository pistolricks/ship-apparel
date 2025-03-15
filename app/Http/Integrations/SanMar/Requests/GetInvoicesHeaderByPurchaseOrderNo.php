<?php

namespace App\Http\Integrations\SanMar\Requests;

use Saloon\Enums\Method;
use Saloon\Http\Request;
use Saloon\Contracts\Body\HasBody;
use Saloon\Traits\Body\HasXmlBody;

class GetInvoicesHeaderByPurchaseOrderNo extends Request implements HasBody
{
    use HasXmlBody;
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
            'SOAPAction' => 'getInvoicesHeaderByPurchaseOrderNo',
        ];
    }}
