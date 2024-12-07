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
