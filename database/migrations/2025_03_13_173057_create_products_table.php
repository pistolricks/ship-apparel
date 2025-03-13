<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("UNIQUE_KEY")->unique();
            $table->string("PRODUCT_TITLE");
            $table->text("PRODUCT_DESCRIPTION")->nullable();
            $table->string("STYLE")->nullable();
            $table->string("AVAILABLE_SIZES")->nullable();
            $table->string("BRAND_LOGO_IMAGE")->nullable();
            $table->string("THUMBNAIL_IMAGE")->nullable();
            $table->string("COLOR_SWATCH_IMAGE")->nullable();
            $table->string("PRODUCT_IMAGE")->nullable();
            $table->string("SPEC_SHEET")->nullable();
            $table->string("FRONT_FLAT")->nullable();
            $table->string("BACK_FLAT")->nullable();
            $table->string("FRONT_MODEL")->nullable();
            $table->string("BACK_MODEL")->nullable();
            $table->string("SIDE_MODEL")->nullable();
            $table->string("THREE_Q_MODEL")->nullable();
            $table->string("PRICE_TEXT")->nullable();
            $table->string("COLOR_NAME")->nullable();
            $table->string("COLOR_SQUARE_IMAGE")->nullable();
            $table->string("COLOR_PRODUCT_IMAGE")->nullable();
            $table->string("COLOR_PRODUCT_IMAGE_THUMBNAIL")->nullable();
            $table->string("SIZE")->nullable();
            $table->string("PIECE_WEIGHT")->nullable();
            $table->string("PIECE_PRICE")->nullable();
            $table->string("DOZEN_PRICE")->nullable();
            $table->string("CASE_PRICE")->nullable();
            $table->string("PIECE_SALE_PRICE")->nullable();
            $table->string("DOZEN_SALE_PRICE")->nullable();
            $table->string("CASE_SALE_PRICE")->nullable();
            $table->string("SALE_START_DATE")->nullable();
            $table->string("SALE_END_DATE")->nullable();
            $table->string("CASE_SIZE")->nullable();
            $table->string("INVENTORY_KEY")->nullable();
            $table->string("SIZE_INDEX")->nullable();
            $table->string("CATALOG_COLOR")->nullable();
            $table->string("PRICE_CODE")->nullable();
            $table->string("PRODUCT_STATUS")->nullable();
            $table->string("TITLE_IMAGE")->nullable();
            $table->string("BRAND_NAME")->nullable();
            $table->string("KEYWORDS")->nullable();
            $table->string("CATEGORY")->nullable();


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
}
