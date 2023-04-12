function ToggleMenu(number){
    var menu = document.getElementById("menu-"+number);
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}