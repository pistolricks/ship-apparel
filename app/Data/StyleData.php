<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class StyleData extends Data
{
    public function __construct(
        public string $id,
        public string $title,
        public ?string $mill,
        public ?string $description,
        public ?string $spec_sheet,
        public ?string $decoration_spec_sheet,
        public ?string $product_measurements,
        public ?string $categories,
        public ?string $subcategories,
        public ?string $companion_style,
        public ?string $msrp,
        public ?string $map_pricing,
        public ?string $suggested_pricing,
        public ?string $price_group,
        public ?string $front_model_image_url,
        public ?string $back_model_image_url,
        public ?string $front_flat_image_url,
        public ?string $back_flat_image_url,
        public ?string $mill_id,
        public ?string $data = '',
    ) {}
}
