<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.paneflow.com/aquamarine-spoonbill-331.css?v=m9ucoyz6" rel="stylesheet">

    <title>{{ config('app.name', 'CustomInk and Thread') }}</title>
    <title>CustomInk and Thread</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>

@vite('resources/src/index.tsx')
<script src="https://cdn.paneflow.com/aquamarine-spoonbill-331.js?v=m9u9nckq"></script>
</body>
</html>
