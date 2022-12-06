<?php
    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "rt_data";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
    
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
    mysqli_close($conn);

?>