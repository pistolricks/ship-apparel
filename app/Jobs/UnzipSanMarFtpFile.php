<?php

namespace App\Jobs;

use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\FilesystemException;
use Zip;

class UnzipSanMarFtpFile implements ShouldQueue
{


    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct()
    {
    }

    /**
     * @throws Exception
     * @throws FilesystemException
     */
    public function handle(): void
    {

        $zip = Zip::open('storage/app/sanmar_sdl_n.zip');


        $zip->extract("storage/app/");


    }
}
