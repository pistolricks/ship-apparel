<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageSection extends Migration
{
    public function up(): void
    {
        Schema::create('page_section', function (Blueprint $table) {
            $table->foreignUuid('page_id');
            $table->foreignId('section_id');
            $table->string('status')->default('draft');
            $table->boolean('active')->default(true);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_section');
    }
}
