<?php
// Route::get('/','ListingsController@index');
// Route::get('/login','ListingsController@index');
Route::get('/',function(){
  return view('index');
});
Route::get('/login',function(){
  return view('index');
});
Route::get('/register',function(){
  return view('index');
});
Route::post('/register', 'Auth\RegisterController@register');
Route::get('/login',function(){
  return view('index');
});
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');