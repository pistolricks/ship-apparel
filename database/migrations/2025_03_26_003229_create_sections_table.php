<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionsTable extends Migration
{
    public function up(): void
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('component')->default('default');
            $table->string('title')->nullable();
            $table->json('href')->nullable();
            $table->json('class')->nullable();
            $table->json('data')->nullable();
            $table->integer('start')->default(0);
            $table->integer('end')->nullable();
            $table->boolean('active')->nullable();
            $table->string('status')->default('draft');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sections');
    }
}
