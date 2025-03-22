<?php

namespace App\Nova;

use App\Models\Style;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class StyleResource extends Resource
{
    public static $model = Style::class;

    public static $title = 'title';

    public static $search = [
        'id', 'mill', 'title', 'description', 'spec_sheet', 'decoration_spec_sheet', 'product_measurements',
        'categories', 'subcategories', 'companion_style', 'msrp', 'map_pricing', 'suggested_pricing', 'price_group',
        'front_model_image_url', 'back_model_image_url', 'front_flat_image_url', 'back_flat_image_url'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Mill')
                ->sortable()
                ->rules('required'),

            Text::make('Title')
                ->sortable()
                ->rules('required'),

            Text::make('Description')
                ->sortable()
                ->rules('required'),

            Text::make('Spec Sheet')
                ->sortable()
                ->rules('required'),

            Text::make('Decoration Spec Sheet')
                ->sortable()
                ->rules('required'),

            Text::make('Product Measurements')
                ->sortable()
                ->rules('required'),

            Text::make('Categories')
                ->sortable()
                ->rules('required'),

            Text::make('Subcategories')
                ->sortable()
                ->rules('required'),

            Text::make('Companion Style')
                ->sortable()
                ->rules('required'),

            Text::make('Msrp')
                ->sortable()
                ->rules('required'),

            Text::make('Map Pricing')
                ->sortable()
                ->rules('required'),

            Text::make('Suggested Pricing')
                ->sortable()
                ->rules('required'),

            Text::make('Price Group')
                ->sortable()
                ->rules('required'),

            Text::make('Front Model Image Url')
                ->sortable()
                ->rules('required'),

            Text::make('Back Model Image Url')
                ->sortable()
                ->rules('required'),

            Text::make('Front Flat Image Url')
                ->sortable()
                ->rules('required'),

            Text::make('Back Flat Image Url')
                ->sortable()
                ->rules('required'),
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
