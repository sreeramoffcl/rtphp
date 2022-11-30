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
    
    $prod_code = $_POST['prod_code'];
    $item_code = $_POST['item_code'];
    $draw_no = $_POST['draw_no'];
    $desc = $_POST['descr'];
    $weight = $_POST['weight'];
   
    $sqlquery = "INSERT INTO `prod_master`(`prod_code`, `item_code`,`draw_no`, `descr`, `weight`) VALUES ('$prod_code', '$item_code', '$draw_no', '$desc', '$weight')";
    
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
    mysqli_close($conn);

?>