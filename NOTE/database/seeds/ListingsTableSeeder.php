<?php

use Illuminate\Database\Seeder;

class ListingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
public function run()
{
    DB::table('listings')->truncate();
    // テーブルのデータを全て削除するコード

    DB::table('listings')->insert([
        [
            'title' => 'list1',
            'user_id' => '1',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'list2',
            'user_id' => '1',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);
}
}
