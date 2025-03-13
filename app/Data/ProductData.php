<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;


class ProductData extends Data
{
    public function __construct(
        public ?int $id,
        public ?string $created_at,
        public ?string $updated_at,
        public string $UNIQUE_KEY,
        public string $PRODUCT_TITLE,
        public ?string $PRODUCT_DESCRIPTION,
        public ?string $STYLE,
        public ?string $AVAILABLE_SIZES,
        public ?string $BRAND_LOGO_IMAGE,
        public ?string $THUMBNAIL_IMAGE,
        public ?string $COLOR_SWATCH_IMAGE,
        public ?string $PRODUCT_IMAGE,
        public ?string $SPEC_SHEET,
        public ?string $FRONT_FLAT,
        public ?string $BACK_FLAT,
        public ?string $FRONT_MODEL,
        public ?string $BACK_MODEL,
        public ?string $SIDE_MODEL,
        public ?string $THREE_Q_MODEL,
        public ?string $PRICE_TEXT,
        public ?string $COLOR_NAME,
        public ?string $COLOR_SQUARE_IMAGE,
        public ?string $COLOR_PRODUCT_IMAGE,
        public ?string $COLOR_PRODUCT_IMAGE_THUMBNAIL,
        public ?string $SIZE,
        public ?string $PIECE_WEIGHT,
        public ?string $PIECE_PRICE,
        public ?string $DOZEN_PRICE,
        public ?string $CASE_PRICE,
        public ?string $PIECE_SALE_PRICE,
        public ?string $DOZEN_SALE_PRICE,
        public ?string $CASE_SALE_PRICE,
        public ?string $SALE_START_DATE,
        public ?string $SALE_END_DATE,
        public ?string $CASE_SIZE,
        public ?string $INVENTORY_KEY,
        public ?string $SIZE_INDEX,
        public ?string $CATALOG_COLOR,
        public ?string $PRICE_CODE,
        public ?string $PRODUCT_STATUS,
        public ?string $TITLE_IMAGE,
        public ?string $BRAND_NAME,
        public ?string $KEYWORDS,
        public ?string $CATEGORY,
    ) {
    }
}
