<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMillsTable extends Migration
{
    public function up(): void
    {
        Schema::create('mills', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('src')->nullable();
            $table->string('logo_src')->nullable();
            $table->string('slug');
            $table->json('data');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('mills');
    }
}
