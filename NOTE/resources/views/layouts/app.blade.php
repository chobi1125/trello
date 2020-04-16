<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <!-- sassのトランスパイル後のCSS読み込み -->
  <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
  <link href="/css/app.css" rel="stylesheet">
  <!-- どちらでも読み込める。 -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- Techpit SPA 7-2で実装 -->
</head>
<body>
<div id="app">
  <App />
</div>
</body>
<!-- <script src="{{ mix('js/app.js') }}"></script> -->
<script src="/js/app.js"></script>
<!-- どちらでも読み込める -->
