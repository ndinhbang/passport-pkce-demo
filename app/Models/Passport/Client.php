<?php

namespace App\Models\Passport;

use Laravel\Passport\Client as PassportClient;

/**
 * @property mixed $redirect
 */
class Client extends PassportClient
{
    /**
     * Determine if the client should skip the authorization prompt.
     *
     * @return bool
     */
    public function skipsAuthorization(): bool
    {
        if ($this->firstParty()) {
            return true;
        }
        // if the domain of redirect in trusted domains, then skip authorization prompt
        $clientHostName = parse_url($this->redirect, PHP_URL_HOST);
        $serverHostName = parse_url(config('app.url'), PHP_URL_HOST);
        return $clientHostName === $serverHostName;
    }
}
