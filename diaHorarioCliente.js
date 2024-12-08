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

// Função para salvar o dia e horário selecionados no LocalStorage
function saveSelection(day, time) {
    console.log("Salvando no LocalStorage: ", day, time); // Verifica se os valores estão sendo salvos
    localStorage.setItem('selectedDay', day);
    localStorage.setItem('selectedTime', time);
}

// No clique do botão "Próximo"
document.querySelector('.btn.btn-primary').addEventListener('click', function () {
    if (selectedDay && selectedTime) {
        saveSelection(selectedDay, selectedTime); // Salva os valores no LocalStorage
        window.location.href = 'comprovante.html'; // Navega para a página do comprovante
    } else {
        alert('Por favor, selecione um dia e um horário antes de continuar.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let selectedDay = localStorage.getItem('selectedDay');
    let selectedTime = localStorage.getItem('selectedTime');

    // Exibe o valor atual no botão de data e horário, se já houver uma seleção
    if (selectedDay) {
        console.log("Dia já selecionado: ", selectedDay);
    }
    if (selectedTime) {
        console.log("Horário já selecionado: ", selectedTime);
    }

    // Função para salvar o dia e horário selecionados no LocalStorage
    function saveSelection(day, time) {
        console.log("Salvando no LocalStorage: ", day, time); 
        localStorage.setItem('selectedDay', day);
        localStorage.setItem('selectedTime', time);
    }

    // Função para manipular o clique no botão de dia
    document.querySelectorAll('.date-btn').forEach(button => {
        button.addEventListener('click', function () {
            selectedDay = this.getAttribute('data-day'); // Atualiza a variável selectedDay
            console.log("Dia selecionado:", selectedDay);
            
            // Armazena no localStorage
            saveSelection(selectedDay, selectedTime); 

            // Atualiza a exibição visual
            document.querySelectorAll('.date-btn').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Função para manipular o clique no botão de horário
    document.querySelectorAll('.time-btn').forEach(button => {
        button.addEventListener('click', function () {
            selectedTime = this.getAttribute('data-time'); // Atualiza a variável selectedTime
            console.log("Horário selecionado:", selectedTime);

            // Armazena no localStorage
            saveSelection(selectedDay, selectedTime); 

            // Atualiza a exibição visual
            document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

   
});
