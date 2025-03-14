<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;
use League\Flysystem\Ftp\FtpAdapter;
use League\Flysystem\Ftp\FtpConnectionOptions;
use League\Flysystem\PhpseclibV3\SftpAdapter;
use League\Flysystem\PhpseclibV3\SftpConnectionProvider;
use League\Flysystem\UnixVisibility\PortableVisibilityConverter;

class GetSanMarFtpFiles implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct()
    {
    }

    /**
     * @throws FilesystemException
     */
    public function handle(): void
    {

        $filesystem = new Filesystem(new SftpAdapter(
            new SftpConnectionProvider(
                config('filesystems.disks.sanmar_ftp.host'),
                config('filesystems.disks.sanmar_ftp.username'),
                config('filesystems.disks.sanmar_ftp.password'),
                null,
                null,
                2200,
                false,// use agent (optional, default: false)
                30, // timeout (optional, default: 10)
                3, // max tries (optional, default: 4)
                null, // host fingerprint (optional, default: null),
                null, // connectivity checker (must be an implementation of 'League\Flysystem\PhpseclibV2\ConnectivityChecker' to check if a connection can be established (optional, omit if you don't need some special handling for setting reliable connections)
            ),
            '/SanMarPDD/',
            PortableVisibilityConverter::fromArray([
                'file' => [
                    'public' => 0640,
                    'private' => 0604,
                ],
                'dir' => [
                    'public' => 0740,
                    'private' => 7604,
                ],
            ])
        ));

// The FilesystemOperator



        $myFile = $filesystem->readStream('SanMar_SDL_N.zip');


        Storage::disk('local')->put('sanmar_sdl_n.zip', $myFile);


    }
}
