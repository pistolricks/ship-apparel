<?php

namespace App\Http\Controllers\Central\Api\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ShippingController extends Controller
{
    /**
     * @throws ConnectionException
     */
    public function index()
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters([])->get('http://localhost:4000/v1/shipping/shipments');

        return response()->json([
            "orders" => $response->json(),
            // "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function token(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/shipping/token', []);

        return response()->json([
            "response" => $response->json(),
            "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function store(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/shipping/shipments', [
                'request' => [
                    'sub_version' => $request->sub_version,
                    'request_option' => $request->request_option,
                    'transaction_reference' => $request->transaction_reference,
                ],
                'shipment' => [
                    'description' => $request->description,
                    'shipper' => $request->shipper,
                    'ship_to' => $request->ship_to,
                    'ship_from' => $request->ship_from,
                    'payment_information' => $request->payment_information,
                ],
                'service' => [
                    'code' => $request->code,
                    'description' => $request->description,
                ],
                'package' => [
                    'description' => $request->description,
                    'packaging' => $request->packaging,
                    'dimensions' => $request->dimensions,
                    'package_weight' => $request->package_weight,
                ]
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
    public function validateAddress(Request $request)
    {
        $response = Http::retry(3, 100)
            ->withHeaders([

            ])
            ->post('http://localhost:4000/v1/shipping/validate-address', [
                'address_line_1' => $request->address_line_1,
                'address_line_2' => $request->address_line_2,
                'city' => $request->city,
                'state_prov' => $request->state_prov,
                'postal_code' => $request->postal_code,
                'country_code' => $request->country_code,
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
    public function show(Request $request, $tracking_number)
    {
        $response = Http::retry(3, 100)
            ->withQueryParameters([])->get('http://localhost:4000/v1/shipping/shipments/' . $tracking_number);

        return response()->json([
            "shipment" => $response->json(),
            // "user" => $request->user(),
            "menu" => config('menu'),
        ]);
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
