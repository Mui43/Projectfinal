<?php
include_once("config.db.php"); // ดึงไฟล์เชื่อมต่อฐานข้อมูลมาใช้งาน

$dataJSON = json_decode(file_get_contents("php://input"), true);
$message = [];

// ประกาศตัวแปร สำหรับเพิ่มข้อมูล
$name = $dataJSON['name'];
$created_at = $dataJSON['created_at'];
$status = $dataJSON['status'];

// เขียนคำสั่งในการเพิ่มข้อมูล
$sql = "INSERT INTO `menus` (`status`, `name`, `created_at`) VALUES ('$status' , '$name', NOW());";

// รันคำสั่ง
$qr_insert = mysqli_query($conn, $sql);

if ($qr_insert) {
    // เพิ่มข้อมูลได้
    http_response_code(201);
    $message['status'] = "เพิ่มข้อมูลสำเร็จ";
} else {
    // เพิ่มข้อมูลไม่ได้
    http_response_code(422);
    $message['status'] = "เพิ่มข้อมูลไม่สำเร็จ: " . mysqli_error($conn);
}
// ส่งข้อมูลการดำเนินการกลับไป
echo json_encode($message);

?>