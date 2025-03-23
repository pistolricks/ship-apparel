<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Nova\Fields\BelongsTo;
use Spatie\Tags\HasTags;

class Product extends Model
{
    use HasTags;

    protected $guarded = [];



    public function collection(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Style::class, 'style','id');
    }
}
