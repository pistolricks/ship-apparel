<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;


class ProductData extends Data
{
    public function __construct(
        #[MapInputName('UNIQUE_KEY')]
        public ?int $id,
        #[MapInputName('STYLE#')]
        public ?string $STYLE,
        public ?string $PRODUCT_TITLE,
        public ?string $PRODUCT_DESCRIPTION,
        public ?string $AVAILABLE_SIZES,
        public ?string $BRAND_LOGO_IMAGE,
        public ?string $THUMBNAIL_IMAGE,
        public ?string $COLOR_SWATCH_IMAGE,
        public ?string $PRODUCT_IMAGE,
        public ?string $SPEC_SHEET,
        public ?string $PRICE_TEXT,
        public ?string $SUGGESTED_PRICE,
        public ?string $CATEGORY_NAME,
        public ?string $SUBCATEGORY_NAME,
        public ?string $COLOR_NAME,
        public ?string $COLOR_SQUARE_IMAGE,
        public ?string $COLOR_PRODUCT_IMAGE,
        public ?string $COLOR_PRODUCT_IMAGE_THUMBNAIL,
        public ?string $SIZE,
        public ?string $PIECE_WEIGHT,
        public ?string $PIECE_PRICE,
        public ?string $DOZENS_PRICE,
        public ?string $CASE_PRICE,
        public ?string $PRICE_GROUP,
        public ?string $CASE_SIZE,
        public ?string $INVENTORY_KEY,
        public ?string $SIZE_INDEX,
        public ?string $SANMAR_MAINFRAME_COLOR,
        public ?string $MILL,
        public ?string $PRODUCT_STATUS,
        public ?string $COMPANION_STYLES,
        public ?string $MSRP,
        public ?string $MAP_PRICING,
        public ?string $FRONT_MODEL_IMAGE_URL,
        public ?string $BACK_MODEL_IMAGE_URL,
        public ?string $FRONT_FLAT_IMAGE_URL,
        public ?string $BACK_FLAT_IMAGE_URL,
        public ?string $PRODUCT_MEASUREMENT,
        public ?string $PMS_COLOR,
        public ?string $GTIN,
        public ?string $DECORATOR_SPEC_SHEET,
        public ?string $QTY,
        public ?string $BACK_MODEL_IMAGE,
        public ?string $FRONT_FLAT_IMAGE,
        public ?string $BACK_FLAT_IMAGE,
        public ?string $COMPANION_STYLE,
        public ?string $DECORATION_SPEC_SHEET,
        public ?string $FRONT_FLAT,
        public ?string $BACK_FLAT,
        public ?string $FRONT_MODEL,
        public ?string $BACK_MODEL,
        public ?string $SIDE_MODEL,
        public ?string $THREE_Q_MODEL,
        public ?string $PIECE_SALE_PRICE,
        public ?string $DOZEN_SALE_PRICE,
        public ?string $CASE_SALE_PRICE,
        public ?string $SALE_START_DATE,
        public ?string $SALE_END_DATE,
        public ?string $CATALOG_COLOR,
        public ?string $PRICE_CODE,
        public ?string $TITLE_IMAGE,
        public ?string $BRAND_NAME,
        public ?string $KEYWORDS,
        public ?string $CATEGORY,


    ) {
    }
}
