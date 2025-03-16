<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->unsignedBigInteger("id")->primary();
            $table->string("PRODUCT_TITLE");
            $table->text("PRODUCT_DESCRIPTION")->nullable();
            $table->text("AVAILABLE_SIZES")->nullable();
            $table->text("BRAND_LOGO_IMAGE")->nullable();
            $table->text("THUMBNAIL_IMAGE")->nullable();
            $table->text("COLOR_SWATCH_IMAGE")->nullable();
            $table->text("PRODUCT_IMAGE")->nullable();
            $table->text("SPEC_SHEET")->nullable();
            $table->text("PRICE_TEXT")->nullable();
            $table->text("SUGGESTED_PRICE")->nullable();
            $table->text("CATEGORY_NAME")->nullable();
            $table->text("SUBCATEGORY_NAME")->nullable();
            $table->text("COLOR_NAME")->nullable();
            $table->text("COLOR_SQUARE_IMAGE")->nullable();
            $table->text("COLOR_PRODUCT_IMAGE")->nullable();
            $table->text("COLOR_PRODUCT_IMAGE_THUMBNAIL")->nullable();
            $table->text("SIZE")->nullable();
            $table->text("PIECE_WEIGHT")->nullable();
            $table->text("PIECE_PRICE")->nullable();
            $table->text("DOZENS_PRICE")->nullable();
            $table->text("CASE_PRICE")->nullable();
            $table->text("PRICE_GROUP")->nullable();
            $table->text("CASE_SIZE")->nullable();
            $table->text("INVENTORY_KEY")->nullable();
            $table->text("SIZE_INDEX")->nullable();
            $table->text("SANMAR_MAINFRAME_COLOR")->nullable();
            $table->text("MILL")->nullable();
            $table->text("PRODUCT_STATUS")->nullable();
            $table->text("COMPANION_STYLES")->nullable();
            $table->text("MSRP")->nullable();
            $table->text("MAP_PRICING")->nullable();
            $table->text("FRONT_MODEL_IMAGE_URL")->nullable();
            $table->text("BACK_MODEL_IMAGE_URL")->nullable();
            $table->text("FRONT_FLAT_IMAGE_URL")->nullable();
            $table->text("BACK_FLAT_IMAGE_URL")->nullable();
            $table->text("PRODUCT_MEASUREMENT")->nullable();
            $table->text("PMS_COLOR")->nullable();
            $table->text("GTIN")->nullable();
            $table->text("DECORATOR_SPEC_SHEET")->nullable();
            $table->text("QTY")->nullable();
            $table->text("BACK_MODEL_IMAGE")->nullable();
            $table->text("FRONT_FLAT_IMAGE")->nullable();
            $table->text("BACK_FLAT_IMAGE")->nullable();
            $table->text("COMPANION_STYLE")->nullable();
            $table->text("DECORATION_SPEC_SHEET")->nullable();
            $table->text("FRONT_FLAT")->nullable();
            $table->text("BACK_FLAT")->nullable();
            $table->text("FRONT_MODEL")->nullable();
            $table->text("BACK_MODEL")->nullable();
            $table->text("SIDE_MODEL")->nullable();
            $table->text("THREE_Q_MODEL")->nullable();
            $table->text("PIECE_SALE_PRICE")->nullable();
            $table->text("DOZEN_SALE_PRICE")->nullable();
            $table->text("CASE_SALE_PRICE")->nullable();
            $table->text("SALE_START_DATE")->nullable();
            $table->text("SALE_END_DATE")->nullable();
            $table->text("CATALOG_COLOR")->nullable();
            $table->text("PRICE_CODE")->nullable();
            $table->text("TITLE_IMAGE")->nullable();
            $table->text("BRAND_NAME")->nullable();
            $table->text("KEYWORDS")->nullable();
            $table->text("CATEGORY")->nullable();


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
}
