<?php

namespace App\Nova\Central;

use App\Actions\images\ImageUploadAction;
use App\Nova\Actions\ImageUpload;
use App\Nova\Repeater\ClassItem;
use App\Nova\Resource;
use Ardenthq\ImageGalleryField\ImageGalleryField;
use Chaseconey\ExternalImage\ExternalImage;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Repeater;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
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

                ImageGalleryField::make('Images')
                    ->rules('mimes:jpeg,png,jpg,gif,webp,pdf,vnd.microsoft.icon,svg+xml', 'max:10000')
                    ->rulesMessages([
                        'mimes'      => 'You must use a valid jpeg, png, jpg or gif, webp, ico, svg.',
                        'max'        => 'The image must be less than 10MB.',
                    ])
                    ->help('Min size 150 x 150. Max filesize 5MB.')
                    // Optional: add this method if you want to show the first image
                    // of the gallery on the index page
                    ->showOnIndex(),


                ExternalImage::make('Image', 'src')
                    ->sortable()
                    ->rules('nullable')
            ]),
            /*
            Panel::make('Details', [
                Text::make('Class', 'class'),

                Repeater::make('Class', 'class')
                    ->repeatables([
                        ClassItem::make()
                    ]),


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
            ])->collapsedByDefault(),
            */

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

    public function actions(NovaRequest $request): array
    {


        return [
             \App\Nova\Actions\ImageUpload::make()->standalone(),
        ];
    }
}
