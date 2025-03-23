<?php

namespace App\Support;

use App\Data\ResponsiveImage;
use Illuminate\Support\Collection;

class ResponsiveImageSupport
{
    public static function make($model, $collectionName, ?string $class = null): Collection
    {
        return $model?->getMedia($collectionName)?->map(function ($media) {
            return ResponsiveImage::fromMedia($media);
        });
    }
}
