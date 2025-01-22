<?php
    include('config.db.php');
    $data = json_decode(file_get_contents("php://input"));

    session_start();

    if(isset($_SESSION['id'])){
        session_unset();
        session_destroy();

        echo json_encode(array(
            "message" => "Logout successful"
        ));
    }else {
        echo json_encode(array(
            "message" => "No user logged in"
        ));
    }
?>