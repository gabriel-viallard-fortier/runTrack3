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

echo json_encode($result);