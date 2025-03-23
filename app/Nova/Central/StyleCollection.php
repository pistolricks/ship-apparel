<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class StyleCollection extends Resource
{
    public static $model = \App\Models\Style::class;

    public static $id = 'id';

    public static $search = ['id', 'mill', 'title', 'description', 'spec_sheet', 'decoration_spec_sheet', 'product_measurements', 'categories', 'subcategories', 'companion_style', 'msrp', 'map_pricing', 'suggested_pricing', 'price_group'];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('mill', 'mill')
            ->sortable()
            ->rules('nullable'),
            Text::make('title', 'title')
                ->sortable()
                ->rules('nullable'),
            Text::make('description', 'description')
                ->sortable()
                ->rules('nullable'),
            Text::make('spec_sheet', 'spec_sheet')
                ->sortable()
                ->rules('nullable'),
            Text::make('decoration_spec_sheet', 'decoration_spec_sheet')
                ->sortable()
                ->rules('nullable'),
            Text::make('product_measurements', 'product_measurements')
                ->sortable()
                ->rules('nullable'),
            Text::make('categories', 'categories')
                ->sortable()
                ->rules('nullable'),
            Text::make('subcategories', 'subcategories')
                ->sortable()
                ->rules('nullable'),
            Text::make('companion_style', 'companion_style')
                ->sortable()
                ->rules('nullable'),
            Text::make('msrp', 'msrp')
                ->sortable()
                ->rules('nullable'),
            Text::make('map_pricing', 'map_pricing')
                ->sortable()
                ->rules('nullable'),
            Text::make('suggested_pricing', 'suggested_pricing')
                ->sortable()
                ->rules('nullable'),
            Text::make('price_group', 'price_group')
                ->sortable()
                ->rules('nullable'),
            Text::make('front_model_image_url', 'front_model_image_url')
                ->sortable()
                ->rules('nullable'),
            Text::make('back_model_image_url', 'back_model_image_url')
                ->sortable()
                ->rules('nullable'),
            Text::make('front_flat_image_url', 'front_flat_image_url')
                ->sortable()
                ->rules('nullable'),
            Text::make('back_flat_image_url', 'back_flat_image_url')
                ->sortable()
                ->rules('nullable'),

            Images::make('Gallery', 'gallery')->rules('nullable')->withResponsiveImages(),

            BelongsTo::make('Miller', 'miller', Mill::class),
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
