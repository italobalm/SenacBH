    document.addEventListener("DOMContentLoaded", function () {
        const photoInput = document.getElementById("profilePhotoInput");
        const preview = document.getElementById("profilePreview");
        const changePhotoBtn = document.getElementById("changePhotoBtn");

        // Exibir o seletor de arquivo ao clicar no botão
        changePhotoBtn.addEventListener("click", () => {
            photoInput.click();
        });

        // Atualizar a pré-visualização ao selecionar um arquivo
        photoInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });

  
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar-menu');
        sidebar.classList.toggle('open'); // Adiciona ou remove a classe "open"
    }
    