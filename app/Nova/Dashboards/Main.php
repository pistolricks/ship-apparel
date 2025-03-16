<?php

namespace App\Nova\Dashboards;

use DigitalCreative\NovaDashboard\Card\NovaDashboard;
use DigitalCreative\NovaDashboard\Card\View;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Dashboards\Main as Dashboard;
use Orion\NovaGreeter\GreeterCard;

class Main extends Dashboard
{
    /**
     * Get the cards for the dashboard.
     *
     * @return array
     */
    public function cards()
    {
        return [

            NovaDashboard::make()
                ->addView('Website Performance', function (View $view) {
                    return $view
                        ->icon('window')
                        ->addWidgets([

                        ])
                        ->addFilters([

                        ]);
                }),
            GreeterCard::make()
                ->user(name: 'John Doe', title: 'The King in the North')
                ->avatar(url: 'https://ui-avatars.com/api/?size=300&color=7F9CF5&background=EBF4FF&name=John+Doe'),

        ];
    }
}
