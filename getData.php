<?php

    require "connection.php";
    if ($_POST["function"] == 1){
        $id = $_POST["id"];

        $select_query = "SELECT cust_code, cust_name,add_1, add_2, add_3, pincode, gst,pan,remarks FROM cust_master WHERE id = $id";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        print json_encode($rows);
    
    }
    else if ($_POST["function"] == 2){
       
        $select_query = "SELECT cust_name FROM cust_master";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        print json_encode($rows);
    
    }
    else if ($_POST["function"] == 3){
        $year = date("Y");
       
        $select_query = "SELECT COUNT(*) FROM mi_dc_data WHERE year=$year";
    
        $result = $conn->query($select_query);
        $sl_no = mysqli_fetch_array($result)[0]+1;
        $no = $sl_no."/".$year;
       
        print $no;
    
    }
    else if ($_POST["function"] == 4){
       
        $select_query = "SELECT prod_code, item_code, draw_no, descr, `weight` FROM prod_master";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        print json_encode($rows);
    
    }
    else if ($_POST["function"] == 5){
        $year = $_POST["year"];
        $select_query = "SELECT rt_no, prod_code, prod_name, draw_no, `weight`, heat_no, grade FROM mi_rt_data WHERE `year` = '$year' ORDER BY `year`";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        print json_encode($rows);
        //print "".$conn->error
    }
    else if ($_POST["function"] == 6){
        $sl_no = $_POST["sl_no"];
       
        $select_query = "SELECT rt_no, prod_code, prod_name, draw_no, `weight`, heat_no, grade, fresh_reshoot FROM mi_rt_data WHERE sl_no = '$sl_no'";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        if($conn->error){
            echo "ERROR: Could not able to execute ".$conn->error;
        }
        print json_encode($rows);
        //print "".$sl_no;
    }
    else if ($_POST["function"] == 7){
        $sl_no = $_POST["sl_no"];
       
        $select_query = "SELECT customer, dc_no, dc_date FROM mi_dc_data WHERE sl_no = '$sl_no'";
    
        $result = $conn->query($select_query);
        $rows = array();
    
        while($r = mysqli_fetch_assoc($result)){
            $rows[] = $r;
        }
        if($conn->error){
            echo "ERROR: Could not able to execute ".$conn->error;
        }
        print json_encode($rows);
        //print "".$sl_no;
    }
   
?>