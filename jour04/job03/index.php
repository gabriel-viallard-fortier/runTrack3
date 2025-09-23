<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>JS : Jour04/Job03</h1>
    <p id="para"></p>
    <form id="form" method="get">
        <fieldset>
            <legend><h1>Formulaire de tri</h1></legend>
            <h2>pokemon.json</h2>
            <label for="id">ID</label>
            <input type="text" name="id" id="id">
            <label for="name">Nom</label>
            <input type="text" id="name">
            <label for="type">Type</label>
            <select id="type">
                <option value="" selected>Choisissez un type de pokemon</option>
            </select>
        </fieldset>
        <input type="submit">Filtrer</input>
    </form>
    <script src="script.js" async></script>
</body>

</html>