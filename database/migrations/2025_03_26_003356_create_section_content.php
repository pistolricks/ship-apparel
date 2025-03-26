<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionContent extends Migration
{
    public function up(): void
    {
        Schema::create('section_content', function (Blueprint $table) {
            $table->foreignId('section_id');
            $table->foreignId('content_id');
            $table->unsignedInteger('order')->default(0);
            $table->string('status')->default('draft');
            $table->boolean('active')->default(true);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('section_content');
    }
}
