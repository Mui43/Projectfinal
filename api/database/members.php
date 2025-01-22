<?php
    include("../config.db.php");
    $tabel = "CREATE TABLE members (
    id int(6) AUTO_INCREMENT COMMENT 'เลขที่',
    username varchar(100) COMMENT 'ชื่อผู้ใช้',
    name varchar(100) COMMENT 'ชื่อ-นามสกุล',
    phone varchar(100) COMMENT 'เบอร์โทรศัพท์',
    password varchar(8) COMMENT 'รหัสผ่าน',
    compassword varchar(8) COMMENT 'ยืนยันรหัสผ่าน',
    PRIMARY KEY (id)
    )";
    if($conn ->query($tabel ) === TRUE) {
        echo "DONE";
    }else{
        echo "Error" .$conn ->error;
    }

    $conn ->close();//ปิดฐานข้อมูล

?>