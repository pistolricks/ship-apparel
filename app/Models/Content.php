<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Content extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'id',
        'name',
        'title',
        'component',
        'href',
        'class',
        'description',
        'information',
        'src',
        'cta',
        'value',
    ];

    public function sections(): BelongsToMany
    {
        return $this->belongsToMany(Section::class, 'section_content', 'content_id', 'section_id');
    }

    protected function casts(): array
    {
        return [
            'href' => 'json',
            'description' => 'json',
            'information' => 'json',
            'data' => 'json',
            'class' => 'json',
        ];
    }


    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('images')->useDisk('s3');



    }
}
