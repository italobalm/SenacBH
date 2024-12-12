const radios = document.querySelectorAll('input[name="segmento"]');
const nextButton = document.getElementById('next-button');

// Adiciona um evento de mudança para habilitar o botão "Próximo" quando um segmento for selecionado
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        nextButton.disabled = false;
    });
});

//Abrir e fechar o menu no modo mobile
function toggleSidebar() {
        const sidebar = document.getElementById('sidebar-menu');
        sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
    }

