<?php

namespace App\Console;


use App\Console\Commands\Image\ImagesUploadCommand;
use App\Console\Commands\Mill\MillsCommand;
use App\Console\Commands\SanMar\ExtractSanMarFileCommand;
use App\Console\Commands\SanMar\FtpSanMarFileCommand;
use App\Console\Commands\SanMar\ImportSanMarFile2Command;
use App\Console\Commands\SanMar\ImportSanMarFileCommand;
use App\Console\Commands\Style\StylesMenuTagsCommand;
use App\Console\Commands\Style\StylesProductsCommand;
use App\Console\Commands\Style\StylesProductTagsCommand;
use App\Console\Commands\Style\StylesUpdateCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        FtpSanMarFileCommand::class,
        ExtractSanMarFileCommand::class,
        ImportSanMarFileCommand::class,
        ImportSanMarFile2Command::class,
        StylesProductsCommand::class,
        StylesMenuTagsCommand::class,
        StylesProductTagsCommand::class,
        StylesUpdateCommand::class,
        MillsCommand::class,
        ImagesUploadCommand::class,
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
