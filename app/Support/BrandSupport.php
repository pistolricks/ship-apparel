<?php

namespace App\Support;




readonly class BrandSupport
{


    public static function lookupBrand(string $brand): string
    {
        return collect([
                'a4' => 'A4',
                'allmade' => 'Allmade',
                'american-apparel' => 'American Apparel',
                'bella-canvas' => 'BELLA+CANVAS',
                'brooks-brothers' => 'Brooks Brothers',
                'bulwark' => 'Bulwark',
                'carhartt' => 'Carhartt',
                'champion' => 'Champion',
                'comfort-colors' => 'Comfort Colors',
                'corner-stone' => 'CornerStone',
                'cotopaxi' => 'Cotopaxi',
                'district' => 'District',
                'eddie-bauer' => 'Eddie Bauer',
                'gildan' => 'Gildan',
                'hanes' => 'Hanes',
                'jerzees' => 'Jerzees',
                'mercer-mettle' => 'Mercer+Mettle',
                'new-era' => 'New Era',
                'next-level-apparel' => 'Next Level Apparel',
                'nike' => 'Nike',
                'ogio' => 'OGIO',
                'outdoor-research' => 'Outdoor Research',
                'port-and-company' => 'Port & Company',
                'port-authority' => 'Port Authority',
                'rabbit-skins' => 'Rabbit Skins',
                'red-kap' => 'Red Kap',
                'russell-outdoors' => 'Russell Outdoors',
                'spacecraft' => 'Spacecraft',
                'sport-tek' => 'Sport-Tek',
                'stanley-stella' => 'Stanley/Stella',
                'tentree' => 'tentree',
                'the-north-face' => 'The North Face',
                'tommy-bahama' => 'Tommy Bahama',
                'travis-mathew' => 'TravisMathew',
                'volunteer-knitwear' => 'Volunteer Knitwear',
                'win' => 'Wink',
        ])->get($brand, 'none');
    }

}
