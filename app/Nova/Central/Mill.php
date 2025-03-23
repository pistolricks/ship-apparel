<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Mill extends Resource
{
    public static $model = \App\Models\Mill::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),
            Text::make('Description', 'description')
                ->sortable()
                ->rules('nullable'),
            Text::make('Data', 'data')->rules('nullable'),

            Images::make('Logo', 'logo')->rules('nullable'),
            Images::make('Banners', 'banners')->rules('nullable')->withResponsiveImages(),


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
