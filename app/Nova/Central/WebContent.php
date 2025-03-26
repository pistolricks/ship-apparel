<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Chaseconey\ExternalImage\ExternalImage;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class WebContent extends Resource
{
    public static $model = \App\Models\Content::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name'
    ];

    public function fields(Request $request): array
    {
        return [
            Images::make('Images', 'images')->rules('nullable')->enableExistingMedia(),
            Images::make('Vertical Images', 'vertical_images')->rules('nullable')->enableExistingMedia(),
            Images::make('Child Images', 'child_images')->rules('nullable')->enableExistingMedia(),
            ID::make()->sortable(),
            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),
            Text::make('Title', 'title')
                ->sortable()
                ->rules('nullable'),
            Text::make('Href', 'href')
                ->default('#')
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
            Select::make('Side')->default('xy')->options([
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
