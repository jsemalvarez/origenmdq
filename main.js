const menu = document.getElementById("menu");

document.getElementById("toggle-btn").addEventListener("click",function(){
    console.log(menu.style.display);
    if(menu.style.display == ""){
        console.log("no esta");
        menu.style.display="inline";
    }else{
        console.log("si esta");
        menu.style.display="";
    }
})
