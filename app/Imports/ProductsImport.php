<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithSkipDuplicates;

class ProductsImport implements ToModel, WithHeadingRow, WithBatchInserts, WithSkipDuplicates, WithChunkReading, \Illuminate\Contracts\Queue\ShouldQueue
{

    public function __construct()
    {

    }

    public function model(array $row): Product
    {



        return new Product([
            'id' => $row['unique_key'],
            'product_title' => $row['product_title'],
            'product_description' => $row['product_description'],
            'style' => $row['style'],
            'available_sizes' => $row['available_sizes'],
            'brand_logo_image' => $row['brand_logo_image'],
            'thumbnail_image' => $row['thumbnail_image'],
            'color_swatch_image' => $row['color_swatch_image'],
            'product_image' => $row['product_image'],
            'spec_sheet' => $row['spec_sheet'],
            'price_text' => $row['price_text'],
            'suggested_price' => $row['suggested_price'],
            'category_name' => $row['category_name'],
            'subcategory_name' => $row['subcategory_name'],
            'color_name' => $row['color_name'],
            'color_square_image' => $row['color_square_image'],
            'color_product_image' => $row['color_product_image'],
            'color_product_image_thumbnail' => $row['color_product_image_thumbnail'],
            'size' => $row['size'],
            'piece_weight' => $row['piece_weight'],
            'piece_price' => $row['piece_price'],
            'dozens_price' => $row['dozens_price'],
            'case_price' => $row['case_price'],
            'price_group' => $row['price_group'],
            'case_size' => $row['case_size'],
            'inventory_key' => $row['inventory_key'],
            'size_index' => $row['size_index'],
            'sanmar_mainframe_color' => $row['sanmar_mainframe_color'],
            'mill' => $row['mill'],
            'product_status' => $row['product_status'],
            'companion_style' => $row['companion_style'],
            'msrp' => $row['msrp'],
            'map_pricing' => $row['map_pricing'],
            'front_model_image_url' => $row['front_model_image_url'],
            'back_model_image_url' => $row['back_model_image_url'],
            'front_flat_image_url' => $row['front_flat_image_url'],
            'back_flat_image_url' => $row['back_flat_image_url'],
            'product_measurements' => $row['product_measurements'],
            'pms_color' => $row['pms_color'],
            'gtin' => $row['gtin'],
            'decoration_spec_sheet' => $row['decoration_spec_sheet']
        ]);
    }

    public function batchSize(): int
    {
        return 1000;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
