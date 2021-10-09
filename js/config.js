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