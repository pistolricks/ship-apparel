<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['nullable'],
            'description' => ['nullable'],
            'data' => ['nullable'],
            'start' => ['nullable', 'date'],
            'end' => ['nullable', 'date'],
            'status' => ['required'],
        ]);

        return Project::create($data);
    }

    public function show(Project $project)
    {
        return $project;
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'name' => ['required'],
            'title' => ['nullable'],
            'description' => ['nullable'],
            'data' => ['nullable'],
            'start' => ['nullable', 'date'],
            'end' => ['nullable', 'date'],
            'status' => ['required'],
        ]);

        $project->update($data);

        return $project;
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json();
    }
}
