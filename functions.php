<?php
    require 'connection.php';
    
    $function = $_POST['function'];
    switch($function){
        case 1:
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
            break;
        case 2:
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
        break;
        case 3:
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
        break;
        case 11:
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
        break;
        case 12:
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
        break;
        case 13:
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
        break;
        case 21:

            $sl_no = $_POST["sl_no"];
            $cust_name = $_POST["cust"];
            $dc_no = $_POST["dc_no"];
            $dc_date = $_POST["dc_date"];
        
            $sqlquery_dc = "INSERT INTO `mi_dc_data`
            (`sl_no`, `customer`,`dc_no`, `dc_date`)
            VALUES ('$sl_no', '$cust_name', '$dc_no', '$dc_date')";

            if ($conn->query($sqlquery_dc) === true) 
            { 
                echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
                echo "<script>console.log('register.php','_self')</script>";

            } 
            else
            { 
                echo "ERROR: Could not able to execute $sql. "
                .$conn->error;
                
            }
        break;
        case 22:
            $rt_no = $_POST["rt_no_val"];
            $prod_code = $_POST["pc_val"];
            $draw_no = $_POST["draw_no_val"];
            $prod_name = $_POST["pn_val"];
            $weight = $_POST["weight_val"];
            $heat_no = $_POST["heat_no_val"];
            $grade = $_POST["grade_val"];
            $fresh_reshoot = $_POST["fr_val"];
            $sl_no = $_POST["sl_no"];
            $dc_no = $_POST["dc_no"];
            $cust_name = $_POST["cust"];
            $year = $_POST["year"];
            $dc_date = $_POST["dc_date"];
        
            $sqlquery_rt = $conn->prepare("INSERT INTO `mi_rt_data`
            (`rt_no`, `prod_code`,`prod_name`, `draw_no`, `weight`, `heat_no`, `grade`, `fresh_reshoot` ,`year` ,`sl_no`, `dc_no`, `cust_name`,`inward`)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");

            for($i = 0; $i < count($rt_no); $i++) {
                $sqlquery_rt->bind_param("ssssdssssssss", $rt_no[$i], $prod_code[$i], $prod_name[$i], $draw_no[$i], $weight[$i], $heat_no[$i], $grade[$i], $fresh_reshoot[$i],$year, $sl_no, $dc_no, $cust_name, $dc_date);
                $sqlquery_rt->execute();
            }
            if($conn->error){
                echo "ERROR: Could not able to execute ".$conn->error;
            }
       
        break;
        case 23:

            $sl_no = $_POST["sl_no"];
            $cust_name = $_POST["cust"];
            $dc_no = $_POST["dc_no"];
            $dc_date = $_POST["dc_date"];
        
            $sqlquery_dc = "UPDATE `mi_dc_data` SET `customer` = '$cust_name',`dc_no` = '$dc_no', `dc_date` = '$dc_date' WHERE `sl_no` = '$sl_no'";

            if ($conn->query($sqlquery_dc) === true) 
            { 
                echo '<div class="container"><h4>Your Form successfully submitted!</h4></div>';
                echo "<script>console.log('register.php','_self')</script>";

            } 
            else
            { 
                echo "ERROR: Could not able to execute $sql. "
                .$conn->error;
                
                
            }
            //echo "".$cust_name;
        break;
        case 24:
            $rt_no = $_POST["rt_no_val"];
            $prod_code = $_POST["pc_val"];
            $draw_no = $_POST["draw_no_val"];
            $prod_name = $_POST["pn_val"];
            $weight = $_POST["weight_val"];
            $heat_no = $_POST["heat_no_val"];
            $grade = $_POST["grade_val"];
            $fresh_reshoot = $_POST["fr_val"];
            $sl_no = $_POST["sl_no"];
            $dc_no = $_POST["dc_no"];
            $cust_name = $_POST["cust"];
            $year = $_POST["year"];
            $dc_date = $_POST["dc_date"];
        
            $sqlquery_rt = $conn->prepare("UPDATE `mi_rt_data` SET `rt_no` = ?, `prod_code`= ?,`prod_name`= ?, `draw_no`= ?, `weight`= ?, `heat_no`= ?, `grade`= ?, `fresh_reshoot`= ? ,`year`=?, `dc_no`= ?, `cust_name`= ?,`inward`= ? WHERE sl_no = '$sl_no'");

            for($i = 0; $i < count($rt_no); $i++) {
                $sqlquery_rt->bind_param("ssssssssssss", $rt_no[$i], $prod_code[$i], $prod_name[$i], $draw_no[$i], $weight[$i], $heat_no[$i], $grade[$i], $fresh_reshoot[$i],$year, $dc_no, $cust_name, $dc_date);
                $sqlquery_rt->execute();
            }
            if($conn->error){
                echo "ERROR: Could not able to execute ".$conn->error;
            }
       
        break;

    }
    
    mysqli_close($conn);

?>