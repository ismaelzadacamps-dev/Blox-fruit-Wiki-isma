// Função para trocar de abas
function openTab(tabId) {
    // Esconde todas as seções
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove estado ativo dos botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Ativa a aba e o botão selecionado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Função para buscar em tempo real
function filterCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    if (input !== "") {
        // Se houver busca, exibe todas as abas para encontrar o item
        document.querySelectorAll('.tab-content').forEach(section => {
            section.style.display = 'block';
        });
    } else {
        // Restaura a visualização padrão por abas
        document.querySelectorAll('.tab-content').forEach(section => {
            section.style.display = '';
        });
    }

    // Filtra card por card com base no atributo data-name e título
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const dataName = card.getAttribute('data-name') ? card.getAttribute('data-name').toLowerCase() : "";

        if (text.includes(input) || dataName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
