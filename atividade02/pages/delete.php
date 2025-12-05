<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Users</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body onload="popularDelete()">
    <header>
        <p>CRUD Completo em PHP !</p> <br>
        <p onclick="window.location.href='index.php'" class="userList">Index</p>
    </header>
    <main>
        <div class="CRUD">
            <section class="excluirUsuario">
                <h1 class="title">Você tem certeza que deseja deletar o usuario:</h1>

                <p id="mensagemDelete"></p>
                <form id="formDelete">

                    <label for="email"> Email do usuário:</label>
                    <input type="email" id="email" name="email" placeholder="Digite o email de usuário a ser deletado" disabled  required maxlength="255">

                    <input type="submit" value="Sim"> 
                    <p onclick="window.location.href='index.php'" class="naoExcluir">Não quero excluir este usuário</p>
                </form>

            </section>
        </div>
    </main>
    <footer>
        <p>&copy Bryan Miguel Moreira - 2025</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>