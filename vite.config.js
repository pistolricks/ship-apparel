import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
    plugins: [
        solidPlugin(),
        tailwindcss(),
        tsconfigPaths(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/src/index.tsx',
            ],
            refresh: true,
        }),
    ],
});
