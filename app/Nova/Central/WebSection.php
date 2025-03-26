<?php

namespace App\Nova\Central;

use App\Nova\Repeater\ClassItem;
use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Repeater;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Panel;

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
            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),
            Select::make('Component', 'component')
                ->default('default')
                ->options([
                    'default' => 'Default',
                    'row-items-card' => 'RowItemsCard',
                ])
                ->sortable()
                ->rules('required'),

            Panel::make('Details', [
                Text::make('Title', 'title')
                    ->sortable()
                    ->rules('nullable'),
                Repeater::make('Class', 'class')
                    ->repeatables([
                        ClassItem::make('class')
                    ]),
                Text::make('Href', 'href')
                    ->sortable()
                    ->default('#')
                    ->rules('required'),
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
            ])->collapsedByDefault(),

            BelongsToMany::make('WebContent', 'contents')
                ->showCreateRelationButton(),

            Panel::make('Start and End', [
                Number::make('Start', 'start')
                    ->default(0),
                Number::make('End', 'end')
                    ->rules('nullable'),
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
