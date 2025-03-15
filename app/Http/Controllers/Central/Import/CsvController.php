<?php

namespace App\Http\Controllers\Central\Import;

use App\Http\Controllers\Controller;
use App\Jobs\FtpSanMarFileData;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;
use League\Flysystem\Ftp\FtpAdapter;
use League\Flysystem\Ftp\FtpConnectionOptions;

class CsvController extends Controller
{
    /**
     * @throws FilesystemException
     */
    public function __invoke()
    {
        FtpSanMarFileData::dispatch();

        return response()->json(['message' => 'CSV Import']);
    }
}
