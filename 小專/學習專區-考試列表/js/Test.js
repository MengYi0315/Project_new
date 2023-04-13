function ToggleMenu(number){
    let menu = document.getElementById("menu-"+number);
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

function ToggleNav(number){
    let nav = document.getElementById("nav-"+number);
    if(nav.style.display == "none"){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }

}