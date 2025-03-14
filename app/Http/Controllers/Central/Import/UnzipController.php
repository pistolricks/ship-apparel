<?php

namespace App\Http\Controllers\Central\Import;

use App\Http\Controllers\Controller;
use App\Jobs\UnzipSanMarFtpFile;

class UnzipController extends Controller
{
    public function __invoke()
    {
        UnzipSanMarFtpFile::dispatch();

        return response()->json(['message' => 'Unzipping']);
    }
}
