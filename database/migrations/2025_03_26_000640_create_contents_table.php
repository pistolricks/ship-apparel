<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentsTable extends Migration
{
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('component')->default('default');
            $table->string('title')->nullable();
            $table->json('href')->nullable();
            $table->json('class')->nullable();
            $table->json('description')->nullable();
            $table->json('information')->nullable();
            $table->string('src')->nullable();
            $table->string('vert_src')->nullable();
            $table->string('cta')->nullable();
            $table->string('value')->nullable();
            $table->json('data')->nullable();
            $table->string('side')->nullable();


            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
}
