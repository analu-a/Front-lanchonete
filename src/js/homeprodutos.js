document.addEventListener('DOMContentLoaded', () => {
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

    // Função para abrir o popup com as informações do produto
    const openPopup = (product) => {
        const popup = document.createElement('div');
        popup.classList.add('popup');

        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');

        const content = document.createElement('div');
        content.classList.add('popup-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = 'Fechar';
        closeBtn.addEventListener('click', () => {
            popup.remove();
        });

        const img = document.createElement('img');
        img.src = product.imagem;
        img.alt = `imagem do ${product.nome}`;

        const productName = document.createElement('h2');
        productName.textContent = product.nome;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.descricao;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.preco;

        content.appendChild(closeBtn);
        content.appendChild(img);
        content.appendChild(productName);
        content.appendChild(productDescription);
        content.appendChild(productPrice);

        popup.appendChild(overlay);
        popup.appendChild(content);

        document.body.appendChild(popup);
    };

    // Adicionar evento de clique aos elementos dos produtos para abrir o popup
    novidadesContainer.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const productIndex = Array.from(novidadesContainer.children).indexOf(card);
            openPopup(novidades[productIndex]);
        });
    });

    favoritosContainer.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const productIndex = Array.from(favoritosContainer.children).indexOf(card);
            openPopup(favoritos[productIndex]);
        });
    });
});

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
