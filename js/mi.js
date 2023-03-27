// jshint esversion:6
$(document).ready(function(){
    const body = document.querySelector("body"),
    sidebar = body.querySelector("nav");

    // for nav
    var sidebarToggle = body.querySelector(".sidebar-toggle");
    var linkName = body.querySelectorAll(".link");
    var subMenu = body.querySelectorAll(".sub-menu");
    var addButton = document.getElementById("add-button");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var rt_table;

    var rowFocus = 0;
    today = yyyy + '-' + mm + '-' + dd;
    $("#dc-date").val(today); // Set dc-date value to today's date

    function setMainVal(pc_val_sub,pn_val_sub,dn_val_sub,weight_val_sub){
        //console.log(pc_val_sub);
        $("#prod-code").val(pc_val_sub);
        $("#prod-name").val(pn_val_sub);
        $("#draw-no").val(dn_val_sub);
        $("#weight").val(weight_val_sub);
        //$("#heat-no").trigger("focus");
    
    }

    function fillSlNo(){
        $.ajax({
            url: "getData.php",
            type: "POST",
            data: {
                function: 3
            },
            //dataType:'json',
            success: function(result) {
                
                $("#sl-no").val(result);
                
            }
            
        });
    }

    function addData(e){
        
        var rt_no_val_inp = $('.rt-no-val').map(function() {
            return this.value;
        }).get();
        var pc_val_inp = $('.prod-code-val').map(function() {
            return this.value;
        }).get();
        var pn_val_inp = $('.prod-name-val').map(function() {
            return this.value;
        }).get();
        var draw_no_val_inp = $('.draw-no-val').map(function() {
            return this.value;
        }).get();
        var weight_val_inp = $('.weight-val').map(function() {
            return this.value;
        }).get();
        var heat_no_val_inp = $('.heat-no-val').map(function() {
            return this.value;
        }).get();
        var grade_val_inp = $('.grade-val').map(function() {
            return this.value;
        }).get();
        var fr_val_inp = $('.fr-val').map(function() {
            return $(this).find(":selected").text();
        }).get();
        //console.log(fr_val_inp);
        var year = new Date($("#dc-date").val()).getFullYear();
        var dc_data = {
            sl_no: $("#sl-no").val(),
            cust: $("#cust-name").val(),
            dc_no: $("#dc-no").val(),
            dc_date: $("#dc-date").val(),
            function: 21
        };

        var rt_data = {
            rt_no_val:rt_no_val_inp,
            pc_val: pc_val_inp, 
            pn_val:pn_val_inp, 
            draw_no_val:draw_no_val_inp, 
            weight_val:weight_val_inp, 
            heat_no_val:heat_no_val_inp, 
            grade_val:grade_val_inp, 
            fr_val:fr_val_inp,
            sl_no: $("#sl-no").val(),
            cust: $("#cust-name").val(),
            dc_no: $("#dc-no").val(),
            dc_date: $("#dc-date").val(),
            year : year,
            function: 22
        };

        $.ajax({
            url: "functions.php",
            type: "POST",
            data: dc_data,
            //dataType:'json',
            success: function(result) {
                console.log(result);
            }
        });

        $.ajax({
            url: "functions.php",
            type: "POST",
            data: rt_data,
            //dataType:'json',
            success: function(result) {
                console.log(result);
            }
        });

        
        
        fillSlNo();
        $("#dc-date").val(today); // Set dc-date value to today's date
        $("#dc-no").val("");
        $("#cust-name").val();
        
        $(".data-row").remove();
    }

    function updateData(e){
        
        var rt_no_val_inp = $('.rt-no-val').map(function() {
            return this.value;
        }).get();
        var pc_val_inp = $('.prod-code-val').map(function() {
            return this.value;
        }).get();
        var pn_val_inp = $('.prod-name-val').map(function() {
            return this.value;
        }).get();
        var draw_no_val_inp = $('.draw-no-val').map(function() {
            return this.value;
        }).get();
        var weight_val_inp = $('.weight-val').map(function() {
            return this.value;
        }).get();
        var heat_no_val_inp = $('.heat-no-val').map(function() {
            return this.value;
        }).get();
        var grade_val_inp = $('.grade-val').map(function() {
            return this.value;
        }).get();
        var fr_val_inp = $('.fr-val').map(function() {
            return $(this).find(":selected").text();
        }).get();
        //console.log(fr_val_inp);
        var year = new Date($("#dc-date").val()).getFullYear();
        var dc_data = {
            sl_no: $("#sl-no").val(),
            cust: $("#cust-name").val(),
            dc_no: $("#dc-no").val(),
            dc_date: $("#dc-date").val(),
            function: 23
        };

        var rt_data = {
            rt_no_val:rt_no_val_inp,
            pc_val: pc_val_inp, 
            pn_val:pn_val_inp, 
            draw_no_val:draw_no_val_inp, 
            weight_val:weight_val_inp, 
            heat_no_val:heat_no_val_inp, 
            grade_val:grade_val_inp, 
            fr_val:fr_val_inp,
            sl_no: $("#sl-no").val(),
            cust: $("#cust-name").val(),
            dc_no: $("#dc-no").val(),
            dc_date: $("#dc-date").val(),
            year : year,
            function: 24
        };
        console.log($("#cust-name").val());
        $.ajax({
            url: "functions.php",
            type: "POST",
            data: rt_data,
            //dataType:'json',
            success: function(result) {
                console.log(result);
            }
        });

        $.ajax({
            url: "functions.php",
            type: "POST",
            data: dc_data,
            //dataType:'json',
            success: function(result) {
                console.log(result);
            }
        });

    resetAll(e);
    }

    function resetAll(e){
        fillSlNo();
        
        $("#dc-date").val(today); // Set dc-date value to today's date
        $("#dc-no").val("");
        $("#cust-name").val();
        $(".data-row").remove();
        $("#update-button").attr("id", "add-button");
        $("#add-button").text("Add");
        $("#add-button").on("click", addData);
        $("#cancel-update-button").attr("id", "reshoot-button");
        $("#reshoot-button").text("Reshoot (Ctrl+O)");
    }

    // Add new row to table when the "Add Transaction" button is clicked
    $("#transactions-table").on("click", ".rt-data-row #add-rt-data", function(e) {
        e.preventDefault();
        //setMainVal();
        var rt_no_val = $("#rt-no").val();
        var pc_val = $("#prod-code").val();
        var pn_val = $("#prod-name").val();
        var dn_val = $("#draw-no").val();
        var weight_val = $("#weight").val();
        var hn_val = $("#heat-no").val();
        var grade_val = $("#grade").val();
        var fr_val = $("#fr").val();
        var option;
        if(fr_val == "fresh"){
            option = '<td><select class = "fr-val"><option selected = "selected">Fresh</option><option>Reshoot</option></select></td> ';
        }
        else{
            option = '<td><select class = "fr-val"><option>Fresh</option><option selected = "selected">Reshoot</option></select></td> ';
        }
        var newRow = $("<tr class='data-row'><td><input class = 'rt-no-val'type='text' value='" + rt_no_val + "'></td><td><input class = 'prod-code-val' type='text' value='" + pc_val + "'></td><td><input class = 'prod-name-val'type='text' value='" + pn_val + "'></td><td><input class = 'draw-no-val' type='text' value='" + dn_val + "'></td><td><input class = 'weight-val'type='number' value='" + weight_val + "'></td><td><input class = 'heat-no-val' type='text' value='" + hn_val + "'></td><td><input class = 'grade-val' type='text' value='" + grade_val + "'></td>"+option+"<td><button class='delete-button'>Delete</button></td></tr>");
        $("#transactions-table tbody").append(newRow);
        $("#rt-no").val("");
        $("#prod-code").val("");
        $("#prod-name").val("");
        $("#draw-no").val("");
        $("#weight").val("");
        $("#heat-no").val("");
        $("#grade").val("");
        $("#fr option[value='fresh']").prop("selected", true);
        $("#add-button").css("background-color", "#0A66C2");

    });

    // Delete row when the "Delete" button is clicked
    $("#transactions-table").on("click", ".delete-button", function() {
        $(this).closest("tr").remove();
    });
    function navbarActions(){
        // rotate caret icon
        $(".sub-btn").on("click",function(){
            $(this).next(".sub-menu").slideToggle();
            $(this).find(".dropdown").toggleClass("rotate");
            $(this).toggleClass("active"); 
        });
        $(".sidebar-toggle").on("click",function(){
            $(".sub-btn").next(".sub-menu").slideUp();
            $(".sub-btn").find(".dropdown").removeClass("rotate");
            $(".sub-btn").removeClass("active");
            
        });
    
    }


    $.ajax({
        url: "getData.php",
        type: "POST",
        data: {
            function: 4
        },
        //dataType:'json',
        success: function(result) {
        
            data = JSON.parse(result);
            //console.log(data);
            
            var table = $("#product-table").DataTable({
                paging:false,
                scrollY:"340px",
                keys:{
                    keys: [ 13 /* ENTER */, 38 /* UP */, 40 /* DOWN */ ],
                    focus: ':eq(0)'
                },
                scrollCollapse: true,
                "data":data,
                "columns": [
                    { "data": "prod_code" },
                    { "data": "item_code" },
                    { "data": "draw_no" },
                    { "data": "descr" },
                    { "data": "weight" },
                ],
                select:{
                    style:"single"
                }
            });
            $("div.dataTables_filter input").focus();
            // Handle event when cell gains focus
            $('#product-table').on('key-focus.dt', function(e, datatable, cell){
                // Select highlighted row
                $(table.row(cell.index().row).node()).addClass('selected');
            });

            $('#product-table').on('key', function(e, datatable, key, cell, originalEvent) {
                if (key === 40) { // 40 is the keycode for the down arrow key
                if (cell.index().row === 0) { // if first row is selected
                    table.row(0).select(); // select first row
                }
                }
            });

            // Handle event when cell looses focus
            $('#product-table').on('key-blur.dt', function(e, datatable, cell){
                // Deselect highlighted row
                $(table.row(cell.index().row).node()).removeClass('selected');
            });
            // Handle key event that hasn't been handled by KeyTable
            $('#product-table').on('key.dt', function(e, datatable, key, cell, originalEvent){
                // If ENTER key is pressed
                if(key === 13){
                    // Get highlighted row data
                    var data = table.row(cell.index().row).data();
                    if(rowFocus == 0){
                        setMainVal(data.item_code,data.descr,data.draw_no,data.weight);
                        
                        
                    }
                    else if(rowFocus == 1){
                        $(".focused-pc").val(data.item_code);
                        $(".focused-dn").val(data.draw_no);
                        $(".focused-pn").val(data.descr);
                        //console.log(data.weight);
                        $(".focused-weight").val(data.weight);

                        $(".focused-pc").removeClass("focused-pc");
                        $(".focused-dn").removeClass("focused-dn");
                        $(".focused-pn").removeClass("focused-pn");
                        //console.log(data.weight);
                        $(".focused-weight").removeClass("focused-weight");
                    }
                    //console.log(pc_val_sub);
                    $("#product-table-container").css("visibility", "hidden");
                    //$(".blur").removeClass("blur-active");
                }
            });       
        }
    });


    $.ajax({
        url: "getData.php",
        type: "POST",
        data: {
            function: 5,
            year:yyyy
        },
        //dataType:'json',
        success: function(result) {
        
            data = JSON.parse(result);
            //console.log(result);
            
            rt_table = $("#rt-table").DataTable({
                paging:false,
                scrollY:"340px",
                keys:{
                    keys: [ 13 /* ENTER */, 38 /* UP */, 40 /* DOWN */ ],
                    focus: ':eq(0)'
                },
                scrollCollapse: true,
                "data":data,
                "columns": [
                    { "data": "rt_no" },
                    { "data": "prod_code" },
                    { "data": "prod_name" },
                    { "data": "draw_no" },
                    { "data": "weight" },
                    { "data": "heat_no" },
                    { "data": "grade" }
                ],
                select:{
                    style:"single"
                }
            });
            $("div.dataTables_filter input").focus();
            // Handle event when cell gains focus
            $('#rt-table').on('key-focus.dt', function(e, datatable, cell){
                // Select highlighted row
                $(rt_table.row(cell.index().row).node()).addClass('selected');
            });

            $('#rt-table').on('key', function(e, datatable, key, cell, originalEvent) {
                if (key === 40) { // 40 is the keycode for the down arrow key
                if (cell.index().row === 0) { // if first row is selected
                    rt_table.row(0).select(); // select first row
                }
                }
            });

            // Handle event when cell looses focus
            $('#rt-table').on('key-blur.dt', function(e, datatable, cell){
                // Deselect highlighted row
                $(rt_table.row(cell.index().row).node()).removeClass('selected');
            });
            // Handle key event that hasn't been handled by KeyTable
            $('#rt-table').on('key.dt', function(e, datatable, key, cell, originalEvent){
                // If ENTER key is pressed
                if(key === 13){
                    //Get highlighted row data
                    var data = rt_table.row(cell.index().row).data();
                    
                    var option = '<td><select class = "fr-val"><option>Fresh</option><option selected = "selected">Reshoot</option></select></td> ';
        
                    var newRow = $("<tr class='data-row'><td><input class = 'rt-no-val'type='text' value='" + data.rt_no + "'></td><td><input class = 'prod-code-val' type='text' value='" + data.prod_code + "'></td><td><input class = 'prod-name-val'type='text' value='" + data.prod_name + "'></td><td><input class = 'draw-no-val' type='text' value='" + data.draw_no + "'></td><td><input class = 'weight-val'type='number' value='" + data.weight + "'></td><td><input class = 'heat-no-val' type='text' value='" + data.heat_no + "'></td><td><input class = 'grade-val' type='text' value='" + data.grade + "'></td>"+option+"<td><button class='delete-button'>Delete</button></td></tr>");
                    $("#transactions-table tbody").append(newRow);
                    $("#rt-no").val("");
                    $("#prod-code").val("");
                    $("#prod-name").val("");
                    $("#draw-no").val("");
                    $("#weight").val("");
                    $("#heat-no").val("");
                    $("#grade").val("");
                    
                    $("#rt-table-container").css("visibility", "hidden");
                    //$(".blur").removeClass("blur-active");
                }
            });  
            
        }
    });

    $("#sl-no").bind("keydown","ctrl+o", function(e){
        var sl_no_val = $("#sl-no").val();
        $(".data-row").remove();
        $.ajax({
            url: 'getData.php', // Replace this with the URL of your PHP script to fetch the sorted table data
            type: 'POST',
            data: { 
            function:6,
            sl_no: sl_no_val
            },
            success: function(data) {
            // Update the DataTable with the sorted data
            
            //rt_table.rows.add(JSON.parse(data)).draw();
            var json_data = JSON.parse(data);
            for(let i in json_data){
                
                var rt_no_val = json_data[i].rt_no;
                var pc_val = json_data[i].prod_code;
                var pn_val = json_data[i].prod_name;
                var dn_val = json_data[i].draw_no;
                var weight_val = json_data[i].weight;
                var hn_val = json_data[i].heat_no;
                var grade_val = json_data[i].grade;
                var fr_val = json_data[i].fresh_reshoot;
                var option;
                if(fr_val == "Fresh"){
                    option = '<td><select class = "fr-val"><option selected = "selected">Fresh</option><option>Reshoot</option></select></td> ';
                }
                else{
                    option = '<td><select class = "fr-val"><option>Fresh</option><option selected = "selected">Reshoot</option></select></td> ';
                }
                var newRow = $("<tr class='data-row'><td><input class = 'rt-no-val'type='text' value='" + rt_no_val + "'></td><td><input class = 'prod-code-val' type='text' value='" + pc_val + "'></td><td><input class = 'prod-name-val'type='text' value='" + pn_val + "'></td><td><input class = 'draw-no-val' type='text' value='" + dn_val + "'></td><td><input class = 'weight-val'type='number' value='" + weight_val + "'></td><td><input class = 'heat-no-val' type='text' value='" + hn_val + "'></td><td><input class = 'grade-val' type='text' value='" + grade_val + "'></td>"+option+"<td><button class='delete-button'>Delete</button></td></tr>");
                $("#transactions-table tbody").append(newRow);
            }
            //console.log(data);
            }
        });
        $.ajax({
            url: 'getData.php', // Replace this with the URL of your PHP script to fetch the sorted table data
            type: 'POST',
            data: { 
            function:7,
            sl_no: sl_no_val
            },
            success: function(data) {
                var json_data = JSON.parse(data);
                try{
                    $("#cust-name").val(json_data[0].customer);
                    $("#dc-no").val(json_data[0].dc_no);
                    $("#dc-date").val(json_data[0].dc_date);
                }
                catch(err){
                    alert("Data doesn't exist");
                    fillSlNo();
                }
            
            
            //console.log(data);
            }
        });
        $("#add-button").off("click", addData);
        $("#add-button").attr("id", "update-button");
        $("#update-button").text("Update");
        $("#reshoot-button").attr("id", "cancel-update-button");
        $("#cancel-update-button").text("Cancel");
    });

    $(document).on('change','#rt-year-dropdown', function() {
        var year = $(this).val();
        console.log(year);
        // Send an Ajax request to the server to fetch the sorted table data
        $.ajax({
        url: 'getData.php', // Replace this with the URL of your PHP script to fetch the sorted table data
        type: 'POST',
        data: { 
            function:5,
            year: year },
        success: function(data) {
            // Update the DataTable with the sorted data
            rt_table.clear();
            rt_table.rows.add(JSON.parse(data)).draw();
        }
        });
    });

    $(document).on("click", "#cancel-update-button", resetAll);

    $(document).on("click", "#update-button", updateData);
        
    $("#prod-code").on("focus", function(){
        rowFocus = 0;
        $("#product-table-container").css("visibility", "visible");
        //$(".blur").addClass("blur-active");
    
    });
    $(".cancel-infoTable").on("click", function(){
        $(".info-table-container").css("visibility", "hidden");
        //$(".blur").removeClass("blur-active");
    });

    //$("#rt-table-container").css("visibility", "visible");
    $("#rt-no").bind("keydown","ctrl+o", function(e){
        
        $("#rt-table-container").css("visibility", "visible");
    });

    $(document).on("focus",".prod-code-val", function(){
        rowFocus = 1;
        $(this).addClass("focused-pc");
        $(this).closest("tr").find(".prod-name-val").addClass("focused-pn");
        //console.log($(this).parent().next().find(".prod-name-val").val());
        $(this).closest("tr").find(".draw-no-val").addClass("focused-dn");
        $(this).closest("tr").find(".weight-val").addClass("focused-weight");
        //console.log($(".focused-weight").val());
        $("#product-table-container").css("visibility", "visible");
    });


    function toggleSidebar(){
        sidebar.classList.toggle("close");
        if(sidebar.classList.contains("close")){
            localStorage.setItem("status", "close");
        }else{
            localStorage.setItem("status", "open");
        }
        subMenu.forEach(item=>{item.classList.remove("active");});
        sidebarToggle.classList.toggle("rotate-sidebar-toggle");
    }

    function toggleLink(event){
        if(sidebar.classList.contains("close")){
            sidebarToggle.classList.toggle("rotate-sidebar-toggle");
        }
        sidebar.classList.remove("close");
        
    }


    sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar

    linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret

    //addButton.addEventListener("click", addData);
    $("#add-button").on("click", addData);

    //Autocomplete for customer name
    $.ajax({
        url: "getData.php",
        type: "POST",
        data: {
            function: 2
        },
        //dataType:'json',
        success: function(result) {
        
            data = JSON.parse(result);
            
            autCom = [];
            $select = $("#cust-name");
            $select.html("");
            
            for(let i = 0; i < data.length; i++) {
                let obj = data[i];
            
                //console.log(obj.cust_name);
                //autCom.push(obj.cust_name);
                $select.append("<option data-tokens="+obj.cust_name+ ">"+obj.cust_name+"</option>");
            }
            
            $(function() {
                $('.selectpicker').selectpicker("refresh");
            });
        }
    });

    fillSlNo();
    navbarActions();

});
