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
        'href',
        'description',
        'information',
        'src',
        'vert_src',
        'cta',
        'value',
        'data',
        'side',
    ];

    public function sections(): BelongsToMany
    {
        return $this->belongsToMany(Section::class, 'section_content', 'content_id', 'section_id');
    }

    protected function casts(): array
    {
        return [
            'description' => 'array',
            'information' => 'array',
            'data' => 'array',
        ];
    }


    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('images')
            ->withResponsiveImages();

        $this
            ->addMediaCollection('vertical_images')
            ->withResponsiveImages();

        $this
            ->addMediaCollection('child_images')
            ->withResponsiveImages();

    }
}
