<?php

namespace App\Models;

use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class Mill extends Model implements HasMedia
{
    use HasSlug;
    use HasTags;
    use InteractsWithMedia;

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

    public function styles(): Style|\Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Style::class, 'mill', 'id');
    }
    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('logo')
            ->singleFile();

        $this
            ->addMediaCollection('banners')
            ->withResponsiveImages();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }
}
