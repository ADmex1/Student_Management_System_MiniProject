<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class section extends Model
{
    /** @use HasFactory<\Database\Factories\SectionFactory> */
    use HasFactory;
    protected $fillable = [
        'section_name',
        'class_id'
    ];

    public function class(){
        return $this->belongsTo(classes::class, 'class_id');
    }
    public function students(){
        return $this->belongsTo(student::class, 'section_id');
    }
}
