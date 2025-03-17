<?php

namespace App\Nova\Central;


use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Currency;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\URL;

class Product extends Resource
{
    public static $model = \App\Models\Product::class;

    public static $title = 'id';

    public static $search = [
        'id',  'PRODUCT_TITLE'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),


            Text::make('Title', 'PRODUCT_TITLE')
                ->sortable()
                ->rules('required'),

            Text::make('Description', 'PRODUCT_DESCRIPTION')
                ->sortable()
                ->rules('nullable'),
            Text::make("Style", "STYLE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Available Sizes", "AVAILABLE_SIZES")
                ->sortable()
                ->rules('nullable'),
            Text::make("Brand Logo Image", "BRAND_LOGO_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Thumbnail Image", "THUMBNAIL_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Swatch Image", "COLOR_SWATCH_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Image", "PRODUCT_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Spec Sheet", "SPEC_SHEET")
                ->sortable()
                ->rules('nullable'),
            Text::make("Price Text", "PRICE_TEXT")
                ->sortable()
                ->rules('nullable'),
            Text::make("Suggested Price", "SUGGESTED_PRICE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Category Name", "CATEGORY_NAME")
                ->sortable()
                ->rules('nullable'),
            Text::make("Subcategory Name", "SUBCATEGORY_NAME")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Name", "COLOR_NAME")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Square Image", "COLOR_SQUARE_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Product Image", "COLOR_PRODUCT_IMAGE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Product Image Thumbnail", "COLOR_PRODUCT_IMAGE_THUMBNAIL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Size", "SIZE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Piece Weight", "PIECE_WEIGHT")
                ->sortable()
                ->rules('nullable'),
            Text::make("Piece Price", "PIECE_PRICE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Dozens Price", "DOZENS_PRICE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Case Price", "CASE_PRICE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Price Group", "PRICE_GROUP")
                ->sortable()
                ->rules('nullable'),
            Text::make("Case Size", "CASE_SIZE")
                ->sortable()
                ->rules('nullable'),
            Text::make("Inventory Key", "INVENTORY_KEY")
                ->sortable()
                ->rules('nullable'),
            Text::make("Size Index", "SIZE_INDEX")
                ->sortable()
                ->rules('nullable'),
            Text::make("Sanmar Mainframe Color", "SANMAR_MAINFRAME_COLOR")
                ->sortable()
                ->rules('nullable'),
            Text::make("Mill", "MILL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Status", "PRODUCT_STATUS")
                ->sortable()
                ->rules('nullable'),
            Text::make("Companion Styles", "COMPANION_STYLES")
                ->sortable()
                ->rules('nullable'),
            Text::make("Msrp", "MSRP")
                ->sortable()
                ->rules('nullable'),
            Text::make("Map Pricing", "MAP_PRICING")
                ->sortable()
                ->rules('nullable'),
            Text::make("Front Model ImageUrl", "FRONT_MODEL_IMAGE_URL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Back Model ImageUrl", "BACK_MODEL_IMAGE_URL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Front Flat ImageUrl", "FRONT_FLAT_IMAGE_URL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Back Flat ImageUrl", "BACK_FLAT_IMAGE_URL")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Measurements", "PRODUCT_MEASUREMENTS")
                ->sortable()
                ->rules('nullable'),
            Text::make("Pms Color", "PMS_COLOR")
                ->sortable()
                ->rules('nullable'),
            Text::make("Gtin", "GTIN")
                ->sortable()
                ->rules('nullable'),
            Text::make("Decorator Spec Sheet", "DECORATOR_SPEC_SHEET")
                ->sortable()
                ->rules('nullable'),

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
