window.onload = function() {
    // Acessa o formulário e o elemento de erro
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Verifica se o formulário e o elemento de erro estão presentes
    if (!loginForm || !errorMessage) {
        console.error('Erro: Um ou mais elementos não foram encontrados!');
        return; // Se algum elemento não foi encontrado, a execução do script é interrompida
    }

    const correctEmailAdm = "adm";
    const correctPasswordAdm = "12345";

    const correctEmailFuncionario = "funcionario";
    const correctPasswordFuncionario = "12345";

    const correctEmailCliente = "cliente";
    const correctPasswordCliente = "12345";

    // Escuta o evento de envio do formulário
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verifica as credenciais
        if (email === correctEmailAdm && password === correctPasswordAdm) {
            // Redireciona para 'index.html' se as credenciais estiverem corretas
            window.location.href = 'calendario.html';

        } else if (email === correctEmailFuncionario && password === correctPasswordFuncionario) {
            // Redireciona para 'index.html' se as credenciais estiverem corretas
            window.location.href = 'calendarioFuncionario.html';
        
        } else if (email === correctEmailCliente && password === correctPasswordCliente) {
            // Redireciona para 'index.html' se as credenciais estiverem corretas
            window.location.href = 'agendarCliente.html';
 
        
        } else {
            // Exibe a mensagem de erro se as credenciais estiverem incorretas
            errorMessage.style.display = 'block';
        }
    });
};
