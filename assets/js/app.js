function produtoDetalhe(id) { // cria uma página com mais detalhes sobre o produto, clicando no botão "Ver Produto"
    const secaoProdutos = document.querySelector('[data-produtos]');
    let nomeProduto = document.querySelectorAll('[data-nome]');
    const secaoDestaque = document.querySelector('[data-destaque]');
    let produtosImagem = document.querySelectorAll('[data-imagem]');
    let precoProduto = document.querySelectorAll('[data-preco]');
    
   
    
    secaoDestaque.style.background = 'none';
    secaoDestaque.style.height = '0'
    secaoDestaque.innerHTML = '';
    secaoProdutos.innerHTML = '';

    secaoProdutos.innerHTML = 
        `<section class="principal">
            <section class="informacoes">
                <div class="informacoes__container container">
                    <div class="informacoes__imagem"></div>
                    <div class="informacoes__conteudo">
                        <h1 class="informacoes__conteudo__titulo">${nomeProduto[id].textContent}</h1>
                        <p class="informacoes__conteudo__preco">
                            ${precoProduto[id].textContent}
                        </p>
                        <p class="informacoes__conteudo__descricao">
                            Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
                        </p>
                    </div>
                </div>
            </section>
            <section class="container similares">
                <h2 class="similares__titulo">Produtos similares</h2>
                <div class="similares__produtos">
                    <div class="produtos__produto">
                        <div class="produtos__produto__descricao">
                        <img data-imagem src="assets/img/capuz.png" alt="Foto do Produto XYZ">
                        <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                        <p class="produtos__produto__preco">R$ 60,00</p>
                    <button id="0" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                </div>
                    </div>
                    <div class="produtos__produto">
                        <div class="produtos__produto__descricao">
                            <img data-imagem src="assets/img/capacetepreto.png" alt="Foto do Produto XYZ">
                            <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                            <p class="produtos__produto__preco">R$ 60,00</p>
                            <button id="1" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    </div>
                    <div class="produtos__produto">
                        <div class="produtos__produto__descricao">
                            <img data-imagem src="assets/img/yodaadulto.png" alt="Foto do Produto XYZ">
                            <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                            <p class="produtos__produto__preco">R$ 60,00</p>
                            <button id="2" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    </div>
                    <div class="produtos__produto">
                        <div class="produtos__produto__descricao">
                            <img data-imagem src="assets/img/jedi.png" alt="Produto XYZ">
                            <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                            <p class="produtos__produto__preco">R$ 60,00</p>
                            <button id="3" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    </div>
                    <div class="produtos__produto">
                        <div class="produtos__produto__descricao">
                            <img data-imagem src="assets/img/yodacrianca.png" alt="Produto XYZ">
                            <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                            <p class="produtos__produto__preco">R$ 60,00</p>
                            <button id="4" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    </div>
                    <div class="produtos__produto">
                            <div class="produtos__produto__descricao">
                                <img data-imagem src="assets/img/capacetebranco.png" alt="Foto do Produto XYZ">
                                <p data-nome class="produtos__produto__nome">Produto XYZ</p>
                                <p class="produtos__produto__preco">R$ 60,00</p>
                            <button id="5" onclick="produtoDetalhe(this.id)" class="produtos__container__botao produtos__botao">Ver produto</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>`;
        
        let imagem = produtosImagem[id].src;
    const novaImagem = document.querySelector('.informacoes__imagem');
    novaImagem.style.backgroundImage = `URL(${imagem})`;
    window.scrollTo(0, 0);
    // nomeProduto = document.querySelectorAll('[data-nome]');
}