<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Style extends Model
{

    use HasSlug;

    public $primaryKey = 'id';

    public function getSlugOptions() : SlugOptions
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
            'data' => 'array',
        ];
    }
}
