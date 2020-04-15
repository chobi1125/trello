<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function () {
    Route::get('list', 'Api\ListController@index');
  });
//   Route::groupメソッドの最初の引数には、共通の属性を配列で指定するという 意味です。ここではRoute::group(['middleware' => ['api']] のメソッド配下で定義されたルーティングは全てapi middlewareを介します。