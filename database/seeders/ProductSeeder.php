<?php

namespace Database\Seeders;

use App\Data\ProductData;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::truncate();
        $heading = true;
        $data = file_get_contents(resource_path("json/american-apparel.json"));
        $array = json_decode($data, true);

        $collection = collect($array);

        $collection->map(function ($item, $index) {
            $item['id'] = $index + 1;
           $data = ProductData::from($item);
           Product::query()->create($data->toArray());
        });


    }
}
