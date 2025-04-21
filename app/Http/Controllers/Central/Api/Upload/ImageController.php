<?php

namespace App\Http\Controllers\Central\Api\Shop\Central\Api\Upload;

use App\Actions\images\ImageUploadAction;
use App\Http\Controllers\Central\Api\Shop\Controller;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function __construct(
        private readonly ImageUploadAction $imageUploadAction
    )
    {}

    public function index()
    {

    }

    /**
     * @throws ConnectionException
     */
    public function create(Request $request)
    {
        $this->imageUploadAction->onQueue()->execute($request->id, $request->url);


    }

    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
