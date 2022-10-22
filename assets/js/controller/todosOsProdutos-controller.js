import { produtosServices } from "../services/produtosService.js";

const produto = (nome, preco, imgUrl, id) => { // chama a lista para adicionar os produtos na página
    const card = document.createElement('div');
    // card.classList.add('produtos__lista');
    const conteudo = `<div class="produtos__card" id="${id}">
                        <img class="produtos__card__imagem" src="${imgUrl}" alt="">
                        <div class="produtos__card__descricao">
                            <p class="produtos__produto__nome">${nome}</p>
                            <p class="produtos__produto__preco">${preco}</p>
                            <p class="produtos__produto__nome">#1111111</p>
                        </div>
                    </div>`;
    card.innerHTML = conteudo;
    return card;
}

const mostrar = document.querySelector('[data-lista-produtos]')

const render = async () => { // mostra os elementos na página
    try{
        const listaProdutos = await produtosServices.listaProdutos();
        listaProdutos.forEach(element => {
            mostrar.appendChild(produto(element.nome, element.preco, element.img, element.id));
        });
    }
    catch(erro){
        console.log(erro);
    }
}

render();
