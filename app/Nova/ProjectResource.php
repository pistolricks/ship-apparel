<?php

namespace App\Nova;

use App\Models\Project;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;

class ProjectResource extends Resource
{
    public static $model = Project::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name', 'status'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),


            Text::make('Name')
                ->sortable()
                ->rules('required'),

            Text::make('Title')
                ->sortable()
                ->rules('nullable'),

            Text::make('Description')
                ->sortable()
                ->rules('nullable'),

            Date::make('Start')
                ->sortable()
                ->rules('nullable', 'date'),

            Date::make('End')
                ->sortable()
                ->rules('nullable', 'date'),

            Text::make('Status')
                ->sortable()
                ->rules('required'),

            Number::make('Admin ID', 'admin_id')->sortable()
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
