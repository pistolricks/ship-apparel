<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckSubscription
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! tenant()->can_use_app && ! $request->is('settings/*')) {
            if ($request->user()->isOwner()) {
                return redirect(route('tenant.settings.application'));
            } else {
                return response()->view('errors.expired-subscription');
            }
        }

        return $next($request);
    }
}
