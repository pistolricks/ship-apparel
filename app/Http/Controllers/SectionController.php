<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index()
    {
        return Section::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['nullable'],
            'href' => ['required'],
            'class' => ['nullable'],
            'data' => ['nullable'],
            'active' => ['nullable', 'boolean'],
            'status' => ['required'],
        ]);

        return Section::create($data);
    }

    public function show(Section $section)
    {
        return $section;
    }

    public function update(Request $request, Section $section)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['nullable'],
            'href' => ['required'],
            'class' => ['nullable'],
            'data' => ['nullable'],
            'active' => ['nullable', 'boolean'],
            'status' => ['required'],
        ]);

        $section->update($data);

        return $section;
    }

    public function destroy(Section $section)
    {
        $section->delete();

        return response()->json();
    }
}
