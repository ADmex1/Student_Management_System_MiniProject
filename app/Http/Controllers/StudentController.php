<?php

namespace App\Http\Controllers;
use App\Models\Student;
use App\Http\Resources\StudentResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(){
     $students = \App\Models\Student::with(['class', 'section'])->get();
        return Inertia::render('Students/index', [
        'students' => $students,
    ]);
    }
}
