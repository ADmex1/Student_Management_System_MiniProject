<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class userseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users =[
         'name' => 'admin',
            'email' => 'testificate@gmail.com',
            'password' => bcrypt('password'),
            'created_at' => now(),

        ];
        User::insert($users);
    }
}
