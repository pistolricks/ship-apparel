<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;


class ProductData extends Data
{
    public function __construct(
        #[MapInputName('product_id')]
        public ?int $id,
        public ?string $product_title,
        public ?string $product_description,
        public ?string $style,
        public ?string $available_sizes,
        public ?string $brand_logo_image,
        public ?string $thumbnail_image,
        public ?string $color_swatch_image,
        public ?string $product_image,
        public ?string $spec_sheet,
        public ?string $price_text,
        public ?string $suggested_price,
        public ?string $category_name,
        public ?string $subcategory_name,
        public ?string $color_name,
        public ?string $color_square_image,
        public ?string $color_product_image,
        public ?string $color_product_image_thumbnail,
        public ?string $size,
        public ?string $piece_weight,
        public ?string $piece_price,
        public ?string $dozens_price,
        public ?string $case_price,
        public ?string $price_group,
        public ?string $case_size,
        public ?string $inventory_key,
        public ?string $size_index,
        public ?string $sanmar_mainframe_color,
        public ?string $mill,
        public ?string $product_status,
        public ?string $companion_styles,
        public ?string $msrp,
        public ?string $map_pricing,
        public ?string $front_model_image_url,
        public ?string $back_model_image_url,
        public ?string $front_flat_image_url,
        public ?string $back_flat_image_url,
        public ?string $product_measurements,
        public ?string $pms_color,
        public ?string $gtin,
        public ?string $decorator_spec_sheet,


    ) {
    }
}
