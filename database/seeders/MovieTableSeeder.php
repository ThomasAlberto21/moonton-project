<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Avangers Infinty Wars',
                'slug' => 'avangers-infinity-wars',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/6ZfuNTqbHE8',
                'thumbnail' => 'https://wallpaperaccess.com/full/95489.jpg',
                'rating' => 4.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'Batman Vs Superman',
                'slug' => 'batman-vs-superman',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/0WWzgGyAH6Y',
                'thumbnail' => 'https://images3.alphacoders.com/606/606650.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Spiderman No Way Home',
                'slug' => 'spiderman-no-way-home',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/JfVOs4VSpmA',
                'thumbnail' => 'https://pbs.twimg.com/media/FEP_svNWQAgh8qH?format=jpg&name=900x900',
                'rating' => 4.2,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
