function ToggleMenu(number){
    debugger
    let nav = document.getElementById(`menu-${number}`);
    nav.style.display = nav.style.display == "none" ? "block" : "none";
}

function ToggleNav(number){
    let nav = document.getElementById(`nav${number}`);
    nav.style.display = nav.style.display == "none" ? "block" : "none";

}


$(function(){
    $(".flip").click(function(){
    $(".panel").slideToggle("fast");
    });
});