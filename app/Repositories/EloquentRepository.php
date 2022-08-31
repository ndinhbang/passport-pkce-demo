<?php

namespace App\Repositories;

use App\Contracts\RepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

abstract class EloquentRepository implements RepositoryInterface
{
    protected string $modelClass;

    /**
     * @var Model|mixed
     */
    protected Model $model;

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function __construct()
    {
        $this->model = app()->make($this->modelClass);
    }

    public function all()
    {
        return $this->model->all();
    }

    public function show(Model $model)
    {

    }

    public function find(int $id)
    {
        return $this->model->find($id);
    }

    public function findByUnique(mixed $value, string $field = 'uuid')
    {
        return $this->model->where($field, $value)->first();
    }

    public function create(array $attributes)
    {
        $this->model->forceFill(
            Arr::only($attributes, $this->model->getFillable())
        )->save();
    }

    public function update(Model $model, array $attributes)
    {
        $model->forceFill(
            Arr::only($attributes, $model->getFillable())
        )->save();
    }

    public function destroy(Model $model)
    {
        $model->deleteOrFail();
    }

}
