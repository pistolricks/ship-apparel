<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class Menu extends Model
{
    use Sushi;

    protected $rows = [
        [
            'name' => 'Products',
            'path' => '/products',
            'sub' => [
                [
                    'name' => 'NEW',
                    'path' => 'products/new',
                ],
                [
                    'name' => 'Brands',
                    'path' => 'products/brands',
                    'sub' => [
                        ['name' => 'A4', 'path' => 'products/brands/a4'],
                        ['name' => 'Allmade', 'path' => 'products/brands/allmade'],
                        ['name' => 'American Apparel', 'path' => 'products/brands/american-apparel'],
                        ['name' => 'BELLA+CANVAS', 'path' => 'products/brands/bella-canvas'],
                        ['name' => 'Brooks Brothers', 'path' => 'products/brands/brooks-brothers'],
                        ['name' => 'Bulwark', 'path' => 'products/brands/bulwark'],
                        ['name' => 'Carhartt', 'path' => 'products/brands/carhartt'],
                        ['name' => 'Champion', 'path' => 'products/brands/champion'],
                        ['name' => 'Comfort Colors', 'path' => 'products/brands/comfort-colors'],
                        ['name' => 'CornerStone', 'path' => 'products/brands/corner-stone'],
                        ['name' => 'Cotopaxi', 'path' => 'products/brands/cotopaxi'],
                        ['name' => 'District', 'path' => 'products/brands/district'],
                        ['name' => 'Eddie Bauer', 'path' => 'products/brands/eddie-bauer'],
                        ['name' => 'Gildan', 'path' => 'products/brands/gildan'],
                        ['name' => 'Hanes', 'path' => 'products/brands/hanes'],
                        ['name' => 'Jerzees', 'path' => 'products/brands/jerzees'],
                        ['name' => 'Mercer+Mettle', 'path' => 'products/brands/mercer-mettle'],
                        ['name' => 'New Era', 'path' => 'products/brands/new-era'],
                        ['name' => 'Next Level Apparel', 'path' => 'products/brands/next-level-apparel'],
                        ['name' => 'Nike', 'path' => 'products/brands/nike'],
                        ['name' => 'OGIO', 'path' => 'products/brands/ogio'],
                        ['name' => 'Outdoor Research', 'path' => 'products/brands/outdoor-research'],
                        ['name' => 'Port & Company', 'path' => 'products/brands/port-and-company'],
                        ['name' => 'Port Authority', 'path' => 'products/brands/port-authority'],
                        ['name' => 'Rabbit Skins', 'path' => 'products/brands/rabbit-skins'],
                        ['name' => 'Red Kap', 'path' => 'products/brands/red-kap'],
                        ['name' => 'Russell Outdoors', 'path' => 'products/brands/russell-outdoors'],
                        ['name' => 'Spacecraft', 'path' => 'products/brands/spacecraft'],
                        ['name' => 'Sport-Tek', 'path' => 'products/brands/sport-tek'],
                        ['name' => 'Stanley/Stella', 'path' => 'products/brands/stanley-stella'],
                        ['name' => 'tentree', 'path' => 'products/brands/tentree'],
                        ['name' => 'The North Face', 'path' => 'products/brands/the-north-face'],
                        ['name' => 'Tommy Bahama', 'path' => 'products/brands/tommy-bahama'],
                        ['name' => 'TravisMathew', 'path' => 'products/brands/travis-mathew'],
                        ['name' => 'Volunteer Knitwear', 'path' => 'products/brands/volunteer-knitwear'],
                        ['name' => 'Wink', 'path' => 'products/brands/wink']

                    ],
                ],
                [
                    'name' => 'T-Shirts',
                    'path' => 'products/t-shirts',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/t-shirts/new'],
                        ['name' => 'Sale', 'path' => 'products/t-shirts/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/t-shirts/discontinued'],
                    ],
                    'sub' => [
                        ['name' => '100% Cotton', 'path' => 'products/t-shirts/100-cotton'],
                        ['name' => '6-6.1 100% Cotton', 'path' => 'products/t-shirts/6-6-1'],
                        ['name' => '5-5.6 100% Cotton', 'path' => 'products/t-shirts/5-5-6'],
                        ['name' => '5-5.6 100% Cotton', 'path' => 'products/t-shirts/5-5-6'],
                        ['name' => 'Tri-Blend', 'path' => 'products/t-shirts/tri-blend'],
                        ['name' => '50/50 Blend', 'path' => 'products/t-shirts/50-50-blend'],
                        ['name' => 'Performance', 'path' => 'products/t-shirts/performance'],
                        ['name' => 'Tanks', 'path' => 'products/t-shirts/tanks'],
                        ['name' => "Women's", 'path' => 'products/t-shirts/womens'],
                        ['name' => 'Youth', 'path' => 'products/t-shirts/youth'],
                        ['name' => 'Ringspun', 'path' => 'products/t-shirts/ringspun'],
                        ['name' => 'Long Sleeve', 'path' => 'products/t-shirts/long-sleeve'],
                        ['name' => 'Specialty', 'path' => 'products/t-shirts/specialty'],
                        ['name' => 'Workwear', 'path' => 'products/t-shirts/workwear'],
                        ['name' => 'Tall', 'path' => 'products/t-shirts/tall'],
                        ['name' => 'Essentials', 'path' => 'products/t-shirts/essentials'],
                    ]
                ],
                [
                    'name' => 'Polos/Knits',
                    'path' => 'products/polos-knits',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/polos-knits/new'],
                        ['name' => 'Sale', 'path' => 'products/polos-knits/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/polos-knits/discontinued'],
                    ],
                    'sub' => [
                        ['name' => "Performance", 'path' => 'products/polos-knits/performance'],
                        ['name' => "Easy Care", 'path' => 'products/polos-knits/easy-care'],
                        ['name' => "Silk Touch", 'path' => 'products/polos-knits/silk-touch'],
                        ['name' => "Cotton", 'path' => 'products/polos-knits/cotton'],
                        ['name' => "Workwear", 'path' => 'products/polos-knits/workwear'],
                        ['name' => "Sweaters", 'path' => 'products/polos-knits/sweaters'],
                        ['name' => "Mock/Turtlenecks", 'path' => 'products/polos-knits/mock-turtlenecks'],
                        ['name' => "Women's", 'path' => 'products/polos-knits/womens'],
                        ['name' => "Youth", 'path' => 'products/polos-knits/youth'],
                        ['name' => "Tall", 'path' => 'products/polos-knits/tall'],
                        ['name' => "Essentials", 'path' => 'products/polos-knits/essentials'],
                    ]
                ],
                [
                    'name' => 'Sweatshirts/Fleece',
                    'path' => 'products/sweatshirts-fleece',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/sweatshirts-fleece/new'],
                        ['name' => 'Sale', 'path' => 'products/sweatshirts-fleece/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/sweatshirts-fleece/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Crewnecks', 'path' => 'products/sweatshirts-fleece/crewnecks'],
                        ['name' => 'Hoodie', 'path' => 'products/sweatshirts-fleece/hoodie'],
                        ['name' => 'Performance', 'path' => 'products/sweatshirts-fleece/performance'],
                        ['name' => 'Sweatpants', 'path' => 'products/sweatshirts-fleece/sweatpants'],
                        ['name' => '1/2 & 1/4 Zip', 'path' => 'products/sweatshirts-fleece/half-and-quarter-zip'],
                        ['name' => 'Full Zip', 'path' => 'products/sweatshirts-fleece/full-zip'],
                        ['name' => 'Fleece', 'path' => 'products/sweatshirts-fleece/fleece'],
                        ['name' => 'Heavyweight', 'path' => 'products/sweatshirts-fleece/heavyweight'],
                        ['name' => "Women's", 'path' => 'products/sweatshirts-fleece/womens'],
                        ['name' => "Youth", 'path' => 'products/sweatshirts-fleece/youth'],
                        ['name' => "Tall", 'path' => 'products/sweatshirts-fleece/tall'],
                        ['name' => "Essentials", 'path' => 'products/sweatshirts-fleece/essentials'],
                    ]
                ],
                [
                    'name' => 'Caps',
                    'path' => 'products/caps',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/caps/new'],
                        ['name' => 'Sale', 'path' => 'products/caps/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/caps/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Stretch Fit', 'path' => 'products/caps/stretch-fit'],
                        ['name' => 'Performance/Team', 'path' => 'products/caps/performance-team'],
                        ['name' => 'Flexfit', 'path' => 'products/caps/flexfit'],
                        ['name' => 'Mesh Back', 'path' => 'products/caps/mesh-back'],
                        ['name' => 'Structured', 'path' => 'products/caps/structured'],
                        ['name' => 'Unstructured', 'path' => 'products/caps/unstructured'],
                        ['name' => 'Pigment/Garment Dyed', 'path' => 'products/caps/pigment-garment-dyed'],
                        ['name' => 'Camouflage', 'path' => 'products/caps/camouflage'],
                        ['name' => 'Safety', 'path' => 'products/caps/safety'],
                        ['name' => 'Full Brim', 'path' => 'products/caps/full-brim'],
                        ['name' => 'Visors', 'path' => 'products/caps/visors'],
                        ['name' => 'Fleece/Beanies', 'path' => 'products/caps/fleece-beanies'],
                        ['name' => 'Twill', 'path' => 'products/caps/twill'],
                        ['name' => "Youth", 'path' => 'products/polos-knits/youth'],
                        ['name' => "Essentials", 'path' => 'products/polos-knits/essentials'],
                    ]
                ],
                [
                    'name' => 'Activewear',
                    'path' => 'products/activewear',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/activewear/new'],
                        ['name' => 'Sale', 'path' => 'products/activewear/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/activewear/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Performance', 'path' => 'products/activewear/performance'],
                        ['name' => 'Jerseys', 'path' => 'products/activewear/jerseys'],
                        ['name' => 'Tanks', 'path' => 'products/activewear/tanks'],
                        ['name' => 'Athletic/Warm-Ups', 'path' => 'products/activewear/athletic-warm-ups'],
                        ['name' => 'Baseball', 'path' => 'products/activewear/baseball'],
                        ['name' => 'Basketball', 'path' => 'products/activewear/basketball'],
                        ['name' => 'Pants & Shorts', 'path' => 'products/activewear/pants-and-shorts'],
                        ['name' => "Women's", 'path' => 'products/activewear/womens'],
                        ['name' => "Youth", 'path' => 'products/activewear/youth'],
                        ['name' => "Tall", 'path' => 'products/activewear/tall'],
                        ['name' => "Essentials", 'path' => 'products/activewear/essentials'],
                    ]
                ],
                [
                    'name' => 'Outerwear',
                    'path' => 'products/outerwear',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/outerwear/new'],
                        ['name' => 'Sale', 'path' => 'products/outerwear/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/outerwear/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Soft Shells', 'path' => 'products/outerwear/soft-shells'],
                        ['name' => 'Polyester Fleece', 'path' => 'products/outerwear/polyester-fleece'],
                        ['name' => 'Rainwear', 'path' => 'products/outerwear/rainwear'],
                        ['name' => '3-in-1', 'path' => 'products/outerwear/3-in-1'],
                        ['name' => 'Athletic/Warm-ups', 'path' => 'products/outerwear/athletic/warm-ups'],
                        ['name' => 'Vests', 'path' => 'products/outerwear/vests'],
                        ['name' => 'Corporate Jackets', 'path' => 'products/outerwear/corporate-jackets'],
                        ['name' => 'Work Jackets', 'path' => 'products/outerwear/work-jackets'],
                        ['name' => 'Golf Outerwear', 'path' => 'products/outerwear/golf-outerwear'],
                        ['name' => 'Insulated Jackets', 'path' => 'products/outerwear/insulated-jackets'],
                        ['name' => "Women's", 'path' => 'products/outerwear/womens'],
                        ['name' => "Youth", 'path' => 'products/outerwear/youth'],
                        ['name' => "Tall", 'path' => 'products/outerwear/tall'],
                        ['name' => "Essentials", 'path' => 'products/outerwear/essentials'],
                    ]
                ],
                [
                    'name' => 'Woven/Dress Shirts',
                    'path' => 'products/woven-dress-shirts',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/woven-dress-shirts/new'],
                        ['name' => 'Sale', 'path' => 'products/woven-dress-shirts/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/woven-dress-shirts/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Easy Care', 'path' => 'products/woven-dress-shirts/easy-care'],
                        ['name' => 'Oxfords', 'path' => 'products/woven-dress-shirts/oxfords'],
                        ['name' => 'Denim', 'path' => 'products/woven-dress-shirts/denim'],
                        ['name' => 'Cotton', 'path' => 'products/woven-dress-shirts/cotton'],
                        ['name' => 'Fishing', 'path' => 'products/woven-dress-shirts/fishing'],
                        ['name' => 'Camp Shirts', 'path' => 'products/woven-dress-shirts/camp-shirts'],
                        ['name' => 'Cotton/Poly Blend', 'path' => 'products/woven-dress-shirts/cotton-poly-blend'],
                        ['name' => '100% Cotton', 'path' => 'products/woven-dress-shirts/100-cotton'],
                        ['name' => 'Premium Woven', 'path' => 'products/woven-dress-shirts/premium-woven'],

                        ['name' => "Women's", 'path' => 'products/woven-dress-shirts/womens'],
                        ['name' => "Tall", 'path' => 'products/woven-dress-shirts/tall'],
                        ['name' => "Essentials", 'path' => 'products/woven-dress-shirts/essentials'],
                    ]
                ],
                [
                    'name' => 'Bottoms',
                    'path' => 'products/bottoms',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/bottoms/new'],
                        ['name' => 'Sale', 'path' => 'products/bottoms/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/bottoms/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Sweatpants', 'path' => 'products/bottoms/sweatpants'],
                        ['name' => 'Joggers', 'path' => 'products/bottoms/joggers'],
                        ['name' => 'Shorts', 'path' => 'products/bottoms/shorts'],
                        ['name' => 'Workwear', 'path' => 'products/bottoms/workwear'],
                        ['name' => 'Scrub Pants', 'path' => 'products/bottoms/scrub-pants'],
                        ['name' => "Women's", 'path' => 'products/bottoms/womens'],
                        ['name' => "Youth", 'path' => 'products/bottoms/youth'],

                    ]
                ],
                [
                    'name' => 'Workwear',
                    'path' => 'products/workwear',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/workwear/new'],
                        ['name' => 'Sale', 'path' => 'products/workwear/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/workwear/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Industrial Work Shirts', 'path' => 'products/workwear/industrial-work-shirts'],
                        ['name' => 'Stain/Soil Resistant', 'path' => 'products/workwear/stain/soil-resistant'],
                        [
                            'name' => 'Industrial Work Pants/Shorts',
                            'path' => 'products/workwear/industrial-work-pants-shorts'
                        ],
                        ['name' => 'Work  Jackets', 'path' => 'products/workwear/work-jackets'],
                        ['name' => 'Safety', 'path' => 'products/workwear/safety'],
                        ['name' => 'Aprons', 'path' => 'products/workwear/aprons'],
                        ['name' => 'Medical/Scrubs', 'path' => 'products/workwear/medical-scrubs'],
                        ['name' => "Tall", 'path' => 'products/workwear/tall'],
                    ]
                ],
                [
                    'name' => 'Bags',
                    'path' => 'products/bags',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/bags/new'],
                        ['name' => 'Sale', 'path' => 'products/bags/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/bags/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Briefcases/Messengers', 'path' => 'products/bags/briefcases-messengers'],
                        ['name' => 'Backpacks', 'path' => 'products/bags/backpacks'],
                        ['name' => 'Duffels', 'path' => 'products/bags/duffels'],
                        ['name' => 'Travel Bags', 'path' => 'products/bags/travel-bags'],
                        ['name' => 'Golf Bags', 'path' => 'products/bags/golf-bags'],
                        ['name' => 'Coolers & Lunch Bags', 'path' => 'products/bags/coolers-and-lunch-bags'],
                        ['name' => 'Cinch Packs', 'path' => 'products/bags/cinch-packs'],
                        ['name' => 'Totes', 'path' => 'products/bags/totes'],
                        ['name' => 'Grocery Totes', 'path' => 'products/bags/grocery-totes'],
                        ['name' => 'Specialty Bags', 'path' => 'products/bags/specialty-bags'],
                        ['name' => 'Rolling Bags', 'path' => 'products/bags/rolling-bags'],
                        ['name' => "Essentials", 'path' => 'products/bags/essentials'],
                    ]
                ],
                [
                    'name' => 'Accessories',
                    'path' => 'products/accessories',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/accessories/new'],
                        ['name' => 'Sale', 'path' => 'products/accessories/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/accessories/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Blankets', 'path' => 'products/accessories/blankets'],
                        ['name' => 'Robes/Towels', 'path' => 'products/accessories/robes-towels'],
                        ['name' => 'Golf Towels', 'path' => 'products/accessories/golf-towels'],
                        ['name' => 'Aprons', 'path' => 'products/accessories/aprons'],
                        ['name' => 'Scarves/Gloves', 'path' => 'products/accessories/scarves-gloves'],
                        ['name' => 'Other', 'path' => 'products/accessories/other'],
                        ['name' => 'Essential', 'path' => 'products/accessories/essential'],
                    ]
                ],
                [
                    'name' => 'Personal Protection',
                    'path' => 'products/personal-protection',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/personal-protection/new'],
                        ['name' => 'Sale', 'path' => 'products/personal-protection/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/personal-protection/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'Face Coverings', 'path' => 'products/personal-protection/face-coverings'],
                        ['name' => 'Medical/Scrubs', 'path' => 'products/personal-protection/medical-scrubs'],
                        ['name' => 'Safety', 'path' => 'products/personal-protection/safety'],
                    ]
                ],
                [
                    'name' => "Women's",
                    'path' => 'products/womens',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/womens/new'],
                        ['name' => 'Sale', 'path' => 'products/womens/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/womens/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'T-Shirts', 'path' => 'products/womens/t-shirts'],
                        ['name' => 'Polos/Knits', 'path' => 'products/womens/polos/knits'],
                        ['name' => 'Sweatshirts/Fleece', 'path' => 'products/womens/sweatshirts-fleece'],
                        ['name' => 'Woven Shirts', 'path' => 'products/womens/woven-shirts'],
                        ['name' => 'Caps', 'path' => 'products/womens/caps'],
                        ['name' => 'Outerwear', 'path' => 'products/womens/outerwear'],
                        ['name' => 'Activewear', 'path' => 'products/womens/activewear'],
                        ['name' => 'bottoms', 'path' => 'products/womens/bottoms'],
                    ]
                ],
                [
                    'name' => 'Youth',
                    'path' => 'products/youth',
                    'special' => [
                        ['name' => 'New', 'path' => 'products/youth/new'],
                        ['name' => 'Sale', 'path' => 'products/youth/sale'],
                        ['name' => 'Discontinued', 'path' => 'products/youth/discontinued'],
                    ],
                    'sub' => [
                        ['name' => 'T-Shirts', 'path' => 'products/youth/t-shirts'],
                        ['name' => 'Polos/Knits', 'path' => 'products/youth/polos/knits'],
                        ['name' => 'Sweatshirts/Fleece', 'path' => 'products/youth/sweatshirts-fleece'],
                        ['name' => 'Caps', 'path' => 'products/youth/caps'],
                        ['name' => 'Outerwear', 'path' => 'products/youth/outerwear'],
                        ['name' => 'Activewear', 'path' => 'products/youth/activewear'],
                        ['name' => 'bottoms', 'path' => 'products/youth/bottoms'],
                        ['name' => 'Infant & Toddler', 'path' => 'products/youth/infant-and-toddler'],
                    ]
                ],
                [
                    'name' => 'Outlet',
                    'path' => 'products/outlet',
                ],
            ]
        ],
        [
            'name' => 'Reversible Apparel',
            'path' => 'reversible-apparel',
        ],
        [
            'name' => 'School Specials',
            'path' => 'school-specials',
        ],
        [
            'name' => 'Our Company',
            'path' => 'our-company',
        ],
        [
            'name' => 'Contact Us',
            'path' => 'contact-us',
        ]
    ];
}
