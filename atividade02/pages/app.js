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
            const resposta = await fetch(apiURL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dados)
            });

            const resultado = await resposta.json();

            if(resposta.ok) {
                msg.textContent = resultado.message || "Usuário Cadastrado com sucesso !"
                msg.style.color = "green";
                formCadastro.reset()
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

// ==================================
// ❌ DELETE USUÁRIO
// ==================================

const formDelete = document.getElementById("formDelete")

if(formDelete) {
    formDelete.addEventListener("submit", async(e) => {
        e.preventDefault();

        const msg = document.getElementById("mensagemDelete")

        const dados = Object.fromEntries(new FormData(formDelete))

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