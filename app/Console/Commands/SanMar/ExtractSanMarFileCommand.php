<?php

namespace App\Console\Commands\SanMar;

use App\Jobs\ExtractSanMarFileData;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;

class ExtractSanMarFileCommand
{
    use AsAction;

    public string $commandSignature = 'extract:sanmar-file';
    public string $commandDescription = 'extracts the sanmar zip file.';
    public string $commandHelp = 'pretty self explanatory';


    public function handle(): void
    {
        ExtractSanMarFileData::dispatch();
    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Extraction!');
    }
}
