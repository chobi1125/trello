<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <!-- sassのトランスパイル後のCSS読み込み -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
  <p><example /></p>
  <App />
</div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
