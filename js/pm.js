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

var prod_code = document.getElementById("prod_code");
var item_code = document.getElementById("item_code");
var draw_no = document.getElementById("draw_no");
var descr = document.getElementById("descr");
var weight = document.getElementById("weight");

var tbody = document.querySelector('tbody');

var deleteRowBtn = body.querySelectorAll(".delete-row");
var editRowBtn = body.querySelectorAll(".edit-row");
var editActive = false; // whether edit button is clicked or not

var saveId;

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


function pmAddRow(){
    if(!editActive){
        var prod = prod_code.value;
        var item = item_code.value;
        var draw = draw_no.value;
        var desc = descr.value;
        var weightVal = weight.value;
        // update database
        $.ajax({
            url: "functions.php",
            type: "POST",
            data: {
                function: 1,
                prod_code: prod,
                item_code: item,
                draw_no: draw,
                descr: desc,
                weight: weightVal
                },
            success: function(data) {
            alert("success");
            }
        });
        
        // update table
        row = ` 
            <tr>
                <td>${prod}</td>
                <td>${item}</td>
                <td>${draw}</td>
                <td>${desc}</td>
                <td>${weightVal}</td>
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

function pmDeleteRow(){
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
                    function: 2,
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
function pmCancel(){
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
        deleteBtnfunc.addEventListener("click", pmDeleteRow);
        sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar

        linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret


    }
    editActive = false;
}

function pmSave(){
    if(editActive){
        $("#nav").css("pointer-events", "auto");
        $(".top").css("pointer-events", "auto");
        var index, table = document.getElementById("table");
        var id = this.closest("tr").id;
        var children = this.closest("tr").getElementsByClassName("row-item");
        for (var i = 0; i< children.length; i++){
            //console.log(children[i]);
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
        deleteBtnfunc.addEventListener("click", pmDeleteRow);
        sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar

        linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret

        var saveProd_code = children[0].innerHTML;
        var saveItem_code = children[1].innerHTML;
        var saveDraw_no = children[2].innerHTML;
        var saveDesc = children[3].innerHTML;
        var saveWeight = children[4].innerHTML;
        var data = {
            function: 3,
            id: id,
            prod_code: saveProd_code,
            item_code: saveItem_code,
            draw_no: saveDraw_no,
            descr: saveDesc,
            weight: saveWeight
            };

        $.ajax({
            url: "functions.php",
            type: "POST",
            data: data,
            dataType:'json',
            success: function(data) {
            
            }
        });

    }
    editActive = false;
}


function editRow(){
    if(!editActive){
        $("#nav").css("pointer-events", "none");
        $(".top").css("pointer-events", "none");
        var index, table = document.getElementById("table");
        saveId = this.closest("tr").id;
        index = this.closest("tr").rowIndex;
        var children = this.closest("tr").getElementsByClassName("row-item");
        var pc = children[0].innerHTML,ic = children[1].innerHTML,desc1= children[3].innerHTML,dn= children[2].innerHTML,wt= children[4].innerHTML;
        for (var i = 0; i< children.length; i++){
           
            children[i].setAttribute("contenteditable", true);
        }
        $("#prod_code").val(pc);
        $("#item_code").val(ic);
        $("#draw_no").val(dn);
        $("#descr").val(desc1);
        $("#weight").val(wt);

        $("#add-button").html("Save");
        $("#add-button").attr("id", "save-button");

        var rowBtns = this.closest("tr").getElementsByClassName("row-btn");
        rowBtns[0].innerHTML = `<a class="save-row"><i class="fa-solid fa-check"></i></a>&nbsp;
        <a class="cancel-row"><i class="fa-solid fa-x"></i></a>`;
        var otherEditRowBtn = table.getElementsByClassName("edit-row");
        var otherDeleteRowBtn = table.getElementsByClassName("delete-row");
        for(var i =0; i< otherEditRowBtn.length; i++){
            otherEditRowBtn[i].setAttribute("disabled", true);
            otherDeleteRowBtn[i].setAttribute("disabled", true);
        }
        var cancelBtn = table.querySelector(".cancel-row");
        cancelBtn.addEventListener("click", pmCancel);
        
        var saveBtn = table.querySelector(".save-row");
       
        saveBtn.addEventListener("click", pmSave);
       
    }


    
    editActive = true;
}

$(document).on("click", "#save-button", function(e){
        var saveProd_code = $("#prod_code").val();
        var saveItem_code = $("#item_code").val();
        var saveDraw_no = $("#draw_no").val();
        var saveDesc =  $("#descr").val();
        var saveWeight = $("#weight").val();
        console.log(saveId);
        var tr = document.getElementById(saveId).childNodes;
        console.log(tr);
        tr[0].innerHTML = saveProd_code;
        tr[1].innerHTML = saveItem_code;
        tr[2].innerHTML = saveDraw_no;
        tr[3].innerHTML = saveDesc;
        tr[4].innerHTML = saveWeight;
        var data = {
            function: 3,
            id: saveId,
            prod_code: saveProd_code,
            item_code: saveItem_code,
            draw_no: saveDraw_no,
            descr: saveDesc,
            weight: saveWeight
            };

        $.ajax({
            url: "functions.php",
            type: "POST",
            data: data,
            dataType:'json',
            success: function(data) {
                alert(data);
            }
        });
        $("#prod_code").val("");
        $("#item_code").val("");
        $("#draw_no").val("");
        $("#descr").val("");
        $("#weight").val("");
        saveId = "";

        $("#save-button").html("Add");
        $("#save-button").attr("id", "add-button");

});

sidebarToggle.addEventListener("click", toggleSidebar); // open and close nav bar

linkName.forEach(item=>{item.addEventListener("click", toggleLink);}); // rotate caret

addButton.addEventListener("click",pmAddRow); // add row in table and add record in mysql
deleteRowBtn.forEach(item=>{item.addEventListener("click",pmDeleteRow)}); // delete row in table and delete record in mysql
editRowBtn.forEach(item=>{item.addEventListener("click", editRow);}); // edit row in table

navbarActions();