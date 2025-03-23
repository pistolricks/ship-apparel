<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Tags\HasTags;

class Style extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasSlug;
    use HasTags;

    public $primaryKey = 'id';
    public $incrementing = false;

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('id')
            ->saveSlugsTo('slug');
    }

    protected $fillable = [
        'id',
        'mill',
        'title',
        'description',
        'spec_sheet',
        'decoration_spec_sheet',
        'product_measurements',
        'categories',
        'subcategories',
        'companion_style',
        'msrp',
        'map_pricing',
        'suggested_pricing',
        'price_group',
        'front_model_image_url',
        'back_model_image_url',
        'front_flat_image_url',
        'back_flat_image_url',
        'data',
    ];

    protected function casts(): array
    {
        return [
            'data' => 'json',
        ];
    }

    public function miller(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Mill::class, 'mill', 'id');
    }

    public function products(): Style|\Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Product::class, 'style', 'id');
    }


    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('gallery')
            ->withResponsiveImages();

        $this
            ->addMediaCollection('specs');

    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Fit::Contain, 300, 300)
            ->nonQueued();
    }
}
