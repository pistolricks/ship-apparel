<?php

namespace App\Http\Controllers\Central\Api\Shop\Central\Api\Shop;

use App\Http\Controllers\Central\Api\Shop\Controller;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function index(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->get('http://localhost:4000/v1/users/' . $id . '/orders');
        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function create()
    {

    }

    /**
     * @throws ConnectionException
     */
    public function store(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/orders', [
                "cart_id" => $request->cart_id,
                "shipping_address_line1" => $request->shipping_address_line1,
                "shipping_address_line2" => $request->shipping_address_line2,
                "shipping_city" => $request->shipping_city,
                "shipping_state" => $request->shipping_state,
                "shipping_postal_code" => $request->shipping_postal_code,
                "shipping_country_code" => $request->shipping_country_code,
                "shipping_method" => $request->shipping_method,
                "shipping_cost" => $request->shipping_cost,
            ]);

        return response()->json([
            "response" => $response->json(),
            "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function show(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->get('http://localhost:4000/v1/orders/' . $id);
        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function status(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->put('http://localhost:4000/v1/orders/' . $id . '/status', [
                'status' => $request->status,
            ]);
        return response()->json([
            "menu" => config('menu'),
            "response" => $response,
        ]);
    }

    public function track(Request $request, $id)
    {
        $response = Http::retry(3, 100)
                ->get('http://localhost:4000/v1/orders/' . $id . '/track');
        return response()->json([
            "menu" => config('menu'),
            "status" => $response,
        ]);
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
