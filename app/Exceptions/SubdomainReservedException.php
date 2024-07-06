<?php

namespace App\Exceptions;

use Exception;

class SubdomainReservedException extends Exception
{
    public function __construct(string $domain)
    {
        parent::__construct("$domain is a reserved subdomain, therefore it cannot be used for tenant subdomains.");
    }
}
