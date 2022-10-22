const botaoSessao = document.querySelector('[data-botao-sessao]');
const inputSessao = document.querySelector('[data-input-sessao]');
const senhaSessao = document.querySelector('[data-senha-sessao]');
const erro = document.querySelector('[data-erro]');
let login = { // senha e email para se ter acesso a pagina de alterações
    email: "admin@admin.com",
    senha: "admin123"
}

botaoSessao.addEventListener('click', (event) => { // validação dos campos de input
    event.preventDefault();
    if(inputSessao.value.length == 0){
        alert('Por favor, preencha o campo de de email.');
        inputSessao.focus();
    } else if(senhaSessao.value.length == 0) {
        alert('Por favor, preencha o campo de senha.');
        senhaSessao.focus();
    } else if (!inputSessao.validity.valid) {
        alert('O seu email deve conter pelo menos um arroba (@) e um ponto (.) Exemplo: texto@texto.com');
        inputSessao.focus();
    }else if(inputSessao.value != login.email) {
        erro.innerHTML = '<p class="erro">Seu email está incorreto, tente novamente!</p> <p class="erro__aviso">Tente isso: ( login: email -> admin@admin.com | senha -> admin123 )</p>'
    } else if (senhaSessao.value != login.senha) {
        erro.innerHTML = '<p class="erro">Sua senha está incorreta, tente novamente!</p> <p class="erro__aviso">Tente isso: ( login: email -> admin@admin.com | senha -> admin123 )</p>'
    }else if(inputSessao.validity.valid && senhaSessao.validity.valid) {
            window.location.href = 'produtos.html';
        }
    })