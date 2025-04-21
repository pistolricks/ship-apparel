<?php

namespace App\Http\Controllers\Central\Api\Shop\Tenant;

use App\Http\Controllers\Central\Api\Shop\Controller;
use Illuminate\View\View;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     */
    public function index(): View
    {
        return view('tenant.home');
    }
}
