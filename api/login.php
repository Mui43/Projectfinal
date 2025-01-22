<?php
    include('config.db.php');
    $data = json_decode(file_get_contents("php://input"));

    $username = $data -> username;
    $password = $data -> password;
    
    $sql = "SELECT * FROM members WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user["password"])) {
            echo json_encode(["message" => "Login successfully","success" => true,"token"=> bin2hex(random_bytes(16))]);
        } else {
            echo json_encode(["message" => "Wrong password","success" => false]);
        }
    }else{
        echo json_encode(["message" => "User not found","success" => false]);
    }
    
    $conn->close();
?>