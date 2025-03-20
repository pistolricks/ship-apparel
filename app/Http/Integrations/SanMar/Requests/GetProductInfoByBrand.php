<?php

namespace App\Http\Integrations\SanMar\Requests;

use App\Http\Integrations\SanMar\Xml\RequestXml;
use Saloon\Enums\Method;
use Saloon\Http\Request;
use Saloon\Contracts\Body\HasBody;
use Saloon\Traits\Body\HasXmlBody;
use Saloon\XmlWrangler\XmlWriter;

class GetProductInfoByBrand extends Request implements HasBody
{
    use HasXmlBody;
    /**
     * The HTTP method of the request
     */
    protected Method $method = Method::POST;

    public function __construct(
        protected string $brand,
        protected string $SanMarAccount,
        protected string $SanMarUsername,
        protected string $SanMarPassword
    ){


    }
    /**
     * The endpoint for the request
     */
    public function resolveEndpoint(): string
    {
        return '';
    }

    protected function defaultBody(): string
    {

        return <<<XML

                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.webservice.integration.sanmar.com/">
                <root>
                <soapenv:Header />
                <soapenv:Body>
                <impl:getProductInfoByBrand>

                <arg0>
                <brandName>OGIO</brandName>
                </arg0>
                <arg1>
                <sanMarCustomerNumber>174381</sanMarCustomerNumber>
                <sanMarUserName>ReversibleApparel</sanMarUserName>
                <sanMarUserPassword>S.Alberto60!</sanMarUserPassword>
                </arg1>
                </impl:getProductInfoByBrand>
                </soapenv:Body>
                </root>
                </soapenv:Envelope>

        XML;

    }

    protected function defaultHeaders(): array
    {
        return [
            'SOAPAction' => 'getProductInfoByBrand',
        ];
    }}
