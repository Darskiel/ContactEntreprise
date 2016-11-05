<?php

include ('connexionbdd.php');

$sql = "SELECT * FROM contact,categorie WHERE contact.id_categ = categorie.id AND categorie.id =" .$_POST['id'];
$resultat = $bdd->query($sql);

$tablereponse = array();
while ($donnees = $resultat->fetch(PDO::FETCH_OBJ)) {
    $tablereponse[] = $donnees;
}
echo json_encode($tablereponse);
?>