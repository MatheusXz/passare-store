<?php

require('connection.php');

$nome = $_POST['nome'];
$sobre_nome = $_POST['sobre_nome'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$senha = $_POST['senha'];

$statement = $connect->prepare('INSERT INTO cadastro_login (nome, sobre_nome, email, cpf, senha) 
VALUES 
(:nome, :sobre_nome, :email, :senha)');

$statement->bindValue(':nome', $nome);
$statement->bindValue(':sobre_nome', $sobre_nome);
$statement->bindValue(':email', $email);
$statement->bindValue(':cpf', $cpf);
$statement->bindValue(':senha', $senha);

$statement->execute();


?>