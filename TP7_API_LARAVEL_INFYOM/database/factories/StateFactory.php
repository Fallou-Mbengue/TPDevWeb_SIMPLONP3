<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\State;
use Faker\Generator as Faker;

$factory->define(State::class, function (Faker $faker) {

    return [
        'nom' => $faker->word,
        'description' => $faker->word,
        'deleted_at' => $faker->date('Y-m-d H:i:s')
    ];
});
