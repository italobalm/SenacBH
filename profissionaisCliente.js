function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
}
// Redireciona para a página do comprovante com o nome do profissional
function redirectWithDetails(professionalName) {
    const encodedProfessional = encodeURIComponent(professionalName); // Codifica o nome do profissional

    // Redireciona para a página do comprovante com o nome do profissional na URL
    window.location.href = `comprovante.html?professional=${encodedProfessional}`;
}
