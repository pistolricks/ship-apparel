<?php

namespace App\Actions;

use App\Jobs\ImportSanMarFileData;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;

class ImportSanMarFile
{
    use AsAction;
    public string $commandSignature = 'import:sanmar-file';
    public string $commandDescription = 'imports the sanmar file into the database.';
    public string $commandHelp = 'pretty self explanatory';

    public function handle(): void
    {
        ImportSanMarFileData::dispatch();
    }

    public function asCommand(Command $command): void
    {
        $this->handle();

        $command->info('Beginning Import!');
    }
}
