<?php
    include_once("config.db.php");
    $dataJSON = json_decode(file_get_contents('php://input'), true);
    $message = array();

    $id = $dataJSON['id'];
    $status = $dataJSON['status'];

    $sql_update = "UPDATE `menus` SET `status` = '$status' WHERE `menus`.`id` = '$id';";
    $qr_update = mysqli_query($conn,$sql_update);

    if($qr_update){
        //เพิ่มข้อมูลได้
        http_response_code(201);
        $message['status'] = "แก้ไขข้อมูลสำเร็จ";
    }else{
        //เพิ่มข้อมูลไม่ได้
        http_response_code(422);
        $message['status'] = "แก้ไขข้อมูลไม่สำเร็จ";
    }
    //ส่งข้อมูลการดำเนินการกลับไป
    echo json_encode($message);
    echo mysqli_error($conn);

?>