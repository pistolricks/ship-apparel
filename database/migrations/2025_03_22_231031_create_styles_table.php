<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStylesTable extends Migration
{
    public function up(): void
    {
        Schema::create('styles', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('mill')->nullable();
            $table->string('categories')->nullable();
            $table->string('subcategories')->nullable();
            $table->string('companion_style')->nullable();
            $table->string('msrp')->nullable();
            $table->string('map_pricing')->nullable();
            $table->string('suggested_pricing')->nullable();
            $table->string('price_group')->nullable();
            $table->string('spec_sheet')->nullable();
            $table->string('decoration_spec_sheet')->nullable();
            $table->string('product_measurements')->nullable();
            $table->string('front_model_image_url')->nullable();
            $table->string('back_model_image_url')->nullable();
            $table->string('front_flat_image_url')->nullable();
            $table->string('back_flat_image_url')->nullable();
            $table->json('data')->nullable();
            $table->string('slug');
            $table->string('mill_id');


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('styles');
    }
}
