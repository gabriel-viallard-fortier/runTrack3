<?php

// Report all PHP errors
error_reporting(E_ALL);
try {
    $db = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', 'bbad4ngd25quam7mze72');
} catch (PDOException $e) {
    // tenter de réessayer la connexion après un certain délai, par exemple
}
$query = "SELECT * FROM utilisateurs;";

$stmt = $db->prepare($query);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
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
    <p>Créez une base de données “utilisateurs” contenant une table “utilisateurs” et ayant
comme champs “id”, “nom”, “prenom” et “email”.
Ajoutez des utilisateurs directement dans phpmyadmin.
Créez une page users.php qui se connecte à la base de données, récupère l’ensemble
des utilisateurs et affiche ces informations au format json.
Dans votre page index.php, créez un tableau permettant de contenir ces
informations ainsi qu’un button “update”. Lorsque l’on clique sur ce bouton, le tableau
doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents
dans la base de données.
Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à l’aide de
phpmyadmin entre deux clics.</p>
    <div class="container">
        <table>
            <thead>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </thead>
            <tbody>
                <?php foreach ($result as $row): ?>
                    <tr>
                        <td><?= $row['id'] ?></td>
                        <td><?= $row['nom'] ?></td>
                        <td><?= $row['prenom'] ?></td>
                        <td><?= $row['email'] ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <button onclick="updateTable()">Update</button>
    </div>
    <script src="script.js"></script>
</body>

</html>