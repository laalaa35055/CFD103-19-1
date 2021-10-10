function S_H(a){
    n = a.substr(1,2);
    var Q = document.getElementById("Q"+n);
    A = document.getElementById("A"+n);
    var change = document.getElementById("change"+n);
    if(A.style.display === "none" || A.style.display === ""){
        A.style.display = "block";
        change.innerHTML = "▲";
    }
    else{
        A.style.display = "none";
        change.innerHTML = "▼";
    } 
}


function movie_info(a){
    n = a.substr(5)  
    console.log(n);
    var txt = document.getElementById("info_txt"+n);
    var change = document.getElementById("movie_change"+n);
    if(txt.style.display === "none" || txt.style.display === ""){
        txt.style.display = "block";
        change.innerHTML = "▲";
    }
    else{
        txt.style.display = "none";
        change.innerHTML = "▼";
    } 
}

function show_hide(){
    var hide_info =  document.getElementById("hide_info");
    try{    
        var hide = document.getElementsByClassName("hide movie_info");
        for(var i =0;i<3;i++){
            hide[i].className = "movie_info";
        }
    }catch{
        hide_info.innerHTML = "已經到底了！！";
    }
}
function judge(a){
    var type  = document.getElementsByClassName("type");
    var arr = new Array(); // 刪除對象
    all_show();
    for(var i=0;i<type.length;i++){
        if(type[i].innerHTML.substr(1,3) !== " " +a && a !== "全部"){
            arr.push(type[i]);
        }
        else if(a === "全部"){
            all_show();
            break;
        }
    }
    for(var i=0;i<arr.length;i++){
        var n = arr[i].getAttribute("class").substr(12);
        var block_number = document.getElementById("block_number_" + n);
        block_number.style.display = "none";
    }
}
function all_show(){
    var type  = document.getElementsByClassName("data_content");

    for(var i=0;i<type.length;i++){
        type[i].style.display = "flex";
    }
}
function color(a){
    var color = document.getElementsByClassName("color"); 
    for(var i =0;i<color.length;i++){
        color[i].style.backgroundColor = "rgba(44, 44, 44, .6)";
    }
    a.parentNode.style.backgroundColor = "rgba(88, 88, 88, .6)";
}
function discuss_bar_block(){
    var discuss_bar_block = document.getElementById("discuss_bar_block");
    if(discuss_bar_block.style.display == "" || discuss_bar_block.style.display == "none"){
        discuss_bar_block.style.display = "flex";
    }
    else{
        discuss_bar_block.style.display = "none"
    }
}