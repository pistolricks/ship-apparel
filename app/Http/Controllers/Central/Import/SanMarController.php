<?php

namespace App\Http\Controllers\Central\Import;

use App\Http\Controllers\Controller;
use App\Jobs\ImportSanMarFileData;

class SanMarController extends Controller
{
    public function __invoke()
    {
        ImportSanMarFileData::dispatch();

        return response()->json(['message' => 'Importing']);
    }
}
