<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Ebess\AdvancedNovaMediaLibrary\Fields\Files;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Tag;
use Laravel\Nova\Fields\Text;
use Spatie\TagsField\Tags as STags;

class StyleCollection extends Resource
{
    public static $model = \App\Models\Style::class;

    public static $id = 'id';

    public static $search = ['id', 'mill', 'title', 'description', 'spec_sheet', 'decoration_spec_sheet', 'product_measurements', 'categories', 'subcategories', 'companion_style', 'msrp', 'map_pricing', 'suggested_pricing', 'price_group'];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),
            Images::make('Gallery', 'gallery')->rules('nullable')->enableExistingMedia()->withResponsiveImages(),
            BelongsTo::make('Miller', 'miller', Mill::class)->sortable(),
            Text::make('title', 'title')
                ->sortable()
                ->rules('nullable'),

            STags::make('Menus', 'menus')->type('menus'),

            STags::make('Colors','colors')->type('colors'),


            STags::make('Sizes','sizes')->type('sizes'),
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

            Text::make('subcategories', 'subcategories')
                ->sortable()
                ->rules('nullable'),



            Text::make('description', 'description')
                ->sortable()
                ->rules('nullable'),

            Text::make('companion_style', 'companion_style')
                ->sortable()
                ->rules('nullable'),




            Files::make('Specs', 'specs')->rules('nullable')->enableExistingMedia(),


            HasMany::make('Products', 'products', Product::class)->sortable(),

            Text::make('Mill', 'mill')
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
