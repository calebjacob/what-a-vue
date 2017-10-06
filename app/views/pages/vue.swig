<!DOCTYPE html>
  <head>
    <title>What a Vue!</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0">

    <link rel="stylesheet" type="text/css" href="/dist/styles-{{package.version}}.css" />

    <link rel="icon" href="/images/favicon.png">
  </head>

  <body>
    <div id="app">
      <main-layout>
        <router-view></router-view>
      </main-layout>
    </div>

    <script type="text/javascript" src="/dist/scripts-{{package.version}}.js"></script>
  </body>
</html>
