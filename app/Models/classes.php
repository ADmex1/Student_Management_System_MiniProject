<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class classes extends Model
{
    /** @use HasFactory<\Database\Factories\ClassesFactory> */
    use HasFactory;
    protected $fillable = [
        'Class Name',
    ];
    public function sections(){
        return $this->hasMany(section::class, 'class_id');

    }
    public function students(){
        return $this->hasMany(Classes::class, 'class_id');
    }
}
