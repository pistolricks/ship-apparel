<?php

namespace App\Nova\Central;

use App\Nova\Resource;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Project extends Resource
{
    public static $model = \App\Models\Project::class;

    public static $title = 'name';

    public static $search = [
        'id', 'name', 'status'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Images::make('Gallery', 'gallery')->rules('nullable')->enableExistingMedia(),
            Images::make('In Progress', 'in-progress')->rules('nullable')->enableExistingMedia(),
            Images::make('Completed', 'completed')->rules('nullable')->enableExistingMedia(),

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

            Select::make('Status')->default('I')->options([
                    'I' => 'Inactive',
                    'A' => 'Active',
                    'P' => 'In Progress',
                ]),


            Select::make('Admin ID', 'admin_id')->options(\App\Models\Admin::all()->pluck('name', 'id')),
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
