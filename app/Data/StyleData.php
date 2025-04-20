<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class StyleData extends Data
{
    public function __construct(
        public string $id,
        public string $product_title,
        public ?string $product_description,
        public ?string $available_sizes,
        public ?string $brand_logo_image,
        public ?string $thumbnail_image,
        public ?string $color_swatch_image,
        public string $product_image,
        public ?string $spec_sheet,
        public ?string $price_text,
        public ?string $suggested_price,
        public string $category_name,
        public ?string $subcategory_name,
        public string $color_name,
        public ?string $color_square_image,
        public ?string $color_product_image,
        public ?string $color_product_image_thumbnail,
        public ?string $sizes,
        public ?string $inventory_key,
        public ?string $size_index,
        public ?string $sanmar_mainframe_color,
        public ?string $mill,
        public ?string $product_status,
        public ?string $companion_style,
        public ?string $msrp,
        public ?string $map_pricing,
        public ?string $front_model_image_url,
        public ?string $back_model_image_url,
        public ?string $front_flat_image_url,
        public ?string $back_flat_image_url,
        public ?string $product_measurements,
        public ?string $pms_color,
        public ?string $gtin,
        public ?string $decoration_spec_sheet,
        public mixed $data

    ) {
    }
}
