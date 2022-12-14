<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- <title>Responsive Sidebar Menu</title> -->
    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fonts/font-awesome/css/all.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    
    <title>RT Software</title>
  </head>
  <body>
  <!-- Navigation -->
    <nav id="nav">
      <div class="logo-name">
        <div class="logo-image">
          <img src="img/r.png" alt="">
        </div>
        <span class="logo_name">Menu</span>
      </div>
      <div class="menu-items">
        <ul class="nav-links">
          <li class="link">
            <a href="#">
            <i class="fa-solid fa-house nav-icon"></i>
              <span class="link-name">Dashboard</span>
            </a>
          </li>
          <li class="link">
            <a href="#" class="sub-btn">
            <i class="fa-solid fa-book nav-icon"></i>
              <span class="link-name">Masters<i class="fa-solid fa-caret-right dropdown"></i></span>
            </a>
            <div class="link-name sub-menu">
              <a href="pm.php" class="sub-item">Product Master</a>
              <a href="#" class="sub-item">Customer Master</a>
            </div>
          </li>
          <li class="link">
            <a href="#" class="sub-btn">
            <i class="fa-solid fa-arrow-right-arrow-left nav-icon"></i>
              <span class="link-name">Transactions<i class="fa-solid fa-caret-right dropdown"></i></span>
            </a>
            <div class="link-name sub-menu">
              <a href="#" class="sub-item">Material Inward</a>
              <a href="#" class="sub-item">Material Outward</a>
            </div>
          </li>
          <li class="link">
            <a href="#">
            <i class="fa-solid fa-chart-pie nav-icon"></i>
              <span class="link-name">Reports</span>
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
    <!-- main page  -->
    <section class="dashboard">
      <div class="top">
        <i class="fa-solid fa-chevron-left sidebar-toggle"></i>
      </div>

      <div class="dash-content">
        <div class="overview">
          <div class="dash-heading">
            Customer Master
          </div>
        </div>
        <form id="input-form" method="post" action="/functions.php">
          <div class="input">
          <label>Customer Code</label>
          <input type="text" name="cust_code" id="cust_code">
          
          <label>Customer Name</label>
          <input type="text" name="cust_name" id="cust_name">
          
          <label>GST</label>
          <input type="text" name="gst" id="gst">
          
          <label>PAN</label>
          <input type="text" name="pan" id="pan">
          <div></div>
          <label>Address Line 1</label>
          <input type="text" name="add_1" id="add_1">
          <label>Address Line 2</label>
          <input type="text" name="add_2" id="add_2">
          <label>Address Line 3</label>
          <input type="text" name="add_3" id="add_3">
          <div></div>
          <label>Pincode</label>
          <input type="text" name="pincode" id="pincode">
          </div>
          
        </form>
        <?php
        require 'connection.php';
        
        $select_query = "SELECT id, cust_code, cust_name,add_1, add_2, add_3, pincode, gst,pan,remarks FROM cust_master";
        $result = $conn->query($select_query);
        ?>
        
        <div class="button">
          <button id="add-button" type="button" form="input-form" name="add">Add Record</button>
        </div>

        <input class="search-box" id="search-box" type="text" placeholder="Search...">
        <div class="table-container">
          <!-- table  -->
        <table id="table">
          <thead>
            <tr>
              <th>Customer Code</th>
              <th>Customer Name</th>
              <th>GST</th>
              <th>PAN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="tbody">
             <?php
              if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {

                echo "<tr id=". $row['id'] . ">";
                      echo "<td class='row-item'>" . $row['cust_code'] . "</td><td class='row-item'>". $row['cust_name'] . "</td><td class='row-item'>". $row['gst'] . "</td><td class='row-item'>". $row['pan'] . "</td>";
                ?>
                    <td class="row-btn">
                      <a class="edit-row"><i class="fa-solid fa-pencil"></i></a>&nbsp;
                      <a class="delete-row"><i class="fa-solid fa-trash"></i></a>
                    </td>
                    </tr>
                  <?php

                }
                  } else {
                    echo "No results";
                  }
              ?> 
          </tbody>
        </table>
        </div>
      </div>
      
    </section>
    <script src="js/cm.js" page="cm" async></script>
  </body>
</html>