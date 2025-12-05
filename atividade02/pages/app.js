const apiURL = "/api/userController.php";

// ========================
// ➕ Adicionar Usuário´
// ========================

const formCadastro = document.getElementById("formCadastro")

if(formCadastro){
    formCadastro.addEventListener("submit", async (e) => {
        e.preventDefault();

        const msg = document.getElementById("mensagem")

        const dados = Object.fromEntries(new FormData(formCadastro));

        try {
            const resposta = await fetch(apiURL + "?action=create", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dados)
            });

            const resultado = await resposta.json();

            if(resposta.ok) {
                msg.textContent = resultado.message || "Usuário Cadastrado com sucesso !"
                msg.style.color = "green";
                formCadastro.reset()
                setTimeout(() => {
                    window.location.href="index.php";
                }, 1000);
            } else{
                msg.textContent = resultado.error || "Erro ao cadastrar usuário";
                msg.style.color = "red"
                formCadastro.reset()
            }
        } 
        catch (error) {
           msg.textContent = "Erro ao conectar com o servidor";
           msg.style.color = "red";
           console.error("Erro na requisição: ", error) 
        }
    })
}

// ==================================
// 🌀 UPDATE USUÁRIO
// ==================================



const formUpdate = document.getElementById("formUpdate")

if(formUpdate) {
    formUpdate.addEventListener("submit", async (e) => {
        e.preventDefault();

        const msg = document.getElementById("mensagemUpdate")

        const dados = Object.fromEntries(new FormData(formUpdate))
        const userAtual = sessionStorage.getItem("usuarioAtual")
        dados.email = userAtual

        try {
            const resposta = await fetch(apiURL, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dados)
            });

            const resultado = await resposta.json();

            if(resposta.ok){
                msg.textContent = resultado.message || "Usuário Atualizado com sucesso !"
                msg.style.color = "green";
                formUpdate.reset()
                setTimeout(() => {
                    window.location.href="index.php";
                }, 1000);
            }
            else {
                msg.textContent = resultado.error || "Erro ao atualizar usuário";
                msg.style.color = "red"
                formUpdate.reset()
            }
        } 
        catch (error) {
           msg.textContent = "Erro ao conectar com o servidor";
           msg.style.color = "red";
           console.error("Erro na requisição: ", error) 
        }
    })
}


const msgLista = document.getElementById("mensagemListagem")

async function editarUser() {
    const tabelaUser = document.getElementById("tabelaUser")

    tabelaUser.addEventListener('click', function(event) {

        if(event.target && event.target.classList.contains('botaoEditar')) {
            const linhaTable = event.target.closest('tr');

            if(linhaTable){

                const email = linhaTable.dataset.email;
                const name = linhaTable.dataset.name;
                const password = linhaTable.dataset.password;

                sessionStorage.setItem("usuarioAtual", email);
                window.location.href="edit.php"
            }
        }
    })
}

async function deletarUser() {
    const tabelaUser = document.getElementById("tabelaUser")

    tabelaUser.addEventListener('click', function(event) {

        if(event.target && event.target.classList.contains('botaoExcluir')) {
            const linhaTable = event.target.closest('tr');

            if(linhaTable){

                const email = linhaTable.dataset.email;
                const name = linhaTable.dataset.name;
                const password = linhaTable.dataset.password;

                sessionStorage.setItem("usuarioAtual", email);
                window.location.href="delete.php"
            }
        }
    })
}

async function popularEdit() {
    const usuarioAtual = sessionStorage.getItem("usuarioAtual")
    const campoEmail = document.getElementById("email")
    campoEmail.value = usuarioAtual
}

async function popularDelete() {
    const usuarioAtual = sessionStorage.getItem("usuarioAtual")
    const campoEmail = document.getElementById("email")
    campoEmail.value = usuarioAtual
}


// ==================================
// ❌ DELETE USUÁRIO
// ==================================

const formDelete = document.getElementById("formDelete")

if(formDelete) {
    formDelete.addEventListener("submit", async(e) => {
        e.preventDefault();

        const msg = document.getElementById("mensagemDelete")

        const dados = Object.fromEntries(new FormData(formDelete))
        const userAtual = sessionStorage.getItem("usuarioAtual")
        dados.email = userAtual

        try {
            const resposta = await fetch(apiURL, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(dados)
            })

            const resultado = await resposta.json();

            if(resposta.ok) {
                msg.textContent = resultado.message || "Usuário Deletado com sucesso !"
                msg.style.color = "green";
                formDelete.reset()
                setTimeout(() => {
                    window.location.href="index.php";
                }, 1000);
            }
            else {
                msg.textContent = resultado.error || "Erro ao deletar usuário";
                msg.style.color = "red"
                formDelete.reset()
            }
        } 
        catch (error) {
           msg.textContent = "Erro ao conectar com o servidor";
           msg.style.color = "red";
           console.error("Erro na requisição: ", error) 
        }
    })
}

// ==================================
// 📝 LISTAGEM DE USUÁRIOS
// ==================================

const msg = document.getElementById("mensagemListagem")
const tabela = document.getElementById("tabelaUser")

async function listarUsers() {
    try {
        const resposta = await fetch(apiURL);
        const usuarios = await resposta.json();

        if(resposta.ok) {
            console.log("Usuários cadastrados no sistema: ", usuarios);

            //Listar em uma tabela
            tabela.innerHTML = "";

            usuarios.forEach(u => {
                const tr = document.createElement("tr");

                tr.dataset.name = u.name
                tr.dataset.email = u.email
                tr.dataset.password = u.password

                const tdNome = document.createElement("td")
                tdNome.textContent = u.name


                const tdEmail = document.createElement("td")
                tdEmail.textContent = u.email

                const tdSenha = document.createElement("td")
                tdSenha.textContent = u.password

                const tdButton = document.createElement("td")
                const codigoButton = '<button class="botaoEditar" onclick="editarUser()">Editar</button> <button class="botaoExcluir" onclick="deletarUser()">Excluir</button>'
                tdButton.innerHTML = codigoButton

                tabela.appendChild(tr)

                tr.appendChild(tdNome);
                tr.appendChild(tdEmail);
                tr.appendChild(tdSenha);
                tr.appendChild(tdButton)
            })
        } else {
            console.error("Erro ao listar usuários")
            msg.textContent = "Erro ao listar usuários"
        }
    } 
    catch (error) {
        console.error("Erro na requisição: ", error)
        msg.textContent = error || "Erro na requisição get";
    }
}

// ==================================
//  🎟 LOGIN DE USUÁRIO 
// ==================================

const loginForm = document.getElementById("loginForm");

if(loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const msg = document.getElementById("mensagemLogin")

        const dados = Object.fromEntries(new FormData(loginForm));

        console.log("Dados recebidos: ", dados);

        try {
            const resposta = await fetch(apiURL + "?action=login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(dados)
            });

            const resultado = await resposta.json();

            if(resposta.ok) {
                console.log("Logado com sucesso !")
                msg.textContent = `Bem vindo, ${resultado.name}!`;
                msg.className = "msg-sucesso"

                setTimeout(() => {
                    msg.remove();
                    setTimeout(() => {
                        window.location.href = "home.html"; 
                    }, 1000);
                }, 3000);
            } else {
                msg.textContent = resultado.error;
                msg.className = "msg-erro"
                setTimeout(() => {
                    msg.remove();
                }, 3000);
            }
        }
        catch (error) {
            console.log("Erro na requisição POST: ", error)
            msg.textContent = "Erro na requisição de LOGIN" + error;
        }
    })
}