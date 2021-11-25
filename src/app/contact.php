<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$postdata = filte_get_contents("php://input");
$request = json_decode($postdata);

echo($request);
$firstName = $request->firstName;
$lastName = $request->lastName;
$email = $request->email;
$message = $request->message;

$name = $firstName." ".$lastName;

$to ="lewis@localhost";
$email_subject = "Message from Contact Form".$name;
$email_body =""




mail($to, $email_subject, $email_body, $headers);
?>