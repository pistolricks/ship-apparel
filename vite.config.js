import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths'
import {setupPlugins} from '@responsive-image/vite-plugin';
import solidStyled from "unplugin-solid-styled";


export default defineConfig({
    plugins: [
        solidStyled.vite({
            filter: {
                include: "resources/src/**/*.tsx",
                exclude: "node_modules/**/*.{ts,js}"
            }
        }),
        setupPlugins({
            include: /^[^?]+\.jpg\?.*responsive.*$/,
        }),
        solidPlugin({}),

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
