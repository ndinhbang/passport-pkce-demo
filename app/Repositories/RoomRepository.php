<?php

namespace App\Repositories;

class RoomRepository extends EloquentRepository
{
    protected string $modelClass = \App\Models\Room::class;
}
