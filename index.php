<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="drugs.js"></script>
  </head>
  <body>
  
  <!-- randomly displayed image. -->
  <img src=".../images/image_<?php $random = rand(1,n); echo $random; ?>.png" alt="[ Random Image ]" height="500" width="500" /><br /><br />
  
  <!-- show stats button -->
  <a href="stats.php">Show Stats</a>
  </body>
</html>