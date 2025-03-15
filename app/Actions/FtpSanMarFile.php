<?php

namespace App\Actions;

use App\Jobs\FtpSanMarFileData;
use Lorisleiva\Actions\Concerns\AsAction;
use Illuminate\Console\Command;

class FtpSanMarFile
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
