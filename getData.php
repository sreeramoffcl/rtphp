<?php

    require "connection.php";
    $id = $_POST["id"];

    $select_query = "SELECT cust_code, cust_name,add_1, add_2, add_3, pincode, gst,pan,remarks FROM cust_master WHERE id = $id";

    $result = $conn->query($select_query);
    $rows = array();

    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    print json_encode($rows);

?>