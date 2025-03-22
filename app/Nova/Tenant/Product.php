<?php

namespace App\Nova\Tenant;


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

    public static $id = 'id';

    public static $search = [
        'id', 'product_title','mill'
    ];

    public function fields(Request $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Title', 'product_title')
                ->sortable()
                ->rules('required'),

            Text::make('Description', 'product_description')
                ->sortable()
                ->rules('nullable'),
            Text::make("Style", "style")
                ->sortable()
                ->rules('nullable'),
            Text::make("Available Sizes", "available_sizes")
                ->sortable()
                ->rules('nullable'),
            Text::make("Brand Logo Image", "brand_logo_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Thumbnail Image", "thumbnail_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Swatch Image", "color_swatch_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Image", "product_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Spec Sheet", "spec_sheet")
                ->sortable()
                ->rules('nullable'),
            Text::make("Price Text", "price_text")
                ->sortable()
                ->rules('nullable'),
            Text::make("Suggested Price", "suggested_price")
                ->sortable()
                ->rules('nullable'),
            Text::make("Category Name", "category_name")
                ->sortable()
                ->rules('nullable'),
            Text::make("Subcategory Name", "subcategory_name")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Name", "color_name")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Square Image", "color_square_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Product Image", "color_product_image")
                ->sortable()
                ->rules('nullable'),
            Text::make("Color Product Image Thumbnail", "color_product_image_thumbnail")
                ->sortable()
                ->rules('nullable'),
            Text::make("Size", "size")
                ->sortable()
                ->rules('nullable'),
            Text::make("Piece Weight", "piece_weight")
                ->sortable()
                ->rules('nullable'),
            Text::make("Piece Price", "piece_price")
                ->sortable()
                ->rules('nullable'),
            Text::make("Dozens Price", "dozens_price")
                ->sortable()
                ->rules('nullable'),
            Text::make("Case Price", "case_price")
                ->sortable()
                ->rules('nullable'),
            Text::make("Price Group", "price_group")
                ->sortable()
                ->rules('nullable'),
            Text::make("Case Size", "case_size")
                ->sortable()
                ->rules('nullable'),
            Text::make("Inventory Key", "inventory_key")
                ->sortable()
                ->rules('nullable'),
            Text::make("Size Index", "size_index")
                ->sortable()
                ->rules('nullable'),
            Text::make("Sanmar Mainframe Color", "sanmar_mainframe_color")
                ->sortable()
                ->rules('nullable'),
            Text::make("Mill", "mill")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Status", "product_status")
                ->sortable()
                ->rules('nullable'),
            Text::make("Companion Style", "companion_style")
                ->sortable()
                ->rules('nullable'),
            Text::make("Msrp", "msrp")
                ->sortable()
                ->rules('nullable'),
            Text::make("Map Pricing", "map_pricing")
                ->sortable()
                ->rules('nullable'),
            Text::make("Front Model ImageUrl", "front_model_image_url")
                ->sortable()
                ->rules('nullable'),
            Text::make("Back Model ImageUrl", "back_model_image_url")
                ->sortable()
                ->rules('nullable'),
            Text::make("Front Flat ImageUrl", "front_flat_image_url")
                ->sortable()
                ->rules('nullable'),
            Text::make("Back Flat ImageUrl", "back_flat_image_url")
                ->sortable()
                ->rules('nullable'),
            Text::make("Product Measurements", "product_measurements")
                ->sortable()
                ->rules('nullable'),
            Text::make("Pms Color", "pms_color")
                ->sortable()
                ->rules('nullable'),
            Text::make("Gtin", "gtin")
                ->sortable()
                ->rules('nullable'),
            Text::make("Decoration Spec Sheet", "decoration_spec_sheet")
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
