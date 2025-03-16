<?php

namespace App\Nova\Tenant;


use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Currency;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\URL;

class Product extends Resource
{
    public static $model = \App\Models\Product::class;

    public static $title = 'id';

    public static $search = [
        'id',  'PRODUCT_TITLE'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),


            Text::make('Title','PRODUCT_TITLE')
                ->sortable()
                ->rules('required'),

            Text::make('Description','PRODUCT_DESCRIPTION')
                ->sortable()
                ->rules('nullable'),

            Text::make('Style', 'STYLE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Available Sizes', 'AVAILABLE_SIZES')
                ->sortable()
                ->rules('nullable'),

            Text::make('Brand File', 'BRAND_LOGO_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('thumbnail File', 'THUMBNAIL_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('color', 'COLOR_SWATCH_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Image::make('Lifestyle/Model File', 'PRODUCT_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Url::make('Spec Sheet', 'SPEC_SHEET')
                ->sortable()
                ->rules('nullable'),

            Text::make('Front Flat', 'FRONT_FLAT')
                ->sortable()
                ->rules('nullable'),

            Text::make('Back Flat', 'BACK_FLAT')
                ->sortable()
                ->rules('nullable'),

            Text::make('Front', 'FRONT_MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('Back', 'BACK_MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('Side', 'SIDE_MODEL')
                ->sortable()
                ->rules('nullable'),

            Image::make('ThreeQ', 'THREE_Q_MODEL')
                ->sortable()
                ->rules('nullable'),

            Text::make('Price Application', 'PRICE_TEXT')
                ->sortable()
                ->rules('nullable'),

            Text::make('Color', 'COLOR_NAME')
                ->sortable()
                ->rules('nullable'),

            Text::make('Color Swatch File', 'COLOR_SQUARE_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Color File', 'COLOR_PRODUCT_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Thumbnail File', 'COLOR_PRODUCT_IMAGE_THUMBNAIL')
                ->sortable()
                ->rules('nullable'),

            Text::make('Size', 'SIZE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Weight', 'PIECE_WEIGHT')
                ->sortable()
                ->rules('nullable'),

            Text::make('Price', 'PIECE_PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Dozen Price', 'DOZEN_PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Case Price', 'CASE_PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Sale Price', 'PRICE_PIECE_SALE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Dozen Sale Price', 'DOZEN_SALE_PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Case Sale Price', 'CASE_SALE_PRICE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Sale Start', 'SALE_START_DATE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Sale End', 'SALE_END_DATE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Case Size', 'CASE_SIZE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Inventory', 'INVENTORY_KEY')
                ->sortable()
                ->rules('nullable'),

            Image::make('Size Index', 'SIZE_INDEX')
                ->sortable()
                ->rules('nullable'),

            Image::make('Catalog Color', 'CATALOG_COLOR')
                ->sortable()
                ->rules('nullable'),

            Image::make('Price Code', 'PRICE_CODE')
                ->sortable()
                ->rules('nullable'),

            Image::make('Product Status', 'PRODUCT_STATUS')
                ->sortable()
                ->rules('nullable'),

            Text::make('Title', 'TITLE_IMAGE')
                ->sortable()
                ->rules('nullable'),

            Text::make('Brand', 'BRAND_NAME')
                ->sortable()
                ->rules('nullable'),

            Text::make('Keywords', 'KEYWORDS')
                ->sortable()
                ->rules('nullable'),

            TEXT::make('Category', 'CATEGORY_NAME')
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
