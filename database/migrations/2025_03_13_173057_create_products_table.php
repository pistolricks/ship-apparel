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
            $table->string("PRODUCT_TITLE")->nullable();
            $table->string("PRODUCT_DESCRIPTION")->nullable();
            $table->string("STYLE")->nullable();
            $table->string("AVAILABLE_SIZES")->nullable();
            $table->string("BRAND_LOGO_IMAGE")->nullable();
            $table->string("THUMBNAIL_IMAGE")->nullable();
            $table->string("COLOR_SWATCH_IMAGE")->nullable();
            $table->string("PRODUCT_IMAGE")->nullable();
            $table->string("SPEC_SHEET")->nullable();
            $table->string("PRICE_TEXT")->nullable();
            $table->string("SUGGESTED_PRICE")->nullable();
            $table->string("CATEGORY_NAME")->nullable();
            $table->string("SUBCATEGORY_NAME")->nullable();
            $table->string("COLOR_NAME")->nullable();
            $table->string("COLOR_SQUARE_IMAGE")->nullable();
            $table->string("COLOR_PRODUCT_IMAGE")->nullable();
            $table->string("COLOR_PRODUCT_IMAGE_THUMBNAIL")->nullable();
            $table->string("SIZE")->nullable();
            $table->string("PIECE_WEIGHT")->nullable();
            $table->string("PIECE_PRICE")->nullable();
            $table->string("DOZENS_PRICE")->nullable();
            $table->string("CASE_PRICE")->nullable();
            $table->string("PRICE_GROUP")->nullable();
            $table->string("CASE_SIZE")->nullable();
            $table->string("INVENTORY_KEY")->nullable();
            $table->string("SIZE_INDEX")->nullable();
            $table->string("SANMAR_MAINFRAME_COLOR")->nullable();
            $table->string("MILL")->nullable();
            $table->string("PRODUCT_STATUS")->nullable();
            $table->string("COMPANION_STYLES")->nullable();
            $table->string("MSRP")->nullable();
            $table->string("MAP_PRICING")->nullable();
            $table->string("FRONT_MODEL_IMAGE_URL")->nullable();
            $table->string("BACK_MODEL_IMAGE_URL")->nullable();
            $table->string("FRONT_FLAT_IMAGE_URL")->nullable();
            $table->string("BACK_FLAT_IMAGE_URL")->nullable();
            $table->string("PRODUCT_MEASUREMENTS")->nullable();
            $table->string("PMS_COLOR")->nullable();
            $table->string("GTIN")->nullable();
            $table->string("DECORATOR_SPEC_SHEET")->nullable();
            $table->string("QTY")->nullable();
            $table->string("BACK_MODEL_IMAGE")->nullable();
            $table->string("FRONT_FLAT_IMAGE")->nullable();
            $table->string("BACK_FLAT_IMAGE")->nullable();


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
}
