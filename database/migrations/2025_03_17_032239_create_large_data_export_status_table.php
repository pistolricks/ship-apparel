<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLargeDataExportStatusTable extends Migration{
    public function up(): void
    {
        Schema::create('large_data_export_status', function (Blueprint $table) {
            $table->id();

//

$table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('large_data_export_status');
    }
}
