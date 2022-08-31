<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

class ModelExists implements Rule
{
    protected Model $model;

    protected string $column;

    protected array $wheres = [];

    protected string $globalName;

    protected bool $isRequired;

    protected bool $isCacheable;

    protected $errorMessage = null;

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function __construct(
        $modelClass,
        $column = null,
        $globalName = null,
        $wheres = [],
        $isRequired = true,
        $isCacheable = true
    ) {
        if ( !is_subclass_of($modelClass, Model::class) ) {
            throw new \InvalidArgumentException(
                "{$modelClass} must be a subclass of Model"
            );
        }
        $this->model       = app()->make($modelClass);
        $this->column      = $column ?? $this->model->getRouteKeyName();
        $this->globalName  = $globalName;
        $this->isRequired  = (bool) $isRequired;
        $this->isCacheable = (bool) $isCacheable;
        $this->wheres      = $wheres;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     * @throws \Exception
     */
    public function passes($attribute, $value)
    {
        $builder = $this->model->where($this->column, $value);
        //  Additional wheres
        if ( !empty($this->wheres) ) {
            foreach ($this->wheres as $field => $val) {
                $builder->where($field, $val);
            }
        }
        if ( $this->isCacheable ) {
            $cacheFor = config('auth.cache.expires_in');
            if ( $cacheFor > 0 ) {
                $builder->cacheFor($cacheFor);
            }
        }
        $record = $builder->first();
        if ( is_null($record) && $this->isRequired ) {
            $this->errorMessage = ":attribute {$value} không tồn tại";
            return false;
        }
        if ( $this->globalName ) {
            app()->instance($this->globalName, $record);
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->errorMessage;
    }
}
