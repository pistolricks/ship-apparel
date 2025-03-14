<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
class SanMarProduct extends Model
{
    use \Sushi\Sushi;

    public function getRows()
    {
        return CSV::fromFile(__DIR__.'/roles.csv')->toArray();
    }

}
