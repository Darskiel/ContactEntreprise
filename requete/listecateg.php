<?php

include ('connexionbdd.php');

$sql = "SELECT * FROM categorie";
$resultat = $bdd->query($sql);

$tablereponse = array();
while ($donnees = $resultat->fetch(PDO::FETCH_OBJ)) {
    $tablereponse[] = $donnees;
}
echo json_encode($tablereponse);

?>