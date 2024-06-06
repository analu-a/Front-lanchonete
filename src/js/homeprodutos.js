// js/homeprodutos.js
function init() {
    const novidadesContainer = document.getElementById('novidades');
    const favoritosContainer = document.getElementById('favoritos');

    // Simulação de dados recebidos do backend
    const novidades = [
        {
            id: 1,
            nome: 'X-bacon',
            descricao: 'Três hamburgueres bovinos (150g) em pão brioche tostado na manteiga, fatias crocantes de bacon e molho especial da casa.',
            preco: 'R$ 49,50',
            imagem: 'https://via.placeholder.com/150' // Exemplo de URL válida
        },
        {
            id: 2,
            nome: 'X-salada',
            descricao: 'Hamburguer bovino (150g), alface, tomate, cebola roxa e molho especial da casa.',
            preco: 'R$ 29,50',
            imagem: 'https://via.placeholder.com/150' // Exemplo de URL válida
        }
    ];

    const favoritos = [
        {
            id: 1,
            nome: 'Coxinha de Frango',
            descricao: 'Peito de frango, azeite extra virgem, óleo de girassol, ovo pasteurizado, alho, salsinha fresca, sal rosa, orégano e especiarias.',
            preco: 'R$ 3,00 Unid.',
            imagem: 'https://via.placeholder.com/150' // Exemplo de URL válida
        },
        {
            id: 2,
            nome: 'Bolinho de Bacalhau',
            descricao: 'Bacalhau, batata, salsa, cebola, alho e especiarias.',
            preco: 'R$ 5,00 Unid.',
            imagem: 'https://via.placeholder.com/150' // Exemplo de URL válida
        }
    ];

    // Função para criar um card de produto
    const createProductCard = (product) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = product.imagem;
        img.alt = `imagem do ${product.nome}`;

        const article = document.createElement('article');

        const h1 = document.createElement('h1');
        h1.textContent = product.nome;

        const pDescricao = document.createElement('p');
        pDescricao.textContent = product.descricao;

        const pPreco = document.createElement('p');
        pPreco.textContent = product.preco;
        pPreco.classList.add('preco');

        article.appendChild(h1);
        article.appendChild(pDescricao);
        article.appendChild(pPreco);

        card.appendChild(img);
        card.appendChild(article);

        // Adiciona evento de clique ao card
        card.addEventListener('click', () => {
            openPopup(product);
        });

        return card;
    };


    // Limpa os contêineres para evitar duplicação
    novidadesContainer.innerHTML = '';
    favoritosContainer.innerHTML = '';

    // Adiciona os produtos de novidades ao container
    novidades.forEach(product => {
        const productCard = createProductCard(product);
        novidadesContainer.appendChild(productCard);
    });

    // Adiciona os produtos favoritos ao container
    favoritos.forEach(product => {
        const productCard = createProductCard(product);
        favoritosContainer.appendChild(productCard);
    });
}

// Chama a função init quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', init);

// Função para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho() {
    // Obter informações do produto do popup
    const nome = document.getElementById('popup-produto-nome').textContent;
    const descricao = document.getElementById('popup-produto-descricao').textContent;
    const preco = document.getElementById('popup-produto-preco').textContent;

    // Chamar a função para adicionar ao carrinho
    adicionarAoCarrinho(nome, descricao, preco);
}

// Função para adicionar um produto aos pedidos
function adicionarAoCarrinho(nome, descricao, preco) {
    const pedidosContainer = document.getElementById('pedidos-container');

    // Criar um novo card de pedido
    const cardPedido = document.createElement('div');
    cardPedido.classList.add('bg-[#622c05]', 'h-28', 'w-[180vh]', 'rounded-lg', 'translate-x-10', 'flex', 'items-center', 'mb-8');

    // Conteúdo do card de pedido
    cardPedido.innerHTML = `
        <img src="../img/tortamorango.png" alt="img do card de pedidos" class="size-[90px]" style="transform: translate(10px) translateY(10px)">
        <article class="p-5 text-white ">
            <h1 class="font-medium space-y-4">${nome}</h1>
            <p class="text-orange-50">${descricao}</p>
            <p>${preco}</p>
        </article>
    `;

    // Adicionar o card de pedido ao contêiner
    pedidosContainer.appendChild(cardPedido);
}


// Função para abrir o popup com as informações do produto
function openPopup(product) {
    document.getElementById('popup-produto-nome').textContent = product.nome;
    document.getElementById('popup-produto-imagem').src = product.imagem;
    document.getElementById('popup-produto-descricao').textContent = product.descricao;
    document.getElementById('popup-produto-preco').textContent = product.preco;
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Função para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho() {
    // Obter informações do produto do popup
    const nome = document.getElementById('popup-produto-nome').textContent;
    const descricao = document.getElementById('popup-produto-descricao').textContent;
    const preco = document.getElementById('popup-produto-preco').textContent;

    // Chamar a função para adicionar ao carrinho
    adicionarAoCarrinho(nome, descricao, preco);
}

// Função para adicionar um produto aos pedidos
function adicionarAoCarrinho(nome, descricao, preco) {
    const pedidosContainer = document.getElementById('pedidos-container');

    // Criar um novo card de pedido
    const cardPedido = document.createElement('div');
    cardPedido.classList.add('bg-[#622c05]', 'h-28', 'w-[180vh]', 'rounded-lg', 'translate-x-10', 'flex', 'items-center', 'mb-8');

    // Conteúdo do card de pedido
    cardPedido.innerHTML = `
        <img src="../img/tortamorango.png" alt="img do card de pedidos" class="size-[90px]" style="transform: translate(10px) translateY(10px)">
        <article class="p-5 text-white ">
            <h1 class="font-medium space-y-4">${nome}</h1>
            <p class="text-orange-50">${descricao}</p>
            <p>${preco}</p>
        </article>
    `;

    // Adicionar o card de pedido ao contêiner
    pedidosContainer.appendChild(cardPedido);
}


// Chama a função init quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', init);
