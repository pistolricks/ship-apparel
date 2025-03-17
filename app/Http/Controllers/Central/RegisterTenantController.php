<?php

namespace App\Http\Controllers\Central;

use App\Actions\CreateTenantAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class RegisterTenantController extends Controller
{
    public function show(): View
    {
        return view('central.tenants.register');
    }

    public function submit(Request $request): string
    {
        $data = $this->validate($request, [
            'domain' => [
                'required',
                'string',
                'unique:domains',
                Rule::notIn(config('saas.reserved_subdomains')),
            ],
            'company' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:tenants',
            'password' => 'required|string|confirmed|max:255',
        ]);

        $data['password'] = bcrypt($data['password']);

        $domain = $data['domain'];
        unset($data['domain']);

        $tenant = (new CreateTenantAction)($data, $domain);

        // We impersonate user with id 1. This user will be created by the CreateTenantAdmin job.
        return response()->json("path", $tenant->impersonationUrl(1));
    }
}
