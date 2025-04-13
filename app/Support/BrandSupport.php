<?php

namespace App\Support;


readonly class BrandSupport
{


    public static function lookupBrand(string $brand): string
    {
        return collect([
            'a4' => 'a4_banner.jpg',
            'allmade' => 'allmade_banner.jpg',
            'american+apparel' => 'american_apparel_banner.jpg',
            'bella+canvas' => 'bella_canvas_banner.jpg',
            'brooks+brothers' => 'brooks_brothers_banner.jpg',
            'carhartt' => 'carhartt_banner.jpg',
            'champion' => 'champion_banner.jpg',
            'comfort+colors' => 'comfort_colors_banner.jpg',
            'cornerstone' => 'cornerstone_banner.jpg',
            'cotopaxi' => 'cotopaxi_banner.jpg',
            'district' => 'district_banner.jpg',
            'eddie+bauer' => 'eddie_bauer_banner.jpg',
            'gildan' => 'gildan_banner.jpg',
            'hanes' => 'hanes_banner.jpg',
            'jerzees' => 'jerzees_banner.jpg',
            'mercer+mettle' => 'mercer_mettle_banner.jpg',
            'new+era' => 'new_era_banner.jpg',
            'next+level+apparel' => 'next_level_apparel.jpg',
            'nike' => 'nike_banner.jpg',
            'ogio' => 'ogio_banner.jpg',
            'outdoor+research' => 'outdoor_research_banner.jpg',
            'port+&+company' => 'port_authority_banner.jpg',
            'port+authority' => 'port_company.jpg',
            'rabbit+skins' => 'rabbit_skins_banner.jpg',
            'red+kap' => 'red_kap_banner.jpg',
            'russell+outdoors' => 'russell_outdoors_banner.jpg',
            'spacecraft' => 'spacecraft_banner.jpg',
            'sport-tek' => 'sport_tek_banner.jpg',
            'stanley/stella' => 'stanley_stella_banner.jpg',
            'tentree' => 'tentree_banner.png',
            'the+north+face' => 'the_north_face_banner.jpg',
            'tommy+bahama' => 'tommy_bahama_banner.jpg',
            'travismathew' => 'travis_mathew_banner.jpg',
            'volunteer+knitwear' => 'volunteer_knitwear_banner.jpg',
            'wink' => 'wink_banner.jpg',
        ])->get($brand, 'Gildan');
    }

}
