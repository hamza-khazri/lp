
function openlist(){
    var h = document.getElementById("h");
    var c = document.getElementById("c");
    var list = document.querySelector(".list");
    list.style.left="0";
    h.style.width="0";
    c.style.width="40px";
}
function closelist(){
    var h = document.getElementById("h");
    var c = document.getElementById("c");
    var list = document.querySelector(".list");
    list.style.left="-370px";
    c.style.width="0";
    h.style.width="40px";
}
    
    window.addEventListener('scroll',function(){
    var nav = document.querySelector(".nav");
    var offset = window.pageYOffset;
    if (offset >75){
        nav.style.background="white";
    }
    else{
        nav.style.background="none";
    }
}) 




