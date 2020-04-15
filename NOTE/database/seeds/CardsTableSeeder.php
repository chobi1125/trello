<?php

use Illuminate\Database\Seeder;

class CardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cards')->truncate();
        // テーブルのデータを全て削除するコード
    
        DB::table('cards')->insert([
            [
                'title' => 'card1',
                'status' => '未着手',
                'listing_id' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'card2',
                'status' => '完了',
                'listing_id' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
