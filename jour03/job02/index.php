<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>Mélangez l'arc-en-ciel puis essayez de reconstituer le puzzle ici en cliquant dans le bon ordre sur les pièces</p>

    <div class="buttons">
        <button id="shake">Mélanger l'arc-en-ciel</button>
        <button id="refresh">Recommencer</button>
    </div>
    <div id="game" class="game-board">
        <img id="game1" src="" alt="">
        <img id="game2" src="" alt="">
        <img id="game3" src="" alt="">
        <img id="game4" src="" alt="">
        <img id="game5" src="" alt="">
        <img id="game6" src="" alt="">
    </div>
    <div id="puzzle" class="puzzle">
        <img id="1">
        <img id="2">
        <img id="3">
        <img id="4">
        <img id="5">
        <img id="6">
    </div>
    <div>
        <h4 id='perdu' hidden class="red">Vous avez perdu !</h4>
        <h4 id="gagne" hidden class="green">Vous avez gagné !</h4>
    </div>
</body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="script.js"></script>