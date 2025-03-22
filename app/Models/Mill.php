<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class Mill extends Model
{
    use HasSlug;

    public $primaryKey = 'id';

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    protected $fillable = [
        'id',
        'name',
        'description',
        'src',
        'logo_src',
        'slug',
        'data',
    ];
}
