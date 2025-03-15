<?php

namespace App\Http\Controllers\Central\Import;

use App\Http\Controllers\Controller;
use App\Jobs\ExtractSanMarFileData;

class UnzipController extends Controller
{
    public function __invoke()
    {
        ExtractSanMarFileData::dispatch();

        return response()->json(['message' => 'Unzipping']);
    }
}
