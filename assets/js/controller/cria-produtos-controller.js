import { produtosServices } from "../services/produtosService.js";
const listaProdutos = await produtosServices.listaProdutos();
let n = listaProdutos.length; // Captura o tamanho da lista de produtos
console.log(n)

const args = { // Máscara do input de preço
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
}

const input = SimpleMaskMoney.setMask('#preco', args);

input.formatToNumber();

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    var id = n; // id recebe o comprimento da lista, para adicionar como identificador numérico do produto que será adicionado
    // captura os valores dos inputs
    const img = document.querySelector("[data-URL]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nome = document.querySelector("[data-nome-produto]").value;
    const preco = document.querySelector("[data-preco]").value;
    

    produtosServices.criarProduto(nome, img, preco, id ,categoria).then(resposta => { // chama a funçao adicionado os valores
        window.location.href = "todos-os-produtos.html";// redireciona para a página "todos-os-produtos"
        console.log(resposta);
    }).catch(err => {
        console.log(err);
    })
})