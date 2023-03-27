var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); // add jquery

const body = document.querySelector("body"),
sidebar = body.querySelector("nav");

// for nav
var sidebarToggle = body.querySelector(".sidebar-toggle");
var linkName = body.querySelectorAll(".link");
var subMenu = body.querySelectorAll(".sub-menu");
var addButton = document.getElementById("add-button");

var cust_name = document.getElementById("cust_name");
var cust_code = document.getElementById("cust_code");
var gst = document.getElementById("gst");
var pan = document.getElementById("pan");
var add_1 = document.getElementById("add_1");
var add_2 = document.getElementById("add_2");
var add_3 = document.getElementById("add_3");
var pincode = document.getElementById("pincode");

var tbody = document.querySelector('tbody');

var deleteRowBtn = body.querySelectorAll(".delete-row");
var editRowBtn = body.querySelectorAll(".edit-row");
var editActive = false; // whether edit button is clicked or not
var clicked; 

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
    
    // filter table items through search bar
    $("#search-box").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
}

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


function cmAddRow(){
    if(!editActive){
        var cust_nameVal = cust_name.value;
        var cust_codeVal = cust_code.value;
        var gstVal = gst.value;
        var panVal = pan.value;
        var add_1Val = add_1.value;
        var add_2Val = add_2.value;
        var add_3Val = add_3.value;
        var pincodeVal = pincode.value;
        var data = {
            function: 11,
            cust_name: cust_nameVal,
            cust_code: cust_codeVal,
            gst: gstVal,
            pan: panVal,
            add_1: add_1Val,
            add_2: add_2Val,
            add_3: add_3Val,
            pincode: pincodeVal
            };
        // update database
        $.ajax({
            url: "functions.php",
            type: "POST",
            data: data,
            success: function(data) {
            alert("success");
            }
        });
        editBtnfunc.addEventListener("click", editRow);
        deleteBtnfunc.addEventListener("click", cmDeleteRow);
        // update table
        row = ` 
            <tr>
                <td>${cust_codeVal}</td>
                <td>${cust_nameVal}</td>
                <td>${gstVal}</td>
                <td>${panVal}</td>
                <td>
                    <a><i class="fa-solid fa-pencil"></i></a>&nbsp;
                    <a><i class="fa-solid fa-trash"></i></a>
                </td>
            </tr>
        ` ;
        tbody.innerHTML += row;

        // empty input fields
        prod_code.value = "";
        item_code.value = "";
        draw_no.value = "";
        descr.value = "";
        weight.value = "";
    }

}

function cmDeleteRow(){
    if(!editActive){
            if(confirm("Delete data?")){
                var index, table = document.getElementById("table");
                index = this.closest("tr").rowIndex;
                var id = this.closest("tr").id;
                table.deleteRow(index);
                $.ajax({
                    url: "functions.php",
                    type: "POST",
                    data: {
                        function: 12,
                        id: id
                        },
                    success: function(data) {
                    alert("deleted");
                    }
                });
            }
        }
}

// cancel edit action
function cmCancel(){
    if(editActive){
        $("#nav").css("pointer-events", "auto");
        $(".top").css("pointer-events", "auto");
        var index, table = document.getElementById("table");
        index = this.closest("tr").rowIndex;
        
        var children = this.closest("tr").getElementsByClassName("row-item");
        for (var i = 0; i< children.length; i++){
            children[i].setAttribute("contenteditable", false);
        }
        
        var otherEditRowBtn = table.getElementsByClassName("edit-row");
        var otherDeleteRowBtn = table.getElementsByClassName("delete-row");
        for(var i =0; i< otherEditRowBtn.length; i++){
            otherEditRowBtn[i].removeAttribute("disabled");
            otherDeleteRowBtn[i].removeAttribute("disabled");
        }
        var rowBtns = this.closest("tr").getElementsByClassName("row-btn");
        rowBtns[0].innerHTML = `<a class="edit-row"><i class="fa-solid fa-pencil"></i></a>&nbsp;
        <a class="delete-row"><i class="fa-solid fa-trash"></i></a>`;
        var editBtnfunc = rowBtns[0].getElementsByClassName("edit-row")[0];
        var deleteBtnfunc = rowBtns[0].getElementsByClassName("delete-row")[0];
        editBtnfunc.addEventListener("click", editRow);
        deleteBtnfunc.addEventListener("click", cmDeleteRow);
        sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar
        $(".button").html('<button id="add-button" type="button" form="input-form" name="add">Add Record</button>');
        linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret
        cust_code.value = "";
        cust_name.value ="";
        gst.value = "";
        pan.value = "";
        add_1.value = "";
        add_2.value = "";
        add_3.value = "";
        pincode.value = "";


    }
    editActive = false;
}

function cmSave(){
    if(editActive){
        $("#nav").css("pointer-events", "auto");
        $(".top").css("pointer-events", "auto");
        var table = document.getElementById("table");
        //var row =  document.getElementById("cancel");
        var id = clicked.id;
        var children = clicked.getElementsByClassName("row-item");
        
        children[0].innerHTML = cust_code.value;
        children[1].innerHTML = cust_name.value;
        children[2].innerHTML = gst.value;
        children[3].innerHTML = pan.value;

        var otherEditRowBtn = table.getElementsByClassName("edit-row");
        var otherDeleteRowBtn = table.getElementsByClassName("delete-row");
        for(var i =0; i< otherEditRowBtn.length; i++){
            otherEditRowBtn[i].removeAttribute("disabled");
            otherDeleteRowBtn[i].removeAttribute("disabled");
        }
        var rowBtns = clicked.getElementsByClassName("row-btn");
        rowBtns[0].innerHTML = `<a class="edit-row"><i class="fa-solid fa-pencil"></i></a>&nbsp;
        <a class="delete-row"><i class="fa-solid fa-trash"></i></a>`;
        var editBtnfunc = rowBtns[0].getElementsByClassName("edit-row")[0];
        var deleteBtnfunc = rowBtns[0].getElementsByClassName("delete-row")[0];
        editBtnfunc.addEventListener("click", editRow);
        deleteBtnfunc.addEventListener("click", cmDeleteRow);
        sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar
        $(".button").html('<button id="add-button" type="button" form="input-form" name="add">Add Record</button>');
        linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret
        var cust_codeVal = cust_code.value;
        var cust_nameVal = cust_name.value;
        var gstVal =  gst.value;
        var panVal = pan.value;
        var add_1Val = add_1.value;
        var add_2Val = add_2.value;
        var add_3Val = add_3.value;
        var pincodeVal = pincode.value;
        
        var data = {
            function: 13,
            id: id,
            cust_code: cust_codeVal,
            cust_name: cust_nameVal,
            gst:gstVal,
            pan: panVal,
            add_1: add_1Val,
            add_2: add_2Val,
            add_3: add_3Val,
            pincode: pincodeVal
            };
        // alert(data[0]);
        $.ajax({
            url: "functions.php",
            type: "POST",
            data: data,
            //dataType:'json',
            success: function(result) {
                alert(result);
            }
        });
        
        
        cust_code.value = "";
        cust_name.value ="";
        gst.value = "";
        pan.value = "";
        add_1.value = "";
        add_2.value = "";
        add_3.value = "";
        pincode.value = "";
        
    }
    editActive = false;
}

function editRow(){
    if(!editActive){
        $("#nav").css("pointer-events", "none");
        $(".top").css("pointer-events", "none");
        var index, table = document.getElementById("table");
        clicked = this.closest("tr");
        var id = this.closest("tr").id;
        index = this.closest("tr").rowIndex;
       
        var rowBtns = this.closest("tr").getElementsByClassName("row-btn");
        rowBtns[0].innerHTML = `<a class="cancel-row"><i class="fa-solid fa-x"></i></a>`;
        var otherEditRowBtn = table.getElementsByClassName("edit-row");
        var otherDeleteRowBtn = table.getElementsByClassName("delete-row");
        for(var i =0; i< otherEditRowBtn.length; i++){
            otherEditRowBtn[i].setAttribute("disabled", true);
            otherDeleteRowBtn[i].setAttribute("disabled", true);
        }
        $(".button").html('<button id="update-button" type="button" form="input-form" name="add">Update Record</button>');
        var cancelBtn = table.querySelector(".cancel-row");
        cancelBtn.addEventListener("click", cmCancel);
        $("#update-button").on("click", cmSave);
        //cancelBtn.addEventListener("click", cancel);
        // var saveBtn = table.querySelector(".save-row");
       
        // saveBtn.addEventListener("click", cmSave);
        var data;
        $.ajax({
            url: "getData.php",
            type: "POST",
            data: {
                id:id,
                function: 1
            },
            //dataType:'json',
            success: function(result) {
                
                data = JSON.parse(result);
                cust_code.value = data[0].cust_code;
                cust_name.value = data[0].cust_name;
                gst.value = data[0].gst;
                pan.value = data[0].pan;
                add_1.value = data[0].add_1;
                add_2.value = data[0].add_2;
                add_3.value = data[0].add_3;
                pincode.value = data[0].pincode;
            }
        });
        
        
    }
    
    editActive = true;
}

sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar

linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret

addButton.addEventListener("click",cmAddRow); // add row in table and add record in mysql
deleteRowBtn.forEach(item=>{item.addEventListener("click",cmDeleteRow);}); // delete row in table and delete record in mysql
editRowBtn.forEach(item=>{item.addEventListener("click", editRow);}); // edit row in table

navbarActions();