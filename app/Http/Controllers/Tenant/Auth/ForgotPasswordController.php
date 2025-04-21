<?php

namespace App\Http\Controllers\Central\Api\Shop\Tenant\Auth;

use App\Http\Controllers\Central\Api\Shop\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\View\View;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /** @override */
    public function showLinkRequestForm(): View
    {
        return view('tenant.auth.passwords.email');
    }
}
