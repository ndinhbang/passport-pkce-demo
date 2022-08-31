<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

interface RepositoryInterface
{
    public function all();
    public function find(int $id);
    public function create(array $attributes);
    public function update(Model $model, array $attributes);
    public function destroy(Model $model);
}
