<?php
require_once "conexao.php";

// Verificar se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitizar e validar os dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $senha = $_POST["senha"]; // Não é necessário sanitizar, pois será criptografada

    // Criptografar a senha (melhor prática)
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Preparar e executar a consulta SQL segura para inserção de usuário
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nome, $email, $senhaHash);

    if ($stmt->execute()) {
        echo "Usuário cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar usuário: " . $stmt->error;
    }

    // Fechar o statement
    $stmt->close();
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
