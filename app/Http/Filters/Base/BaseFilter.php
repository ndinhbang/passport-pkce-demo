<?php

namespace App\Http\Filters\Base;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class BaseFilter extends BasePipe
{
    protected ?string $field = null;
    protected ?string $dbColumn = null;

    /**
     * @param Request|null $request
     */
    public function __construct(?Request $request = null)
    {
        parent::__construct($request ?? request());
    }

    public function handle(Builder $query, \Closure $next)
    {
        $this->setQuery($query);

        if (!$this->request->has($this->field)) {
            return $next($this->query);
        }

        $this->apply();

        return $next($this->query);
    }

    protected function getValue(): mixed
    {
        return $this->request->input($this->field);
    }

    public function onColumn(string $dbColumn): static
    {
        $this->dbColumn = $dbColumn;
        return $this;
    }

    protected function getDbColumn(): ?string
    {
        return !$this->dbColumn
            ? $this->getDbColumnFromField()
            : $this->dbColumn;
    }

    protected function getDbColumnFromField(): string
    {
        return Str::afterLast($this->field, '.');
    }

    public function setField(?string $field): static
    {
        $this->field = $field;
        return $this;
    }
}
