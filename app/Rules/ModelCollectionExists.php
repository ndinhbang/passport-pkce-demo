<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

class ModelCollectionExists implements Rule
{
    /**
     * @var string
     */
    protected $model;

    protected string $column;

    /**
     * @var array
     */
    protected $keyPatterns = [];

    protected $wheres = [];

    protected $globalName;

    protected $isAllExists;

    protected $isCacheable;

    /**
     * {@inheritDoc}
     * @throws \Exception
     */
    public function __construct(
        $modelClass,
        $globalName,
        array $keyPatterns,
        $column = null,
        $isAllExists = true,
        $wheres = [],
        $isCacheable = true
    ) {
        if ( !is_subclass_of($modelClass, Model::class) ) {
            throw new \InvalidArgumentException(
                "{$modelClass} must be a subclass of Model"
            );
        }
        $this->model       = new $modelClass;
        $this->column      = $column ?? $this->model->getRouteKeyName();
        $this->globalName  = $globalName;
        $this->isAllExists  = (bool) $isAllExists;
        $this->isCacheable = (bool) $isCacheable;
        $this->keyPatterns = $keyPatterns;
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
        if ( !is_array($value) ) {
            throw new \InvalidArgumentException(
                "Validation value of {$attribute} must be an array"
            );
        }
        $ids = [];
        foreach ( $this->keyPatterns as $pattern ) {
            $ids = array_merge($ids, data_get($value, $pattern));
        }
        $originIdCount = count($ids);
        // Remove 'false' value from array
        $filteredIds = array_filter($ids);
        if ( $this->isAllExists && $originIdCount > count($filteredIds) ) {
            return false;
        }
        $queryIds = array_unique($filteredIds);
        // only check when have data
        if ( !empty($queryIds) ) {
            $queryIdCount = count($queryIds);
            $builder      = $this->model->whereIn($this->column, $queryIds);
            //  Additional wheres
            if ( !empty($this->wheres) ) {
                $builder->where($this->wheres);
            }
            if ( $this->isCacheable ) {
                $cacheFor = config('auth.cache.expires_in');
                if ( $cacheFor > 0 ) {
                    $builder->cacheFor($cacheFor);
                }
            }
            $records = $builder->get();
            if ( $queryIdCount > $records->count() ) {
                return false;
            }
            if ( $this->globalName ) {
                app()->instance($this->globalName, $records->keyBy($this->column));
            }
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
        return ":attribute chứa giá trị không hợp lệ";
    }
}
