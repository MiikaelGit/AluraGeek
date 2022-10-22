const listaProdutos = () => fetch("http://localhost:3000/produto").then(resposta => resposta.json()) // busca a listade produtos no arquivo db.json

const criarProduto = (nome, img, preco, id, categoria) => { // Faz o "POST" dos produtos
    return fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
           id,
           img,
           nome,
           preco,
           categoria 
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body;
        }
        throw new Error("Não foi possível criar o produto");
    })
}

const detalhaProduto = (id) => { // Pega o produto no "id" em questão
    return fetch(`http://localhost:3000/produto/${id}`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível detelhar o produto');
    })
}

const atuaizaProduto = (id, nome, preco, img) => { // Captura o produto já cadastrado para a sua alteração
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            img: img
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível atualizar o produto');
    })
}

const removeProduto = (id) => { // Remove o produto, clicando no botao de lixeira na página "produtos"
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    }).then( resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um produto');
        }
    })
}
export const produtosServices = {
    listaProdutos,
    criarProduto,
    detalhaProduto,
    atuaizaProduto,
    removeProduto
}