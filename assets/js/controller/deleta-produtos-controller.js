import { produtosServices } from "../services/produtosService.js";

const lista = document.querySelector('[data-produtos-lista]');

lista.addEventListener('click', async (evento) => { // adicoina evento de escutador de click na "Lista"
    let botaoDeletar = evento.target.className === 'icone__lixeira' // captura o elemento com a class "icone-lixeira"
    if(botaoDeletar) { 
        try { // Se o alvo do click for o elemento com a class citada, são feitos os comandos abaixo 
            const divProduto = evento.target.closest('[data-id]'); // pega o elemento mais próximo com a "data-id"
            let id = divProduto.dataset.id; // captura o número "id"
            await produtosServices.removeProduto(id) // chama a função passando o "id" e remove o elemento da lista "db.json"
            divProduto.remove(); // remove o elemento do HTML
        }
        catch(erro) {
            console.log(erro);
        }
    }
})


