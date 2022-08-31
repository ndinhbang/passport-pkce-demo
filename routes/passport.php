<?php

use Illuminate\Support\Facades\Route;

Route::prefix('oauth')
    ->group(function () {
        // Register the routes needed for authorization.
        Route::group(['middleware' => ['web', 'auth']], function () {
            Route::get('/authorize', [\Laravel\Passport\Http\Controllers\AuthorizationController::class, 'authorize'])
                ->name('passport.authorizations.authorize');
            Route::post('/authorize', [\Laravel\Passport\Http\Controllers\ApproveAuthorizationController::class, 'approve'])
                ->name('passport.authorizations.approve');
            Route::delete('/authorize', [\Laravel\Passport\Http\Controllers\DenyAuthorizationController::class, 'deny'])
                ->name('passport.authorizations.deny');
        });

        // Register the routes for retrieving and issuing access tokens.
        Route::post('/token', [\Laravel\Passport\Http\Controllers\AccessTokenController::class, 'issueToken'])
            ->name('passport.token')
            ->middleware('throttle');

        Route::group(['middleware' => ['web', 'auth']], function () {
            Route::get('/tokens', [\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController::class, 'forUser'])
                ->name('passport.tokens.index');
            Route::delete('/tokens/{token_id}', [\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController::class, 'destroy'])
                ->name('passport.tokens.destroy');
        });

        // Register the routes needed for refreshing transient tokens.
        Route::post('/token/refresh', [\Laravel\Passport\Http\Controllers\TransientTokenController::class, 'refresh'])
            ->name('passport.token.refresh')
            ->middleware(['web', 'auth']);

        // Register the routes needed for managing clients.
        Route::group(['middleware' => ['web', 'auth']], function () {
            Route::get('/clients', [\Laravel\Passport\Http\Controllers\ClientController::class, 'forUser'])
                ->name('passport.clients.index');
            Route::post('/clients', [\Laravel\Passport\Http\Controllers\ClientController::class, 'store'])
                ->name('passport.clients.store');
            Route::put('/clients/{client_id}', [\Laravel\Passport\Http\Controllers\ClientController::class, 'update'])
                ->name('passport.clients.update');
            Route::delete('/clients/{client_id}', [\Laravel\Passport\Http\Controllers\ClientController::class, 'destroy'])
                ->name('passport.clients.destroy');
        });

        // Register the routes needed for managing personal access tokens.
        Route::group(['middleware' => ['web', 'auth']], function () {
            Route::get('/scopes', [\Laravel\Passport\Http\Controllers\ScopeController::class, 'all'])
                ->name('passport.scopes.index');
            Route::get('/personal-access-tokens', [\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class, 'forUser'])
                ->name('passport.personal.tokens.index');
            Route::post('/personal-access-tokens', [\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class, 'store'])
                ->name('passport.personal.tokens.store');
            Route::delete('/personal-access-tokens/{token_id}', [\Laravel\Passport\Http\Controllers\PersonalAccessTokenController::class, 'destroy'])
                ->name('passport.personal.tokens.destroy');
        });
    });