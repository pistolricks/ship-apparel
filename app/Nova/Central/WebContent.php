<?php

namespace App\Nova\Central;

use App\Nova\Repeater\ClassItem;
use App\Nova\Resource;
use Chaseconey\ExternalImage\ExternalImage;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Repeater;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Panel;

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


            ID::make()->sortable(),
            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),
            Text::make('Title', 'title')
                ->sortable()
                ->rules('nullable'),


            Panel::make('Media', [
                Images::make('Images', 'images')->enableExistingMedia(),
                ExternalImage::make('Image', 'src')
                    ->sortable()
                    ->rules('nullable'),
                ExternalImage::make('Vertical Image', 'vert_src')
                    ->sortable()
                    ->rules('nullable'),
            ]),
            Panel::make('Details', [
                Text::make('Class', 'class'),
                /*
                Repeater::make('Class', 'class')
                    ->repeatables([
                        ClassItem::make()
                    ]),

                */
                Text::make('Description', 'description')
                    ->sortable()
                    ->rules('nullable'),
                Text::make('Information', 'information')
                    ->sortable()
                    ->rules('nullable'),
            ])->collapsedByDefault(),
            Panel::make('Action', [
                Text::make('Href', 'href')
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
            ])->collapsedByDefault(),
            Panel::make('Child Images', [
                Images::make('Child Images', 'child_images')->enableExistingMedia()->rules('nullable'),
            ])->collapsedByDefault(),

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
