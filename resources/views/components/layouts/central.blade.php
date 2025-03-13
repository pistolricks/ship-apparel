<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'CustomInk and Thread') }}</title>

    <!-- Scripts -->
    @vite('resources/js/app.js')

    <!-- Styles -->
    @vite('resources/css/app.css')

    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</head>
<body class="min-h-screen h-screen flex flex-col antialiased font-sans">
    <header class="bg-gray-900 py-2">
        <nav class="container mx-auto flex justify-between">
            <div>
                <a href="/" class="block py-2 px-4 text-white font-medium">
                    Home
                </a>
            </div>
            <div class="flex">
                <x-button as="a" href="{{ route('central.tenants.login') }}">Login</x-button>
                <x-button class="ml-2" as="a" href="{{ route('central.tenants.register') }}">Register</x-button>
            </div>
        </nav>
    </header>
    <div class="flex-1 flex flex-row overflow-y-hidden">
            <main class="flex-1 bg-indigo-100 overflow-y-auto">
                <div class="max-w-7xl sm:px-6 lg:px-8">
                    {{ $slot }}
                </div>
            </main>
    </div>
    <footer class="bg-gray-100 h-16">

    </footer>
</body>
</html>
