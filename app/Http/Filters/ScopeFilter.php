<?php

namespace App\Http\Filters;

use App\Http\Filters\Base\BaseFilter;
use Illuminate\Http\Request;

class ScopeFilter extends BaseFilter
{
    /**
     * @param string $field
     * @param string|null $dbColumn
     * @param Request|null $request
     */
    public function __construct(string $field, ?string $dbColumn = null, ?Request $request = null)
    {
        parent::__construct($request);

        $this->field    = $field;
        $this->dbColumn = $dbColumn;
    }

    protected function apply(): static
    {
        if ( !($values = $this->getValue())) {
            return $this;
        }

        !is_array($values)
            ? $this->query->where($this->getDbColumn(), $values)
            : $this->query->whereIn($this->getDbColumn(), $values);

        return $this;
    }
}
