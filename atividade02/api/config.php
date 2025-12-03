<?php 

    $server = "localhost";
    $user = "alunods";
    $password = "senai@604";
    $db = "php_crud";

    $connect = new mysqli($server, $user, $password, $db);

    if($connect -> connect_error){
        die("Erro na conexão: " . $connect -> connect_error);
    }

?>