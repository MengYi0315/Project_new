

    
    let navhover = document.getElementById('nav-a-hover');
    let downbar = document.getElementById('down-bar');
    

    
    navhover.addEventListener('mouseover', function () {
    downbar.style.display = 'block';
    })

    
    navhover.addEventListener('mouseout', function () {
        downbar.style.display = 'none';
    })