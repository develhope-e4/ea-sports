<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Configuración de la base de datos
$servername = "localhost";
$user_id = "tu id";
$username = "tu_usuario";
$email = "tu_email";
$password = "tu_contraseña";
$dbname = "ea-sports_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener todos los usuarios
$sql = "SELECT id, username, email FROM usuarios";
$result = $conn->query($sql);

// Convertir resultados a un array
$users = array();
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

// Enviar resultados como JSON
header('Content-Type: application/json');
echo json_encode($users);

// Cerrar conexión
$conn->close();
