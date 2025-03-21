<?php

namespace App\Http\Controllers\Central\Imports;

use App\Http\Controllers\Controller;
use App\Jobs\ImportJob;
use Illuminate\Support\Facades\Bus;

class ProductsController extends Controller
{
    public function __invoke()
    {
        $batch = Bus::batch([
            new ImportJob('storage/app/SanMar_SDL_N.csv'),
        ])->dispatch();



    }
}
