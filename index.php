<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- <title>Responsive Sidebar Menu</title> -->
    <link rel="stylesheet" href="styles/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/font-awesome/css/all.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
    <title>RT Software</title>
  </head>
  <body>
    <nav>
      <div class="logo-name">
        <div class="logo-image">
          <img src="styles/r.png" alt="">
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
              <a href="#" class="sub-item">Product Master</a>
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
    <section class="dashboard">
      <div class="top">
        <i class="fa-solid fa-chevron-left sidebar-toggle"></i>
      </div>

      <div class="dash-content">
        <div class="overview">
          <div class="dash-heading">
            Product Master
          </div>
        </div>
        <form id="input-form" method="post" action="/functions.php">
          <div class="input">
          <label>Product Code</label>
          <input type="text" name="prod_code" id="prod_code">
          
          <label>Item Code</label>
          <input type="text" name="item_code" id="item_code">
          
          <label>Drawing No.</label>
          <input type="text" name="draw_no" id="draw_no">
          <div id="new-line"></div>
          <label>Description</label>
          <input type="text" name="descr" id="descr">
          
          <label>Weight</label>
          <input type="number" name="weight" id="weight">
          </div>
          
        </form>
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

        $select_query = "SELECT id, prod_code, item_code,draw_no, descr, `weight` FROM prod_master";
        $result = $conn->query($select_query);
        ?>
        
        <div class="button">
          <button id="add-button" type="button" form="input-form" name="add">Add Record</button>
        </div>

        <input class="search-box" id="search-box" type="text" placeholder="Search...">
        <div class="table-container">
        <table id="table">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Item Code</th>
              <th>Drawing number</th>
              <th>Description</th>
              <th>Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <?php
              if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {

                echo "<tr>";
                      echo "<td>" . $row['prod_code'] . "</td><td>". $row['item_code'] . "</td><td>". $row['draw_no'] . "</td><td>". $row['descr'] . "</td><td>". $row['weight'] . "</td>";
                ?>
                    <td>
                      <a><i class="fa-solid fa-pencil"></i></a>&nbsp;
                      <a><i class="fa-solid fa-trash"></i></a>
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
        <div class="footer">
        <div class="button update-button">
          <button type="button">Update</button>
        </div>
        </div>
        
      </div>
      
    </section>
    <script src="script.js" async></script>
    
    <script>
      $(document).ready(function(){
        
        $(".sub-btn").click(function(){
          $(this).next(".sub-menu").slideToggle();
          $(this).find(".dropdown").toggleClass("rotate");
          $(this).toggleClass("active"); 
        });
        $(".sidebar-toggle").click(function(){
          $(".sub-btn").next(".sub-menu").slideUp();
          $(".sub-btn").find(".dropdown").removeClass("rotate");
          $(".sub-btn").removeClass("active");
          
        })

        $("#search-box").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });


      })
    </script>
  </body>
</html>