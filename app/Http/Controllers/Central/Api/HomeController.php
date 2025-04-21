<?php

namespace App\Http\Controllers\Central\Api\Shop\Central\Api;

use App\Http\Controllers\Central\Api\Shop\Controller;
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


        return response()->json([
            "name" => "home",
            "title" => $page->title,
            "description" => $page->description,
            "carousel" => $page?->sections->where('component', 'default'),
            'sections' => $page->sections->where('component','!=', 'default'),
            "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }
}
