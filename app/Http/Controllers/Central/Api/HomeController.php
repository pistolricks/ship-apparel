<?php

namespace App\Http\Controllers\Central\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Page;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {

        $page = Page::query()->where('name', 'home')->with('sections.contents')->first();


        $page?->sections?->each(function($section) {
           $section?->contents->each(function($content) {
               $content->src = $content?->getMedia('images')[0]?->getUrl();
               $mediaItems = $content?->getMedia('images');
               $content->images = $mediaItems->map(function($m) {
                 return $m->getUrl();
               });
           });
        });





        return response()->json([
            "menu" => config('menu'),
            "carousel" => $page?->sections->where('name', 'main_carousel')->first(),
            'page' => $page,
            "user" => $request->user(),
        ]);
    }
}
