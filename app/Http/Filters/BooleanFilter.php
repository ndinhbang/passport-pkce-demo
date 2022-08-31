<?php

namespace App\Http\Filters;

use App\Http\Filters\Base\BaseFilter;
use Illuminate\Http\Request;

class BooleanFilter extends BaseFilter
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
        if ( !($values = $this->getValue())
            || is_array($values) ) {
            return $this;
        }

        $this->query->where($this->getDbColumn(), (bool) $values);
        return $this;
    }
}
