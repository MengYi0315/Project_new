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

    //滑鼠移入時改變背景顏色（藍）
    navhover.addEventListener('mouseover', function () {
    downbar.style.display = 'block';
    })

    //滑鼠移出時恢復背景顏色
    navhover.addEventListener('mouseout', function () {
    downbar.style.display = 'none';
    })

    // navhover.onmouseover = function(){
    //     downbar.style.display = "block";
    // }
    // function Moveoutsover(){
    //     downbar.style.display = "block";
    // }
    

    // navhover.onmouseout = function(){
    //     downbar.style.display = "none";
    // }

    // function Moveoutsout(){
    //     downbar.style.display = "none";
    // }

