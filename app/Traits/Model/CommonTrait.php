<?php

namespace App\Traits\Model;

use Illuminate\Database\Eloquent\Model;

trait CommonTrait
{
    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::creating(function (Model $model) {
            $model->uuid = nanoId();
            $model->created_by = auth()->user()->id ?? 0;
            $model->updated_by = auth()->user()->id ?? 0;
        });

        static::updating(function ($model) {
            $model->updated_by = auth()->user()->id ?? 0;
        });
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    /**
     * Retrieve the model for a bound value.
     *
     * @param  mixed  $value
     * @param  string|null  $field
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function resolveRouteBinding($value, $field = null): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->resolveRouteBindingQuery($this, $value, $field)->first();
    }

    public function creator()
    {
        return $this->belongsTo(\App\Models\User::class, 'created_by');
    }

    public function editor()
    {
        return $this->belongsTo(\App\Models\User::class, 'updated_by');
    }
}
