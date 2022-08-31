<?php

namespace App\Custom\Passport\Bridge;

use League\OAuth2\Server\Entities\ClientEntityInterface;

class AccessTokenRepository extends \Laravel\Passport\Bridge\AccessTokenRepository
{
    /**
     * {@inheritdoc}
     */
    public function getNewToken(ClientEntityInterface $clientEntity, array $scopes, $userIdentifier = null)
    {
        return new AccessToken($userIdentifier, $scopes, $clientEntity);
    }
}