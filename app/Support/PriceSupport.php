<?php

namespace App\Support;

use App\Data\ResponsiveImage;
use Illuminate\Support\Collection;

class PriceSupport
{
    public static function make(Collection $models): Collection
    {
        return $models?->map(function ($model) {
            if ($model['suggested_price'] > 10) {
                $model['suggested_price'] = $model['suggested_price'] * 3 + 5;
                $model['msrp'] = $model['suggested_price'];
                return $model;
            } else {
                $model['suggested_price'] = $model['suggested_price'] * 2 + 5;
                $model['msrp'] = $model['suggested_price'];
                return $model;
            }
        });
    }
}
