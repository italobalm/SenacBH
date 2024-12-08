
  
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

document.addEventListener("DOMContentLoaded", function () {
  const serviceElement = document.getElementById("servico");
  const valueElement = document.getElementById("valor");

  // Recuperar os dados do localStorage
  const selectedServices = JSON.parse(localStorage.getItem("selectedServices")) || [];
  const totalAmount = localStorage.getItem("totalAmount") || "0.00";

  // Atualizar os elementos no comprovante
  serviceElement.textContent = selectedServices.join(", ");
  valueElement.textContent = `${totalAmount}`;
});


document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("data-emissao");

  // Obter a data atual
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
  });

  // Atualizar o elemento de data
  dateElement.textContent = formattedDate;
});

document.addEventListener('DOMContentLoaded', function () {
  // Recupera os valores do LocalStorage
  const selectedDay = localStorage.getItem('selectedDay');
  const selectedTime = localStorage.getItem('selectedTime');

  // Exibe os valores no HTML
  if (selectedDay && selectedTime) {
      document.getElementById('dia').textContent = selectedDay;
      document.getElementById('horario').textContent = selectedTime;
  } else {
      document.getElementById('dia').textContent = 'Não selecionado';
      document.getElementById('horario').textContent = 'Não selecionado';
  }
});
