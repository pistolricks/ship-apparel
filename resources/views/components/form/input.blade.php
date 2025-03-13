@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => "px-3 py-2 bg-white border border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 placeholder-gray-400 rounded-md shadow-sm mt-1 block w-full"]) !!}>

