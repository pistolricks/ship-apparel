<?php

namespace App\Http\Controllers\Central\Import;

use App\Http\Controllers\Controller;
use App\Jobs\ImportSanMarCsv;

class SanMarController extends Controller
{
    public function __invoke()
    {
        ImportSanMarCsv::dispatch();

        return response()->json(['message' => 'Importing']);
    }
}
