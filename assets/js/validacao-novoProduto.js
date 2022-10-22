const produtoURL = document.querySelector('[data-URL]');
const produtoCategoria = document.querySelector('[data-categoria]')
const nomeProduto = document.querySelector('[data-nome-produto]');
const precoProduto = document.querySelector('[data-preco]');
const descricaoProduto = document.querySelector('[data-mensagem-produto]');
const botaoProduto = document.querySelector('[data-botao-produto]');

const args = { // máscara para o input de preço
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
}

const input = SimpleMaskMoney.setMask('#preco', args);

input.formatToNumber();

botaoProduto.addEventListener('click', (event) => { // validação dos campos de input
    event.preventDefault();
    if(produtoURL.value.length == 0) {
        alert('Por favor, preencha o campo de URL da imagem.');
        produtoURL.focus();
    }else if(produtoCategoria.value.length == 0) {
        alert('Por favor, preencha o campo de Categoria.');
        produtoCategoria.focus();
    }else if(nomeProduto.value.length == 0) {
        alert('Por favor, preencha o campo de Nome do produto.');
        nomeProduto.focus();
    }else if(nomeProduto.value.length > 20) {
        alert('O campo de Nome do produto deve ter no máximo 20 caracteres.');
        nomeProduto.focus();
    }else if(precoProduto.value.length == 0) {
        alert('Por favor, preencha o campo de Preço do produto.');
        precoProduto.focus();
    } else if(descricaoProduto.value.length > 150) {
        alert('O campo de Descrição do produto deve ter no máximo 150 caracteres.');
        descricaoProduto.focus();
    } else {
        console.log('pronto')
    }
})