<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'user_id' => 1,
            'title' => 'Welcome to CustomInk and Thread!',
            'body' => "Take a look around and see what we've been up to",
        ]);
    }
}
