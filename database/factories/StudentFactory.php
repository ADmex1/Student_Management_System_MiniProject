<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'student_number' => fake()->unique()->numerify('S#####'),
            'class_id' => fake()->numberBetween(1, 10), 
            'section_id' => fake()->numberBetween(1, 5), 
        ];
    }
}
