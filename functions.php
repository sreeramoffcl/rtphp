<?php
    require 'connection.php';
    
    $function = $_POST['function'];
    if ($function == 1){
        $add_prod_code = $_POST['prod_code'];
        $add_item_code = $_POST['item_code'];
        $add_draw_no = $_POST['draw_no'];
        $add_desc = $_POST['descr'];
        $add_weight = $_POST['weight'];
    
        $sqlquery = "INSERT INTO `prod_master`
        (`prod_code`, `item_code`,`draw_no`, `descr`, `weight`)
         VALUES ('$add_prod_code', '$add_item_code', '$add_draw_no', '$add_desc', '$add_weight')";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
            echo "<script>console.log('register.php','_self')</script>";

        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    elseif ($function == 2){
        $del_id = $_POST['id'];
        $sqlquery = "DELETE FROM `prod_master` WHERE `id`= '$del_id'";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
            
        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    elseif ($function == 3){
        $save_prod_code = $_POST['prod_code'];
        $save_item_code = $_POST['item_code'];
        $save_draw_no = $_POST['draw_no'];
        $save_desc = $_POST['descr'];
        $save_weight = $_POST['weight'];
        $save_id = $_POST['id'];
    
        $sqlquery = "UPDATE `prod_master` SET
            `prod_code` = '$save_prod_code',
            `item_code` = '$save_item_code',
            `draw_no` = '$save_draw_no',
            `descr` = '$save_desc', 
            `weight` = '$save_weight' 
            WHERE `id` = '$save_id'";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
            echo "<script>console.log('register.php','_self')</script>";

        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    elseif ($function == 11){
        $add_cust_code = $_POST['cust_code'];
        $add_cust_name = $_POST['cust_name'];
        $add_gst = $_POST['gst'];
        $add_pan = $_POST['pan'];
        $add_add_1 = $_POST['add_1'];
        $add_add_2 = $_POST['add_2'];
        $add_add_3 = $_POST['add_3'];
        $add_pincode = $_POST['pincode'];
    
        $sqlquery = "INSERT INTO `cust_master`
        (`cust_code`, `cust_name`,`gst`, `pan`, `add_1`, `add_2`, `add_3`, `pincode`)
         VALUES ('$add_cust_code', '$add_cust_name', '$add_gst', '$add_pan', '$add_add_1', '$add_add_2', '$add_add_3', '$add_pincode')";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
            echo "<script>console.log('register.php','_self')</script>";

        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    elseif ($function == 12){
        $del_id = $_POST['id'];
        $sqlquery = "DELETE FROM `cust_master` WHERE `id`= '$del_id'";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
            
        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    elseif ($function == 13){
        $save_id = $_POST['id'];
        $save_cust_code = $_POST['cust_code'];
        $save_cust_name = $_POST['cust_name'];
        $save_gst = $_POST['gst'];
        $save_pan = $_POST['pan'];
        $save_add_1 = $_POST['add_1'];
        $save_add_2 = $_POST['add_2'];
        $save_add_3 = $_POST['add_3'];
        $save_pincode = $_POST['pincode'];
    
        $sqlquery = "UPDATE `cust_master` SET
            `cust_code` = '$save_cust_code',
            `cust_name` = '$save_cust_name',
            `gst` = '$save_gst',
            `pan` = '$save_pan', 
            `add_1` = '$save_add_1', 
            `add_2` = '$save_add_2',
            `add_3` = '$save_add_3',
            `pincode` = '$save_pincode'
            WHERE `id` = '$save_id'";
        
        if ($conn->query($sqlquery) === true) 
        { 
            echo "sucess";
        } 
        else
        { 
            echo "ERROR: Could not able to execute $sql. "
            .$conn->error;
        } 
    }
    mysqli_close($conn);

?>