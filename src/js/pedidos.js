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
