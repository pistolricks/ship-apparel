<?php

namespace App\Support;




readonly class CategorySupport
{


    public static function lookupCategory(string $category): string
    {
        return collect([
                'activewear' => 'Activewear',
                'accessories' => 'Accessories',
                'bags' => 'Bags',
                'bottoms' => 'Bottoms',
                'caps' => 'Caps',
                'outerwear' => 'Outerwear',
                'polos-knits' => 'Polos/Knits',
                'personal-protection' => 'Personal Protection',
                'sweatshirts-fleece' => 'Sweatshirts/Fleece',
                't-shirts' => 'T-Shirts',
                'tall' => 'Tall',
                'womens' => "Women's",
                'workwear' => 'Workwear',
                'woven-shirts' => 'Woven Shirts',
                'youth' => 'Youth',
        ])->get($category, 'T-Shirts');
    }

}
