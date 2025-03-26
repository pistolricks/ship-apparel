<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return Page::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['required'],
            'description' => ['nullable'],
            'authorization' => ['nullable', 'boolean'],
        ]);

        return Page::create($data);
    }

    public function show(Page $page)
    {
        return $page;
    }

    public function update(Request $request, Page $page)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['required'],
            'description' => ['nullable'],
            'authorization' => ['nullable', 'boolean'],
        ]);

        $page->update($data);

        return $page;
    }

    public function destroy(Page $page)
    {
        $page->delete();

        return response()->json();
    }
}
