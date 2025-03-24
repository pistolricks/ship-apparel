<?php

namespace App\Console;

use App\Actions\ImportSanMarFile2;
use App\Actions\MillBatch;
use App\Actions\StyleGalleryImage;
use App\Actions\StyleMenuTags;
use App\Actions\StyleProducts;
use App\Actions\ExtractSanMarFile;
use App\Actions\FtpSanMarFile;
use App\Actions\ImportSanMarFile;
use App\Actions\StyleProductTags;
use App\Actions\StyleUpdateData;
use App\Actions\UploadImageCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        FtpSanMarFile::class,
        ExtractSanMarFile::class,
        ImportSanMarFile::class,
        ImportSanMarFile2::class,
        StyleProducts::class,
        StyleMenuTags::class,
        StyleGalleryImage::class,
        StyleProductTags::class,
        StyleUpdateData::class,
        MillBatch::class,
        UploadImageCommand::class,
    ];

    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
