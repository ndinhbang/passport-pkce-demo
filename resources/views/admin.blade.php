<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>{{ config('app.name', 'Laravel') }}</title>
        <meta name="description" content="My Awesome App description">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <!-- PWA -->
        <link rel="manifest" href="/build/manifest.webmanifest">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Elearning">
        <meta name="apple-mobile-web-app-title" content="Elearning">
        <meta name="theme-color" content="#ebb734">
        <meta name="msapplication-navbutton-color" content="#ebb734">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="msapplication-starturl" content="/">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Scripts -->
        @viteReactRefresh
        @vite('resources/js/admin/main.jsx')
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
