<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Recibe datos del usuario desde React
$data = json_decode(file_get_contents('php://input'), true);

// Validación de datos
if (!isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
  echo json_encode(['success' => false, 'error' => 'Datos incompletos']);
  exit;
}
$servername = "localhost";
$username = "wilmer";
$password = "123";
$dbname = "ea-sports_db";

// Conecta con la base de datos (reemplaza con tus credenciales)
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
  die('Error de conexión: ' . $conn->connect_error);
}

// Inserta el usuario en la base de datos con sentencias preparadas
$username = $conn->real_escape_string($data['username']);
$email = $conn->real_escape_string($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $username, $email, $password);

if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => $conn->error]);
}

$stmt->close();
$conn->close();
?>