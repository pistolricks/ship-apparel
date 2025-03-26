<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class WebSection extends Resource
{
    public static $model = \App\Models\Section::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name', 'href', 'status'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),
            Select::make('Component', 'component')
                ->default('default')
                ->options([
                    'default' => 'Default',
                    'row-items-card' => 'RowItemsCard',
                ])
                ->sortable()
                ->rules('required'),
            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),

            Text::make('Title', 'title')
                ->sortable()
                ->rules('nullable'),

            Text::make('Href', 'href')
                ->sortable()
                ->default('#')
                ->rules('required'),
            Number::make('Start', 'start')
                ->default(0),
            Number::make('End', 'end')
                ->rules('nullable'),
            Text::make('Class', 'class')
                ->sortable()
                ->rules('nullable'),
            Select::make('Active', 'active')
                ->default(true)
                ->options([
                    true => 'Active',
                    false => 'Inactive',
                ])
                ->sortable(),
            Select::make('Status', 'status')
                ->default('draft')
                ->options([
                    'draft' => 'Draft',
                    'published' => 'Published',
                ])
                ->sortable()
                ->rules('required'),

            BelongsToMany::make('WebContent','contents')
                ->showCreateRelationButton(),
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
