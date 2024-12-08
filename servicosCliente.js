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
    const serviceItems = document.querySelectorAll(".service-item input");

    // Preços dos serviços
    const prices = {
        "argiloterapia": 65.00,
        "banho-de-lua": 85.00,
        "corrente-russa": 46.00,
        "criolipolise-1-area": 150.00,
        "criolipolise-2-areas": 250.00,
        "drenagem-linfatica-corporal": 65.00,
        "drenagem-linfatica-pos-cirurgica": 70.00,
        "drenagem-linfatica-facial": 40.00,
        "esfoliacao-hidratacao": 60.00,
        "harmonizacao-heccus": 70.00,
        "hidratacao-facial": 55.00,
        "limpeza-de-pele": 85.00,
        "linft-radiofrequencia": 75.00,
        "massagem-modeladora": 66.00
    };

    function updateData() {
        let total = 0;
        let selectedServices = [];

        serviceItems.forEach(item => {
            if (item.checked) {
                total += prices[item.id];
                selectedServices.push(item.nextSibling.textContent.trim());
            }
        });

        // Armazenar no localStorage
        localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
        localStorage.setItem("totalAmount", total.toFixed(2));
    }

    // Atualizar os dados ao marcar/desmarcar um serviço
    serviceItems.forEach(item => {
        item.addEventListener("change", updateData);
    });
});