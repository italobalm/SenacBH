function previewFoto(event) {
    const arquivo = event.target.files[0];
    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function(e) {
            const imagem = document.getElementById('fotoPerfil');
            imagem.src = e.target.result;  // Atualiza a imagem com o arquivo selecionado
        }
        leitor.readAsDataURL(arquivo);
    }
}

function confirmarFoto() {
    const preview = document.getElementById('fotoPreview').src;
    alert("Foto de perfil atualizada com sucesso!");
    console.log("Nova foto de perfil:", preview);
    // Aqui você pode adicionar lógica para enviar a foto ao servidor.
}


  
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
}
