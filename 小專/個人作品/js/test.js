let navhover1 = document.getElementById('nav-a-hover-1');
    let downbar1 = document.getElementById('down-bar-1');
    

    
    navhover1.addEventListener('mouseover', function () {
    downbar1.style.display = 'block';
    })

    
    navhover1.addEventListener('mouseout', function () {
        downbar1.style.display = 'none';
    })

    
    let navhover = document.getElementById('nav-a-hover');
    let downbar = document.getElementById('down-bar');
    

    
    navhover.addEventListener('mouseover', function () {
    downbar.style.display = 'block';
    })

    
    navhover.addEventListener('mouseout', function () {
        downbar.style.display = 'none';
    })