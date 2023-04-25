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


    let navhover = document.getElementById('nav-a-hover');
    let downbar = document.getElementById('down-bar');
    let t = document.getElementById('t');

    navhover.addEventListener('mouseover', function () {
    downbar.style.display = 'block';
    })

   
    navhover.addEventListener('mouseout', function () {
    downbar.style.display = 'none';
    })


    let navhover2 = document.getElementById('nav-a-hover-2');
    let downbar2 = document.getElementById('down-bar-2');
   
    navhover2.addEventListener('mouseover', function () {
    downbar2.style.display = 'block';
    })

   
    navhover2.addEventListener('mouseout', function () {
    downbar2.style.display = 'none';
    })


