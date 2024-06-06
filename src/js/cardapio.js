document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        {
            nome: 'X bancon',
            descricao: 'Três hamburgueres bovinos (150g) em pão brioche tostado na manteiga, fatias crocantes de bacon e molho especial da casa.',
            preco: 'R$ 49,50',
            imagem: '../img/lanche1.png'
        },
        {
            nome: 'Refrigerante',
            descricao: 'Refrigerante de cola em lata 350ml.',
            preco: 'R$ 5,00',
            imagem: '../img/bebida1.png'
        },
        {
            nome: 'Torta de chocolate',
            descricao: 'Deliciosa torta de chocolate com cobertura de ganache.',
            preco: 'R$ 8,00',
            imagem: '../img/sobremesa1.png'
        },
        {
            nome: 'Cerveja',
            descricao: 'Cerveja gelada, perfeita para acompanhar seu lanche.',
            preco: 'R$ 7,00',
            imagem: '../img/bebida_alcoolica1.png'
        }
    ];

    const popup = document.getElementById('popup');
    const popupNome = document.getElementById('popup-produto-nome');
    const popupDescricao = document.getElementById('popup-produto-descricao');
    const popupPreco = document.getElementById('popup-produto-preco');
    const popupImagem = document.getElementById('popup-produto-imagem');
    const btnAdicionarCarrinho = document.getElementById('popup-adicionar-carrinho');

    function openPopup(produto) {
        popupNome.textContent = produto.nome;
        popupDescricao.textContent = produto.descricao;
        popupPreco.textContent = produto.preco;
        popupImagem.src = produto.imagem;
        popup.style.display = 'block';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    btnAdicionarCarrinho.addEventListener('click', function() {
        adicionarProdutoAoCarrinho();
        closePopup();
    });

    const carrinho = [];

    function adicionarProdutoAoCarrinho() {
        const produto = {
            nome: popupNome.textContent,
            descricao: popupDescricao.textContent,
            preco: popupPreco.textContent,
            imagem: popupImagem.src
        };
        carrinho.push(produto);
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        const listaCarrinho = document.getElementById('lista-carrinho');
        listaCarrinho.innerHTML = '';
        carrinho.forEach(produto => {
            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = `${produto.nome} - ${produto.preco}`;
            listaCarrinho.appendChild(itemCarrinho);
        });
    }

    function limparCarrinho() {
        carrinho.length = 0;
        atualizarCarrinho();
    }

    const novidadesContainer = document.getElementById('novidades');
    const favoritosContainer = document.getElementById('favoritos');

    produtos.forEach(produto => {
        const cardProduto = createProductCard(produto);
        novidadesContainer.appendChild(cardProduto);
    });
});
