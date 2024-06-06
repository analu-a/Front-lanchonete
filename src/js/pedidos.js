document.addEventListener('DOMContentLoaded', () => {
    const pedidosContainer = document.getElementById('pedidos-container');

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const createPedidoCard = (product, index) => {
        const card = document.createElement('div');
        card.classList.add('bg-[#622c05]', 'h-28', 'w-[180vh]', 'rounded-lg', 'translate-x-10', 'flex', 'items-center', 'mb-8');

        card.innerHTML = `
            <img src="${product.imagem}" alt="img do card de pedidos" class="size-[90px]" style="transform: translate(10px)">
            <article class="p-5 text-white ">
                <h1 class="font-medium space-y-4">${product.nome}</h1>
                <p class="text-orange-50">${product.descricao}</p>
                <p>${product.preco}</p>
            </article>
            <button class="ml-auto mr-5 bg-orange-800 text-white px-3 py-1 rounded" onclick="removerPedido(${index})">Excluir pedido</button>
        `;

        return card;
    };

    const removerPedido = (index) => {
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        carregarPedidos();
    };

    const carregarPedidos = () => {
        pedidosContainer.innerHTML = '';
        carrinho.forEach((product, index) => {
            const pedidoCard = createPedidoCard(product, index);
            pedidosContainer.appendChild(pedidoCard);
        });
    };

    carregarPedidos();

    window.removerPedido = removerPedido;
});
