import { produtosServices } from "../services/produtosService.js";

const args = { // Máscara para o input de preco
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
}

const input = SimpleMaskMoney.setMask('#preco', args);

input.formatToNumber();

(async () => { // Captura o produto para editar seus dados salvos
    const pegaURL = new URL(window.location); // Captura a URL da página
    const id = pegaURL.searchParams.get('id'); // Extrai o "id" no final da URL 

    const inputImg = document.querySelector('[data-URL]');
    const inputNome = document.querySelector('[data-nome-produto]');
    const inputPreco = document.querySelector('[data-preco]');

    try { // captura os dados do "detalhaProdutos" do "produtosServices" e injeta esses dados nos inputs, para alteração
        const dados = await produtosServices.detalhaProduto(id)
        inputImg.value = dados.img;
        inputNome.value = dados.nome;
        inputPreco.value = dados.preco;
    }
    catch(erro){
        console.log(erro);
    }

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento) => { // Chama a função de "atualizaProdutos", passando os novos dados ao enviar o formulário 
        evento.preventDefault();
        try {
            await produtosServices.atuaizaProduto(id, inputNome.value, inputPreco.value, inputImg.value);
            window.location.href = 'produtos.html'; // Redireciona para a página de "Produtos" 
        }
        catch(erro){
            console.log(erro);
        }
    })
})()