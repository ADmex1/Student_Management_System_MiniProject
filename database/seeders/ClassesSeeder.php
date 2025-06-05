<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\Section;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Classes::factory()
            ->count(10)
            ->sequence(
                fn ($sequence) => ['Class Name' => 'Class ' . $sequence->index + 1]
            )
            ->has(
        Section::factory()
            ->count(3)
            ->state(
            new sequence(
                [ 'Section Name' => 'A'],
                [ 'Section Name' => 'B'],
                [ 'Section Name' => 'C']
            )
            )
            ->has(
                Student::factory()
                    ->count(30)
                    ->state(
                        function (array $attributes, Section $section){
                            return[
                                'class_id' => $section->class_id,
                            ];
                        }
                    )
            )
        )
            ->create();
    }
}
