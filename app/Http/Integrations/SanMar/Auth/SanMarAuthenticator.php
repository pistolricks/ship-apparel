<?php

namespace App\Http\Integrations\SanMar\Auth;

use Saloon\Contracts\Authenticator;
use Saloon\Http\PendingRequest;

class SanMarAuthenticator implements Authenticator
{
    public function __construct()
    {
        //
    }

    /**
     * Apply the authentication to the request.
     */
    public function set(PendingRequest $pendingRequest): void
    {
        //
    }
}
