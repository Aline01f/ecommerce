document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email && senha) {
      // Simular a validação do login com o backend
      console.log("Email:", email);
      console.log("Senha:", senha);

      // Redirecionar para a página inicial de compras após o login
      window.location.href = "index.html";
  } else {
      alert("Por favor, preencha todos os campos.");
  }
});
