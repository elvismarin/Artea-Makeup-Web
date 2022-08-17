<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['Phone_number'];
$message = $_POST['comment'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = '';
$asunto = 'Mensaje de cliente de Artea';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:./Secciones/Contacto.html");
?>