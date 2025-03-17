<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\SimpleExcel\SimpleExcelReader;

class ImportSanMarFileData implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $writer = SimpleExcelReader::create('storage/app/SanMar_SDL_N.csv')
            ->useDelimiter(',')
            ->useHeaders([
                "UNIQUE_KEY",
            "PRODUCT_TITLE",
            "PRODUCT_DESCRIPTION",
                "STYLE#",
            "AVAILABLE_SIZES",
            "BRAND_LOGO_IMAGE",
            "THUMBNAIL_IMAGE",
            "COLOR_SWATCH_IMAGE",
            "PRODUCT_IMAGE",
            "SPEC_SHEET",
            "PRICE_TEXT",
            "SUGGESTED_PRICE",
            "CATEGORY_NAME",
            "SUBCATEGORY_NAME",
            "COLOR_NAME",
            "COLOR_SQUARE_IMAGE",
            "COLOR_PRODUCT_IMAGE",
            "COLOR_PRODUCT_IMAGE_THUMBNAIL",
            "SIZE",
            "PIECE_WEIGHT",
            "PIECE_PRICE",
            "DOZENS_PRICE",
            "CASE_PRICE",
            "PRICE_GROUP",
            "CASE_SIZE",
            "INVENTORY_KEY",
            "SIZE_INDEX",
            "SANMAR_MAINFRAME_COLOR",
            "MILL",
            "PRODUCT_STATUS",
            "COMPANION_STYLES",
            "MSRP",
            "MAP_PRICING",
            "FRONT_MODEL_IMAGE_URL",
            "BACK_MODEL_IMAGE_URL",
            "FRONT_FLAT_IMAGE_URL",
            "BACK_FLAT_IMAGE_URL",
            "PRODUCT_MEASUREMENTS",
            "PMS_COLOR",
            "GTIN",
            "DECORATOR_SPEC_SHEET",

            ])
            ->getRows()
            ->chunk(5000)
            ->each(
                fn ($chunk) => SaveSanMarFileData::dispatch($chunk)
            );

        $writer->close();

    }
}
