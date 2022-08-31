<?php

if (!function_exists('nanoId')) {
    function nanoId($size = 21, $alphabet = null): string
    {
        $client = new \Hidehalo\Nanoid\Client();
        if (is_null($alphabet)) {
            return $client->generateId($size, \Hidehalo\Nanoid\Client::MODE_DYNAMIC);
        }
        return $client->formattedId($alphabet, $size);
    }
}
