<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Users</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body onload="popularEdit()">
    <header>
        <p>CRUD Completo em PHP !</p> <br>
        <p onclick="window.location.href='index.php'" class="userList">Index</p>
    </header>
    <main>
        <div class="CRUD">
            <section class="updateUsuario">
                <h1 class="title">Atualizar Usuário</h1>
                <p id="mensagemUpdate"></p>
                <form id="formUpdate">
                    <label for="email"> Email:</label>
                    <input type="email" id="email" name="email" placeholder="Digite o email de usuário que será atualizado" disabled required maxlength="255">

                    <label for="name"> Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o nome do usuário atualizado" required maxlength="255">

                    <label for="password"> Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a senha de usuário atualizada" maxlength="255">

                    <input type="submit" value="Atualizar"> 
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