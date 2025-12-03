<?php

$idade = 17;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes com PHP</title>
</head>
<body>
    <?php 
    if($idade <= 10){
        echo "Você é uma criança";
    }
    elseif($idade <= 17){
        echo "Você é um adolescente";
    }
    elseif($idade <= 100){
        echo "Você é um adulto";
    }
    else{
        echo "Erro do servidor";
    }
    ?>
</body>
</html>