import { produtosServices } from "../services/produtosService.js";

// captura a lista do "db.json" e adiciona na página inicial (index.hmtl)

const produto = (nome, preco, imgUrl, id) => { // captura o produto e adicona numa div
    const card = document.createElement('div');
    card.classList.add('produtos__produto');
    const conteudo = `
                        <div class="produtos__produto__descricao">
                            <img class="produtos__card__imagem" data-imagem src="${imgUrl}" alt="">
                            <p data-nome class="produtos__produto__nome">${nome}</p>
                            <p data-preco class="produtos__produto__preco">${preco}</p>
                            <button id="${id}" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    `;
    card.innerHTML = conteudo; // adiciona o "conteudo" no "card"
    return card;
}

const starwars = document.querySelector("[data-starwars]");
const consoles = document.querySelector("[data-consoles]");
const diversos = document.querySelector("[data-diversos]");


const render = async () => { // renderiza os produtos
    try{
        const listaProdutos = await produtosServices.listaProdutos(); // chama a lista
        let result = listaProdutos.splice(0, 6); // adiciona os primeiros 6 elementos
        result.forEach(element => { // adiciona esses 6 elemnetos na div "data-starwars"
            console.log(element)
            starwars.appendChild(produto(element.nome, element.preco, element.img, element.id));
        });
        console.log(result)
    }
    catch(erro){
        console.log(erro);
    }
    try{ // repete o procedimento mais duas vezes, pegando sempre de 6 em 6 elementos e adicionando nas divs correspondentes
        const listaProdutos = await produtosServices.listaProdutos();
        let result = listaProdutos.splice(6, 6);
        result.forEach(element => {
            console.log(element)
            consoles.appendChild(produto(element.nome, element.preco, element.img, element.id));
        });
        console.log(result)
    }
    catch(erro){
        console.log(erro);
    }
    try{
        const listaProdutos = await produtosServices.listaProdutos();
        let result = listaProdutos.splice(12, 6);
        result.forEach(element => {
            console.log(element)
            diversos.appendChild(produto(element.nome, element.preco, element.img, element.id));
        });
        console.log(result)
    }
    catch(erro){
        console.log(erro);
    }
    
}

render(); // chama a função "render"
