<?php

namespace App\Support;


readonly class CategorySupport
{


    public static function lookupCategory(string $category): string
    {
        return collect([
            "accessories" => "Accessories",
            "activewear" => "Activewear",
            "bags" => "Bags",
            "bottoms" => "Bottoms",
            "caps" => "Caps",
            "infant-and-toddler" => "Infant & Toddler",
            "juniors-and-young-men" => "Juniors & Young Men",
            "outerwear" => "Outerwear",
            "personal-protection" => "Personal Protection",
            "polos-knits" => "Polos/Knits",
            "sweatshirts-fleece" => "Sweatshirts/Fleece",
            "t-shirts" => "T-Shirts",
            "tall" => "Tall",
            "womens" => "Women's",
            "workwear" => "Workwear",
            "woven-shirts" => "Woven Shirts",
            "youth" => "Youth",
        ])->get($category, 'T-Shirts');
    }

}
