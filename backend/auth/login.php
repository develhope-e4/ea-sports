<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Recibe datos del usuario desde React
$data = json_decode(file_get_contents('php://input'), true);
error_log(print_r($data, true));

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

// Busca al usuario en la base de datos utilizando una consulta preparada
$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();
error_log('Hash de la contraseña almacenada: ' . $row['password']);

// Verifica la ejecución de la consulta
if ($result !== false) {
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Contraseña incorrecta']);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Usuario no encontrado']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Error en la consulta SQL']);
}

// Cierra la conexión
$stmt->close();
$conn->close();
?>
