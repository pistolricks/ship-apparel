<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class Mill extends Model
{
    use HasSlug;
    use HasTags;

    public $primaryKey = 'id';
    public $incrementing = false;

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('id')
            ->allowDuplicateSlugs();
    }

    protected $fillable = [
        'id',
        'name',
        'description',
        'src',
        'logo_src',
        'data',
    ];

    protected function casts(): array
    {
        return [
            'data' => 'json',
        ];
    }
}
