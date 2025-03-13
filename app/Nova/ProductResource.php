<?php

namespace App\Nova;

use App\Models\Product;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class ProductResource extends Resource
{
    public static $model = Product::class;

    public static $title = 'id';

    public static $search = [
        'id', 'UNIQUE_KEY', 'PRODUCT_TITLE'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('UNIQUE KEY')
                ->sortable()
                ->rules('required'),

            Text::make('PRODUCT TITLE')
                ->sortable()
                ->rules('required'),

            Text::make('PRODUCT DESCRIPTION')
                ->sortable()
                ->rules('nullable'),

            Text::make('STYLE')
                ->sortable()
                ->rules('nullable'),

            Text::make('AVAILABLE SIZES')
                ->sortable()
                ->rules('nullable'),

            Text::make('BRAND LOGO IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('THUMBNAIL IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('COLOR SWATCH IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('PRODUCT IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('SPEC SHEET')
                ->sortable()
                ->rules('nullable'),

            Text::make('FRONT FLAT')
                ->sortable()
                ->rules('nullable'),

            Text::make('BACK FLAT')
                ->sortable()
                ->rules('nullable'),

            Text::make('FRONT MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('BACK MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('SIDE MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('THREE Q MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('PRICE TEXT')
                ->sortable()
                ->rules('nullable'),

            Text::make('COLOR NAME')
                ->sortable()
                ->rules('nullable'),

            Text::make('COLOR SQUARE IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('COLOR PRODUCT IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('COLOR PRODUCT IMAGE THUMBNAIL')
                ->sortable()
                ->rules('nullable'),

            Text::make('SIZE')
                ->sortable()
                ->rules('nullable'),

            Text::make('PIECE WEIGHT')
                ->sortable()
                ->rules('nullable'),

            Text::make('PIECE PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('DOZEN PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('CASE PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('PIECE SALE PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('DOZEN SALE PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('CASE SALE PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('SALE START DATE')
                ->sortable()
                ->rules('nullable'),

            Text::make('SALE END DATE')
                ->sortable()
                ->rules('nullable'),

            Text::make('CASE SIZE')
                ->sortable()
                ->rules('nullable'),

            Text::make('INVENTORY KEY')
                ->sortable()
                ->rules('nullable'),

            Text::make('SIZE INDEX')
                ->sortable()
                ->rules('nullable'),

            Text::make('CATALOG COLOR')
                ->sortable()
                ->rules('nullable'),

            Text::make('PRICE CODE')
                ->sortable()
                ->rules('nullable'),

            Text::make('PRODUCT STATUS')
                ->sortable()
                ->rules('nullable'),

            Text::make('TITLE IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('BRAND NAME')
                ->sortable()
                ->rules('nullable'),

            Text::make('KEYWORDS')
                ->sortable()
                ->rules('nullable'),

            Text::make('CATEGORY')
                ->sortable()
                ->rules('nullable'),
        ];
    }

    public function cards(Request $request): array
    {
        return [];
    }

    public function filters(Request $request): array
    {
        return [];
    }

    public function lenses(Request $request): array
    {
        return [];
    }

    public function actions(Request $request): array
    {
        return [];
    }
}
