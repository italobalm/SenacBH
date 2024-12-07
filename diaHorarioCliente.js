// Seleciona os botões de data (dias do calendário)
const dateButtons = document.querySelectorAll('.date-btn');
// Seleciona os botões de horário
const timeButtons = document.querySelectorAll('.time-btn');

// Função para alternar a seleção de dias
dateButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'selected' de todos os botões de data
        dateButtons.forEach(btn => btn.classList.remove('selected'));
        // Adiciona a classe 'selected' no botão clicado
        this.classList.add('selected');
    });
});

// Função para alternar a seleção de horários
timeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'selected' de todos os botões de horário
        timeButtons.forEach(btn => btn.classList.remove('selected'));
        // Adiciona a classe 'selected' no botão clicado
        this.classList.add('selected');
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
}

