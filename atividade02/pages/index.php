<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css">
    <title>CRUD com PHP</title>
    
</head>
<body onload="listarUsers()">
    <header>
        <p>CRUD Completo em PHP !</p> <br>
        <p onclick="window.location.href='create.php'" class="userList">Create</p>
    </header>
    <div class="divListagemUser">
        <p id="mensagemListagem"></p>

        <table border="1" class="tabelaListagemUser">
            <thead>
                <tr>
                    <th>Nome</th> 
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="tabelaUser"></tbody>
        </table>

    </div>
    <footer>
        <p>&copy Bryan Miguel Moreira - 2025</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>