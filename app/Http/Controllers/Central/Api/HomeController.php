<?php

namespace App\Http\Controllers\Central\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'X-Auth-Email' => 'erikwsmith1982@gmail.com',
            'X-Auth-Key' => 'ZmlSjHXnobZfW3O0iu-fxLG-lM-rkQuzu9J27vkT',
        ])->post('https://api.cloudflare.com/client/v4/accounts/1d255d4f4a8aa1ef689a5286f80516cc/images/v1', [
            'url' => 'https://cdnm.sanmar.com/imglib/mresjpg/2015/f14/64400_cherryred_flat_back.jpg',
            'id' => '2015/f14/64400_cherryred_flat_back.jpg'
        ]);

        return response()->json([
            "menu" => config('menu'),
            "user" => $request->user(),
            "response" => $response,
        ]);
    }
}
