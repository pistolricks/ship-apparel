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
        SimpleExcelReader::create('storage/app/SanMar_SDL_N.csv')
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
                "FRONT_FLAT",
                "BACK_FLAT",
                "FRONT_MODEL",
                "BACK_MODEL",
                "SIDE_MODEL",
                "THREE_Q_MODEL",
                "PRICE_TEXT",
                "COLOR_NAME",
                "COLOR_SQUARE_IMAGE",
                "COLOR_PRODUCT_IMAGE",
                "COLOR_PRODUCT_IMAGE_THUMBNAIL",
                "SIZE",
                "PIECE_WEIGHT",
                "PIECE_PRICE",
                "DOZEN_PRICE",
                "CASE_PRICE",
                "PIECE_SALE_PRICE",
                "DOZEN_SALE_PRICE",
                "CASE_SALE_PRICE",
                "SALE_START_DATE",
                "SALE_END_DATE",
                "CASE_SIZE",
                "INVENTORY_KEY",
                "SIZE_INDEX",
                "CATALOG_COLOR",
                "PRICE_CODE",
                "PRODUCT_STATUS",
                "TITLE_IMAGE",
                "BRAND_NAME",
                "KEYWORDS",
                "CATEGORY",
            ])
            ->getRows()
            ->chunk(3500)
            ->each(
                fn ($chunk) => SaveSanMarFileData::dispatch($chunk)
            );
    }
}
