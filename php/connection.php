<?php

// CONEXÃO 

  define('SERVIDOR', '192.168.0.149:8080');
  define('BANCO', 'passare');
  define('USUARIO', 'root');
  define('SENHA', '');

//=====================================//

  try {
    $connect = new PDO('mysql:host='.SERVIDOR.';dbname='.BANCO, USUARIO, SENHA, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Conexão estabelecida!!!';
  } catch (PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
  }

  $stmt = $connect->prepare('');
  $stmt->execute();
  
  date_default_timezone_set('America/Sao_Paulo');

?>
<script>
  
</script>

