<?php

namespace App\Http\Controllers\Central\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

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
