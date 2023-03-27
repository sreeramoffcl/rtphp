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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css" rel="stylesheet" />
<link href="//cdn.datatables.net/1.13.3/css/jquery.dataTables.min.css" rel = "stylesheet"/>
<link href="//cdn.datatables.net/keytable/2.8.1/css/keyTable.dataTables.min.css" rel = "stylesheet"/>
<script src="//cdn.datatables.net/1.13.3/js/jquery.dataTables.min.js"></script>
<script src="//cdn.datatables.net/keytable/2.8.1/js/dataTables.keyTable.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-hotkeys@0.2.2/jquery-hotkeys.min.js"></script>
    
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
              <a href="cm.php" class="sub-item">Customer Master</a>
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
            Material Inward
          </div>
        </div>
        
        <form id="input-form" method="post" action="#">
          <div class="input">
          <label>Sl. No.</label>
          <input type="text" name="sl-no" id="sl-no">
          
          <label for="cust_name">Customer</label>
          <select type="text" name="cust-name" id="cust-name" class="selectpicker" data-live-search="true">
            
          </select>
          
          <label>DC No.</label>
          <input type="text" name="dc-no" id="dc-no">
          
          <label>DC Date</label>
          <input type="date" name="dc-date" id="dc-date" max="<?= date('Y-m-d') ?>">
          
        </form>
       
        <div class="button">
        <button id="add-button" type="button" form="input-form" name="add">Add</button>
          <button id="reshoot-button" type="button" form="input-form" name="reshoot">Reshoot (Ctrl+O)</button>
        </div>
        
        <div class="table-container">

        
          <!-- table  -->
        <table id="transactions-table">
          <thead>
            <tr>
              <th>RT no.</th>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Drawing No.</th>
              <th>Weight</th>
              <th>Heat No.</th>
              <th>Grade</th>
              <th>Fresh / Reshoot</th>
              <th>Action</th>
            </tr>
            
          </thead>
          <tbody id="trans-table-body">
            <tr class="rt-data-row">
              <td><input type="text" id="rt-no" name="rt-no" autocomplete="off"></td>
              <td><input type="text" id="prod-code" name="prod-code" autocomplete="off"></td>
              <td><input type="text" id="prod-name" name="prod-name" autocomplete="off"></td>
              <td><input type="text" id="draw-no" name="draw-no" autocomplete="off"></td>
              <td><input type="text" id="weight" name="weight" autocomplete="off"></td>
              <td><input type="text" id="heat-no" name="heat-no" autocomplete="off"></td>
              <td><input type="text" id="grade" name="grade" autocomplete="off"></td>
              <td><select id="fr" name="fr">
                <option value="fresh">Fresh</option>
                <option value="reshoot">Reshoot</option>
              </select></td> 
              
              <td><a href="#" id="add-rt-data"><i class="fa-solid fa-plus"></i></a></td>
            </tr>
            
          </tbody>
        </table>
        </div>
        </div>
        
      </div>
      <div class="info-table-container" id="product-table-container">
        
          <table class="info-table" id="product-table">
            <thead>
              <tr>
                <th>Product Code</th>
                <th>Item Code</th>
                <th>Drawing No</th>
                <th>Description</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
  
            </tbody>
          </table>
          <a href="#" class="cancel-infoTable" id="cancel-productTable">Close</a>
        </div>
        <div class="info-table-container" id="rt-table-container">
        <?php
          require 'connection.php';
          
          $select_query = "SELECT DISTINCT `year` FROM mi_rt_data";
          $result = $conn->query($select_query);
          $years = [];
          while($row = mysqli_fetch_assoc($result))
          {
              $years[] = $row;
          }

        ?>
        <select id="rt-year-dropdown" class="selectpicker" data-live-search="true">
        <?php  
          $currentYear = date("Y");
          echo '<option value="' . $currentYear . '">' . $currentYear . '</option>';
        
            // Replace this with your code to fetch all years from your MySQL table
            // for($i = 0; $i < count($years);$i++){
            //   echo '<option value="' . $years[$i]["year"] . '">' . $years[$i]["year"] . '</option>';
            // }
            foreach($years as $row){
              if($row["year"] != $currentYear){
                echo '<option value="' . $row["year"] . '">' . $row["year"] . '</option>';
              }
              
            }
            // while($row = $years){
            //   echo '<option value="' . $years[0][$i] . '">' . $row["year"] . '</option>';
            // // }
            // }
          ?>
        </select>
          <table class="info-table" id="rt-table">
            <thead>
              <tr>
                <th>RT No</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Drawing No</th>
                <th>Weight</th>
                <th>Heat No.</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
  
            </tbody>
          </table>
          <a href="#" class="cancel-infoTable" id="cancel-rtTable">Close</a>
        </div>
      
    </section>
    <link href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" rel="Stylesheet">
    
  
  <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js" ></script>
 
    <script src="js/mi.js"async></script>
  </body>
</html>