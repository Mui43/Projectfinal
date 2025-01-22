<?php

include('config.db.php');
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$name = $data->name;
$phone = $data->phone;
$password = password_hash($data->password,PASSWORD_DEFAULT);
$compassword = $data->compassword;

$sql = "INSERT INTO `members` (`username`, `name`, `phone`, `password`, `compassword`) 
VALUES ('$username', '$name', '$phone', '$password', '$compassword');";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "successfully"]);
} else {
    echo json_encode(["message" => "Failed" .$sql . "<br>" .$conn->error]);
}

$conn->close();

?>