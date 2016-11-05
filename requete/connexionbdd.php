<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=tpcontact;charset=utf8','root','root');
}
catch(Exception $e) {
    die('Erreur connexion base de données: ' . $e->getMessage());
}
?>