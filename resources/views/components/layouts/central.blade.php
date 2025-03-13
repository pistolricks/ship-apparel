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
    <script defer src="https://unpkg.com/@alpinejs/ui@3.14.9/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/@alpinejs/focus@3.14.9/dist/cdn.min.js"></script>
    <script defer src="https://unpkg.com/alpinejs@3.14.9/dist/cdn.min.js"></script>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</head>
<body class="min-h-screen h-screen flex flex-col antialiased font-sans">
    <header class="bg-gray-200 py-2">
        <nav class="@container mx-auto px-2 flex justify-between items-center">

                <a href="/" class="block  text-white font-medium">
                    <img class="h-10 w-full" src="/logo.svg" alt="logo">

                </a>
        </nav>
    </header>
    <div class="flex-1 flex flex-row overflow-y-hidden">
            <main class="@container flex-1 bg-gray-100 overflow-y-auto">
                <div class="max-w-7xl  sm:px-6 lg:px-8">
                    {{ $slot }}
                </div>
            </main>
    </div>
    <footer class="bg-gray-100">

    </footer>
</body>
</html>
