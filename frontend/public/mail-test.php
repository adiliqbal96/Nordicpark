<?php
// A simple test script to check if One.com's mail server is reachable
// and if mail() works in isolation.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

$to = "kontakt@nordicpark.eu"; // Your actual incoming email
$subject = "Test from Diagnostics Script";
$message = "This is a test message to verify if mail() is functional on the server.";
$headers = "From: noreply@nordicpark.eu\r\nReply-To: kontakt@nordicpark.eu";

$result = mail($to, $subject, $message, $headers);

echo json_encode([
    'success' => $result,
    'message' => $result ? "Mail returned true" : "Mail returned false",
    'php_version' => phpversion(),
    'sendmail_path' => ini_get('sendmail_path')
]);
?>