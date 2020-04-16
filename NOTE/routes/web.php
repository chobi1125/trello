<?php
// Route::get('/','ListingsController@index');
// Route::get('/login','ListingsController@index');
Route::get('/',function(){
  return view('index');
});
