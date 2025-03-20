<?php
namespace App\Http\Integrations\GoData\Requests;

use Saloon\Enums\Method;
use Saloon\Http\Request;

class GetProductsByBrand extends Request
{
    protected Method $method = Method::GET;

    public function __construct(protected readonly string $brand) {
        return $this->brand;
    }

    public function resolveEndpoint(): string
    {
        return '/brand/' . $this->brand;
    }
}
