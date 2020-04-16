<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Card;

class CardController extends Controller
{
    public function index()
    {
      $cards = Card::orderby('id', 'desc')->get();
      return $cards;
    }
}