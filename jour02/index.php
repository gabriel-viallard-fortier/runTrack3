<?php
$dirFolders = glob("*", GLOB_ONLYDIR );
?>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <ul> 
    <?php foreach ( $dirFolders as $folder ): ?>
        <?php
        if (!file_exists( $folder . "/index.php" &&
            !file_exists( $folder . "/index.html")) ) {
          if (str_starts_with(strtolower($folder), "runtrack") ||
          str_starts_with(strtolower($folder), "jour")) {
            copy( "index.php", "$folder/index.php");
            copy ( "index.css", "$folder/index.css");
          }
        }
        ?>
        
        <li>
          <a href=<?= "./$folder"?>><?= $folder ?></a>
        </li>
      <?php endforeach; ?>
    </ul>
  </body>
</html>
