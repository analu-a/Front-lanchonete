document.addEventListener('DOMContentLoaded', () => {
    // Seu código JavaScript existente aqui...

    // Event listener para abrir o popup quando o card do produto é clicado
    const productCards = document.querySelectorAll('.card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const overlay = document.getElementById('popup-overlay');
            const popup = document.getElementById('popup');
            overlay.style.display = 'block';
            popup.style.display = 'block';
            // Adicione o código para preencher as informações do produto no popup
        });
    });

    // Event listener para fechar o popup quando o botão de fechar é clicado
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
        const overlay = document.getElementById('popup-overlay');
        const popup = document.getElementById('popup');
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});
