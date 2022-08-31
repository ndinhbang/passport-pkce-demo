<?php

namespace App\Http\Filters\Base;

use Illuminate\Database\Eloquent\Builder;

interface FilterContract
{
    public function scopeFilter(Builder $query, array $criteria = null): Builder;

    public function filterCriteria(): array;
}
