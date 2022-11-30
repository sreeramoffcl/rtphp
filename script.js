var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
const body = document.querySelector("body"),
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");
linkName = body.querySelectorAll(".link");
subMenu = body.querySelectorAll(".sub-menu");
addButton = document.getElementById("add-button");
prod_code = document.getElementById("prod_code");
item_code = document.getElementById("item_code");
draw_no = document.getElementById("draw_no");
descr = document.getElementById("descr");
weight = document.getElementById("weight");
table = document.querySelector('tbody');

function toggleSidebar(event){
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
    subMenu.forEach(item=>{item.classList.remove("active")})
    sidebarToggle.classList.toggle("rotate-sidebar-toggle");
}

function toggleLink(event){
    if(sidebar.classList.contains("close")){
        sidebarToggle.classList.toggle("rotate-sidebar-toggle");
    }
    sidebar.classList.remove("close");
    
}

function addRow(event){
    var prod = prod_code.value;
    var item = item_code.value;
    var draw = draw_no.value;
    var desc = descr.value;
    var weightVal = weight.value;

    $.ajax({
        url: "add.php",
        type: "POST",
        data: {
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
    table.innerHTML += row;
    prod_code.value = "";
    item_code.value = "";
    draw_no.value = "";
    descr.value = "";
    weight.value = "";

}

sidebarToggle.addEventListener("click", toggleSidebar)

linkName.forEach(item=>{item.addEventListener("click", toggleLink)})

addButton.addEventListener("click", addRow)