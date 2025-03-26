<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Chaseconey\ExternalImage\ExternalImage;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class WebContent extends Resource
{
    public static $model = \App\Models\Content::class;

    public static $title = 'id';

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
            Text::make('Title', 'title')
                ->sortable()
                ->rules('nullable'),
            Text::make('Href', 'href')
                ->sortable()
                ->rules('nullable'),
            Text::make('Description', 'description')
                ->sortable()
                ->rules('nullable'),
            Text::make('Information', 'information')
                ->sortable()
                ->rules('nullable'),
            ExternalImage::make('Image', 'src')
                ->sortable()
                ->rules('nullable'),
            ExternalImage::make('Vertical Image', 'vert_src')
                ->sortable()
                ->rules('nullable'),
            Text::make('CTA', 'cta')
                ->sortable()
                ->rules('nullable'),
            Text::make('Value', 'value')
                ->sortable()
                ->rules('nullable'),
            Text::make('Data', 'data')
                ->sortable()
                ->rules('nullable'),
            Select::make('Side')->default('XY')->options([
                'top' => 'Top',
                'bottom' => 'Bottom',
                'left' => 'Left',
                'right' => 'Right',
                'x' => 'X',
                'y' => 'Y',
                'xy' => 'XY'
            ]),
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
