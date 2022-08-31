import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({command, mode, ssrBuild}) => ({
    plugins: [
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'resources/js',
            filename: 'service-worker.js',
            registerType: 'autoUpdate',
            injectManifest: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
            },
            includeAssets: ['favicon.ico'],
            manifest: {
                name: "Elearning",
                short_name: "Elearning",
                theme_color: "#50e3c2",
                background_color: "#fff",
                display: "standalone",
                orientation: "any",
                lang: "vi-VN",
                icons: [
                    {
                        src: "/images/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png"
                    },
                    {
                        src: "/images/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            },
            // injectRegister: 'auto',
            // workbox: {
            //     globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
            // },
            // enable the service worker on development, PWA will not be registered, only the service worker logic
            devOptions: {
                enabled: true
            }
        }),
        laravel({
            input: [
                'resources/js/admin/main.jsx',
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        }
    },
    server: {
        origin: 'https://auth.learn.test:5173', // https://vitejs.dev/config/#server-origin
        host: 'localhost',
        strictPort: true,
        port: 5173,
        https: {
            key: readFileSync('C:\\laragon\\etc\\ssl\\laragon.key'),
            cert: readFileSync('C:\\laragon\\etc\\ssl\\laragon.crt'),
        },
    },
}));
