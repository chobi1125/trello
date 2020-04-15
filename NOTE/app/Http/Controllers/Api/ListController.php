<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Listing;

class ListController extends Controller
{
    public function index()
    {
      $listings = Listing::orderby('id', 'desc')->get();
    //   ::orderby('id', 'desc')->get()は指定したモデルからid降順で全てのデータを取得するという意味
    //  LaravelではControllerで変数を返却すると自動的にJSONに変換して表示を行う
      return $listings;
    }
}