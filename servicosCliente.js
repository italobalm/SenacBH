function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
}


document.addEventListener("DOMContentLoaded", function () {
    const services = [
        { id: "argiloterapia", price: 65.00 },
        { id: "banho-de-lua", price: 85.00 },
        { id: "corrente-russa", price: 46.00 },
        { id: "criolipolise-1-area", price: 150.00 },
        { id: "criolipolise-2-areas", price: 250.00 },
        { id: "drenagem-linfatica-corporal", price: 65.00 },
        { id: "drenagem-linfatica-pos-cirurgica", price: 70.00 },
        { id: "drenagem-linfatica-facial", price: 40.00 },
        { id: "esfoliacao-hidratacao", price: 60.00 },
        { id: "harmonizacao-heccus", price: 70.00 },
        { id: "hidratacao-facial", price: 55.00 },
        { id: "limpeza-de-pele", price: 85.00 },
        { id: "linft-radiofrequencia", price: 75.00 },
        { id: "massagem-modeladora", price: 66.00 }
    ];

    let total = 0;
    const totalDisplay = document.getElementById("total-display");

    // Função para calcular e atualizar o total
    function updateTotal() {
        total = 0;
        services.forEach(service => {
            const checkbox = document.getElementById(service.id);
            if (checkbox && checkbox.checked) {
                total += service.price;
            }
        });
        totalDisplay.textContent = total.toFixed(2).replace(".", ","); // Exibe no formato brasileiro
    }

    // Adiciona o evento de mudança a cada checkbox
    services.forEach(service => {
        const checkbox = document.getElementById(service.id);
        if (checkbox) {
            checkbox.addEventListener("change", updateTotal);
        }
    });

    // Atualiza o total ao carregar a página
    updateTotal();
});

document.addEventListener("DOMContentLoaded", function () {
    // Lista de serviços e preços
    const services = [
        { id: "argiloterapia", name: "Argiloterapia + Hidratação Corporal", price: 65.00 },
        { id: "banho-de-lua", name: "Banho de Lua", price: 85.00 },
        { id: "corrente-russa", name: "Corrente Russa (por área)", price: 46.00 },
        { id: "criolipolise-1-area", name: "Criolipólise com contraste (1 área por sessão)", price: 150.00 },
        { id: "criolipolise-2-areas", name: "Criolipólise com contraste (2 áreas por sessão)", price: 250.00 },
        { id: "drenagem-linfatica-corporal", name: "Drenagem linfática corporal manual (por área)", price: 65.00 },
        { id: "drenagem-linfatica-pos-cirurgica", name: "Drenagem linfática corporal pós-cirúrgica (por área)", price: 70.00 },
        { id: "drenagem-linfatica-facial", name: "Drenagem linfática facial", price: 40.00 },
        { id: "esfoliacao-hidratacao", name: "Esfoliação + Hidratação Corporal", price: 60.00 },
        { id: "harmonizacao-heccus", name: "Harmonização Corporal com HECCUS (por área)", price: 70.00 },
        { id: "hidratacao-facial", name: "Hidratação Facial com Eletroterapia", price: 55.00 },
        { id: "limpeza-de-pele", name: "Limpeza de Pele", price: 85.00 },
        { id: "linft-radiofrequencia", name: "Linft Facial com Rádio Frequência", price: 75.00 },
        { id: "massagem-modeladora", name: "Massagem Modeladora Localizada (por área)", price: 66.00 }
    ];

    // Atualizar total e salvar seleção
    function updateSelection() {
        const selectedServices = [];
        let total = 0;

        services.forEach(service => {
            const checkbox = document.getElementById(service.id);
            if (checkbox.checked) {
                selectedServices.push(service);
                total += service.price;
            }
        });

        // Atualiza o total exibido
        document.getElementById("total-display").textContent = total.toFixed(2);

        // Salva os serviços selecionados no localStorage
        localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
    }

    // Adiciona eventos aos checkboxes
    services.forEach(service => {
        const checkbox = document.getElementById(service.id);
        if (checkbox) {
            checkbox.addEventListener("change", updateSelection);
        }
    });

    // Atualiza total na primeira carga (caso já tenha algo salvo)
    updateSelection();
});

