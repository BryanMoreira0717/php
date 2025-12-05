<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Users</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <header>
        <p>CRUD Completo em PHP !</p> <br>
        <p onclick="window.location.href='index.php'" class="userList">Index</p>

    </header>
    <main>
        <div class="CRUD">
            <section class="cadastroUsuario">
                <h1 class="title">Cadastro de Usuário</h1>
                <p id="mensagem"></p>
                <form id="formCadastro">
                    <label for="name"> Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o nome do usuário" required maxlength="255">

                    <label for="email"> Email:</label>
                    <input type="email" id="email" name="email" placeholder="Digite o email de usuário"  required maxlength="255">

                    <label for="password"> Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a senha de Usuário" required maxlength="255">

                    <input type="submit" value="Cadastrar"> 
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