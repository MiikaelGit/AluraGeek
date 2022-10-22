const inputContato = document.querySelector('[data-contato]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoContato = document.querySelector('[data-botao-contato]');

// validação do formulário de contato

botaoContato.addEventListener('click', (event) => { // validação dos campos de input
    if(inputContato.value.length == 0) {
        alert('Por favor, preencha o campo de nome.');
        event.preventDefault();
        inputContato.focus();
    } else if (inputContato.value.length > 40) {
        alert('O limite é de 40 caracteres.');
        event.preventDefault();
        inputContato.focus();
    } else if(mensagem.value.length == 0) {
        alert('Por favor, preencha o campo de mensagem.');
        mensagem.focus();
    } else if (mensagem.value.length > 120) {
        alert('O limite é de 120 caracteres.');
        event.preventDefault();
        mensagem.focus();
    }
})
    

