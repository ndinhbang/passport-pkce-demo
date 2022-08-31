<?php

namespace App\Http\Filters\Base;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class BasePipe
{
    protected Request $request;
    protected Builder $query;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    abstract protected function apply(): static;

    abstract public function handle(Builder $query, \Closure $next);

    protected function setQuery(Builder $query): static
    {
        $this->query = $query;
        return $this;
    }

}
