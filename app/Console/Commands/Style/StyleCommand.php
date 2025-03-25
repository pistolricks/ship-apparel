<?php

namespace App\Console\Commands\Style;

use App\Models\Product;
use App\Models\Style;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class StyleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-or-create-style-collection';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     * @throws \Throwable
     */
    public function handle(Product $product)
    {
        return DB::transaction(
            callback: static fn () => Style::updateOrCreate(
                [
                    'id' => $product->style
                ],
                [
                    'title' => $product->product_title,
                    'description' => $product->product_description,
                    'mill' => $product->mill,
                    'categories' => $product->category_name,
                    'subcategories' => $product->subcategory_name,
                    'companion_style' => $product->companion_style,
                    'msrp' => $product->msrp,
                    'map_pricing' => $product->map_pricing,
                    'suggested_pricing' => $product->suggested_pricing,
                    'price_group' => $product->price_group,
                    'spec_sheet' => $product->spec_sheet,
                    'decoration_spec_sheet' => $product->decoration_spec_sheet,
                    'product_measurements' => $product->product_measurements,
                    'front_model_image_url' => $product->front_model_image_url,
                    'back_model_image_url' => $product->back_model_image_url,
                    'front_flat_image_url' => $product->front_flat_image_url,
                    'back_flat_image_url' => $product->back_flat_image_url,
                    'data' => "",
                ]
        ),
            attempts: 2,
        );


    }
}
