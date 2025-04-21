<?php

namespace App\Http\Controllers\Central\Api\Shop;
use App\Http\Controllers\Controller;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CartController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function index(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters([])->get('http://localhost:4000/v1/carts');

        return response()->json([
            "carts" => $response->json(),
            "user" => $request->user(),
            "menu" => config('menu'),
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
    public function store(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/carts', [
                "user_id" => $id,
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
            ->get('http://localhost:4000/v1/carts/' . $id);
        return response()->json([
            "menu" => config('menu'),
            "list" => $response->json(),
        ]);
    }

    public function userCart(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->get('http://localhost:4000/v1/users/' . $id . '/cart');
        return response()->json([
            "menu" => config('menu'),
            "cart" => $response->json(),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function items($id)
    {
        $response = Http::retry(3, 100)
            ->get('http://localhost:4000/v1/carts/' . $id . '/items');
        return response()->json([
            "menu" => config('menu'),
            "status" => $response,
        ]);
    }

    public function addItems(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/carts/' . $id . '/items', [
                "product_id" => $request->product_id,
                "quantity" => $request->quantity,
                "size" => $request->size,
                "color" => $request->color,
                "price" => $request->price,
            ]);

        return response()->json([
            "response" => $response->json(),
            "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }

    public function edit($id)
    {
    }

    /**
     * @throws ConnectionException
     */
    public function update(Request $request, $id)
    {
        $response = Http::retry(3, 100)
            ->put('http://localhost:4000/v1/carts/' . $id . '/items');
        return response()->json([
            "menu" => config('menu'),
            "status" => $response,
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function destroy($id)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->delete('http://localhost:4000/v1/carts' . $id . '/items', [
            ]);

        return response()->json([
            "response" => $response->json(),
            // "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }
}
