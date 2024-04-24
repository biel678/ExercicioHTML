
let usuario = window.document.getElementById('nome');

let password = window.document.getElementById('senha');

function instrucao() {
    alert("Olá, bem vindo ao site, para fazer seu login coloque seu nome e senha.");
}

function logar() {
    if (nome.value === "Xehanort") {
        if (nome.value === "Xehanort" && senha.value === "KingdomHearts") {
            alert("Bem vindo mestre.");             
        }else{
        alert("Usuário aceito, mas está faltando a senha!");
        }
    }
}

function retorno() {
    window.location.href = 'index.html';
}
