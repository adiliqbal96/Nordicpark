<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $type = $input['type'] ?? 'contact'; // 'complaint', 'photo', or 'contact'

    if ($type === 'complaint' || $type === 'photo') {
        $ticketNumber = $input['ticketNumber'] ?? '';
        $licensePlate = $input['licensePlate'] ?? '';
        $email = $input['email'] ?? '';
        $message = $input['message'] ?? '';

        if (!$ticketNumber || !$licensePlate || !$email) {
            http_response_code(400);
            echo json_encode(['error' => 'Alle påkrævede felter skal udfyldes.']);
            exit;
        }

        // Besked er valgfri for fotodokumentation
        if ($type === 'complaint' && !$message) {
            http_response_code(400);
            echo json_encode(['error' => 'Beskrivelse af klagen mangler.']);
            exit;
        }

        $to = "kontakt@nordicpark.eu";
        $subject = ($type === 'complaint' ? "Klage over afgift: " : "Anmodning om fotodokumentation: ") . $ticketNumber;

        $body = "Ny henvendelse fra hjemmesiden:\n\n";
        $body .= "Type: " . ($type === 'complaint' ? "Klage" : "Fotodokumentation") . "\n";
        $body .= "Afgiftsnummer: $ticketNumber\n";
        $body .= "Nummerplade: $licensePlate\n";
        $body .= "E-mail: $email\n\n";
        $body .= "Besked:\n$message\n";

        $headers = "From: NordicPark Website <noreply@nordicpark.eu>\r\n";
        $headers .= "Reply-To: $email\r\n";

    } else {
        // General contact
        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $company = $input['company'] ?? 'Ikke angivet';
        $message = $input['message'] ?? '';

        if (!$name || !$email || !$message) {
            http_response_code(400);
            echo json_encode(['error' => 'Navn, e-mail og besked skal udfyldes.']);
            exit;
        }

        $to = "info@nordicpark.eu";
        $subject = "Ny kontakthenvendelse fra: $name";

        $body = "Ny kontakthenvendelse modtaget fra hjemmesiden:\n\n";
        $body .= "Navn: $name\n";
        $body .= "E-mail: $email\n";
        $body .= "Virksomhed: $company\n\n";
        $body .= "Besked:\n$message\n";

        $headers = "From: NordicPark Website <noreply@nordicpark.eu>\r\n";
        $headers .= "Reply-To: $email\r\n";
    }

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => 'Din henvendelse er sendt. Vi vender tilbage hurtigst muligt.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Der opstod en fejl under afsendelse af e-mailen.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>