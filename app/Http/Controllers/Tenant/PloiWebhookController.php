<?php

namespace App\Http\Controllers\Central\Api\Shop\Tenant;

use App\Http\Controllers\Central\Api\Shop\Controller;
use App\Models\Domain;
use Illuminate\Http\Request;

class PloiWebhookController extends Controller
{
    public function certificateIssued(Request $request)
    {
        if ($request->input('status') === 'success') {
            Domain::firstWhere('domain', $request->input('tenant'))->update(['certificate_status' => 'issued']);
        }
    }

    public function certificateRevoked(Request $request)
    {
        if ($request->input('status') === 'success') {
            Domain::firstWhere('domain', $request->input('tenant'))->update(['certificate_status' => 'revoked']);
        }
    }
}
