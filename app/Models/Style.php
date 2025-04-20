<?php

namespace App\Models;

use App\Data\StyleData;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Tags\HasTags;
use Sushi\Sushi;

class Style extends Model
{

    use Sushi;



    public function getRows()
    {
        return [];


    }


    public function fetchStyles()
    {
        return Http::retry(3, 100)
            ->withQueryParameters([
                'sort' => 'product_title',
            ])->get('http://localhost:4000/v1/styles');

    }

}
