<?php

namespace App\Nova\Central;

use App\Models\Page;
use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class WebPage extends Resource
{
    public static $model = Page::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name', 'title'
    ];

    public function fields(Request $request): array
    {
        return [


            Text::make('Name', 'name')
                ->sortable()
                ->rules('required'),

            Text::make('Title', 'title')
                ->sortable()
                ->rules('required'),

            ID::make()->sortable(),

            BelongsToMany::make('WebSection','sections')
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
