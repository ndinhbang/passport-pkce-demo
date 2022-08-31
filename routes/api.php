<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user-info', function (Request $request) {
    return $request->user();
});

Route::prefix("facilities")->group(function(){
    Route::get('/', [\App\Http\Controllers\FacilityController::class, 'index'])->name('facilities.index');
    Route::post('/', [\App\Http\Controllers\FacilityController::class, 'store'])->name('facilities.store');
    Route::get('/{facility}', [\App\Http\Controllers\FacilityController::class, 'show'])->name('facilities.show');
    Route::put('/{facility}', [\App\Http\Controllers\FacilityController::class, 'update'])->name('facilities.update');
    Route::delete('/{facility}', [\App\Http\Controllers\FacilityController::class, 'destroy'])->name('facilities.destroy');
});

Route::prefix("rooms")->group(function(){
    Route::get('/', [\App\Http\Controllers\RoomController::class, 'index'])->name('rooms.index');
    Route::post('/', [\App\Http\Controllers\RoomController::class, 'store'])->name('rooms.store');
    Route::get('/{room}', [\App\Http\Controllers\RoomController::class, 'show'])->name('rooms.show');
    Route::put('/{room}', [\App\Http\Controllers\RoomController::class, 'update'])->name('rooms.update');
    Route::delete('/{room}', [\App\Http\Controllers\RoomController::class, 'destroy'])->name('rooms.destroy');
});
