<?php
    include_once("config.db.php");
    $data = [];
    $sql_read = "SELECT * FROM members";

    $qr_read = mysqli_query($conn, $sql_read);

    while($qr = mysqli_fetch_object($qr_read)){
        $data[] = $qr;
    }

    echo json_encode($data);
    echo mysqli_error($conn);


?>