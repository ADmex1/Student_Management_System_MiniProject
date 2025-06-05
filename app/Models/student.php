<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'student_number',
        'class_id',
        'section_id'
    ];

    public function class(){
        return $this->belongsTo(classes::class, 'class_id');
    }
    public function section(){
        return $this->belongsTo(section::class, 'section_id');
    }
}
