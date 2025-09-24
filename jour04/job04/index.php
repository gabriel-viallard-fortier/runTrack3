<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>JavaScript: Jour04/Job04</h1>
    <div class="exercice">
        <p>Créez une base de données “utilisateurs” contenant une table “utilisateurs” et ayant
            comme champs “id”, “nom”, “prenom” et “email”.<br>
            Ajoutez des utilisateurs directement dans phpmyadmin.<br>
            Créez une page users.php qui se connecte à la base de données, récupère l’ensemble
        des utilisateurs et affiche ces informations au format json.<br>
        Dans votre page index.php, créez un tableau table permettant de contenir ces
        informations ainsi qu’un button “update”. Lorsque l’on clique sur ce bouton, le tableau
        doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents
        dans la base de données.<br>
        Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à l’aide de
        phpmyadmin entre deux clics.</p>
    </div>
    <button onclick="window.location.reload()">Update</button>
    <div id="container">
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    <script src="script.js" async></script>
</body>

</html>