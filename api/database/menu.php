<?php
    include("../config.db.php");
    $tabel = "CREATE TABLE menus(
    id int(6) AUTO_INCREMENT COMMENT 'รหัสเมนู',
    name varchar(255) COMMENT 'ชื่อเมนู',
    created_at TIMESTAMP NOT NULL COMMENT 'วันที่บันทึกรายการ',
    status VARCHAR(50) COMMENT 'สถานะ',
    PRIMARY KEY (id)
    )";
    if($conn ->query($tabel ) === TRUE) {
        echo "DONE";
    }else{
        echo "Error" .$conn ->error;
    }

    $conn ->close();//ปิดฐานข้อมูล

?>