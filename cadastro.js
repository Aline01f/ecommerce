document.getElementById("registreForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome && email && senha) {
        // Simular o envio dos dados para o backend e salvar no banco de dados
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Senha:", senha);

        // Redirecionar para a página de login após o cadastro
        window.location.href = "login.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
