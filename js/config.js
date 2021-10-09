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