<?php

include 'config.php';

// POST USUARIO
header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_GET['action'];

    if($action === 'login'){

        error_log("Dados recebidos: " . print_r($input, true));

        $email = $input['email'] ?? null;
        $password = $input['password'] ?? null;

        if(!$email || !$password) {
            http_response_code(400);
            echo json_encode(["error" => "Email e senha são obrigatórios"]);
            exit;
        }

        //buscar usuário pelo email

        $stmt = $connect->prepare("SELECT name, password FROM usuario WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows === 0){
            http_response_code(401);
            echo json_encode(["error" => "Usuário não encontrado"]);
            exit;
        }

        $user = $result->fetch_assoc();

        // Verificar senha

        if(password_verify($password, $user['password'])) {
            http_response_code(200);
            echo json_encode([
                "message" => "Login realizado com sucesso",
                "name" => $user['name'],
                "email" => $email
            ]);
            exit;
        } else {
            http_response_code(401);
            echo json_encode(["error" => "Senha incorreta"]);
            exit;
        }
    } elseif($action === 'create') {

        $name = $input['name'] ?? null;
        $email = $input['email'] ?? null;
        $password = $input['password'] ?? null;
    
        if(!$name || !$email || !$password) {
            http_response_code(400);
            echo json_encode(["error" => "Campos Obrigatórios Faltando"]);
            exit;
        }
    
        $hash = password_hash($password, PASSWORD_DEFAULT);
    
        $stmt = $connect->prepare("INSERT INTO usuario(name, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $hash);
    
        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Usuário cadastrado com sucesso"]);
            exit;
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao cadastrar usuário"]);
            exit;
        }

    }
}

// UPDATE USUARIO

if($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $email = $input['email'] ?? null;
    $name = $input['name'] ?? null;
    $password = $input['password'] ?? null;

    if(!$email) {
        http_response_code(400);
        echo json_encode(["error" => "Campos obrigatórios faltando"]);
    }

    if($password){
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $connect->prepare("UPDATE usuario SET name = ?, password = ? WHERE email = ?");
        $stmt->bind_param("sss", $name, $hash, $email);
    }
    else {
        $stmt = $connect->prepare("UPDATE usuario SET name = ? WHERE email = ?");
        $stmt->bind_param("ss", $name, $email);
    }

    if ($stmt->execute()) {
        if($stmt->affected_rows > 0){
            http_response_code(200);
            echo json_encode(["message" => "Usuário Atualizado com sucesso"]);
        }
        else {
            http_response_code(404);
            echo json_encode(["error" => "Usuário não encontrado"]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao atualizar usuário"]);
    }
}

// DELETE USUÁRIO

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $email = $input['email'] ?? null;

    if(!$email) {
        http_response_code(400);
        echo json_encode(["error" => "Campos obrigatórios faltando"]);
    }

    $stmt = $connect->prepare("DELETE FROM usuario WHERE email = ?");
    $stmt->bind_param("s", $email);

    if($stmt->execute()){
        if($stmt->affected_rows > 0){
            http_response_code(200);
            echo json_encode(["message" => "Usuário deletado com sucesso !"]);
        }
        else{
            http_response_code(404);
            echo json_encode(["error" => "Usuário não encontrado"]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao deletar usuário"]);
    }
}

// MÉTODO GET

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $result = $connect->query("SELECT * FROM usuario");

    $usuarios = [];

    while($row = $result->fetch_assoc()){
        $usuarios[] = $row;
    }

    http_response_code(200);
    echo json_encode($usuarios);
}