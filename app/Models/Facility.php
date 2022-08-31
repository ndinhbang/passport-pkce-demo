<?php

namespace App\Models;

use App\Traits\Model\CommonTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory, CommonTrait;

    protected $table = 'facilities';

    protected $fillable = [
        'code',
        'name',
    ];

    protected $hidden = [
        'id',
    ];


}
