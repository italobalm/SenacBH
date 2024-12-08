
  
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
}

// Função para pegar os parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Preenche os dados na página do comprovante
window.onload = function() {
  const professionalName = getQueryParam('professional'); // Recupera o nome do profissional

  if (professionalName) {
      document.getElementById('profissional').textContent = decodeURIComponent(professionalName); // Exibe o nome do profissional
  }
};

