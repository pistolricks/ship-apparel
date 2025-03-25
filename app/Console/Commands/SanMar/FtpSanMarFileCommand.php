<?php

namespace App\Console\Commands\SanMar;

use App\Jobs\FtpSanMarFileData;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;

class FtpSanMarFileCommand
{
    use AsAction;

    public string $commandSignature = 'ftp:sanmar-file';
    public string $commandDescription = 'fetches the sanmar file from ftp.';
    public string $commandHelp = 'pretty self explanatory';


    public function handle(): void
    {
        FtpSanMarFileData::dispatch();

    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Dispatched!');
    }
}
