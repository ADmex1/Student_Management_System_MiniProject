<?php

namespace Database\Seeders;
use App\Models\Classes;
use App\Models\Section;
use App\Models\Students;
use Database\Factories\ClassesFactory;
use Database\Factories\SectionFactory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            userseeder::class,
            ClassesSeeder::class,
            StudentSeeder::class,
        ]);
    }
}
