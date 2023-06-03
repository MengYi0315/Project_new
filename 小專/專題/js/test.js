let navhover1 = document.getElementById('nav-a-hover-1');
    let downbar1 = document.getElementById('down-bar-1');
    

    
    navhover1.addEventListener('mouseover', function () {
    downbar1.style.display = 'block';
    })

    
    navhover1.addEventListener('mouseout', function () {
        downbar1.style.display = 'none';
    })

    
    let navhover2 = document.getElementById('nav-a-hover-2');
    let downbar2 = document.getElementById('down-bar-2');
    

    
    navhover2.addEventListener('mouseover', function () {
    downbar2.style.display = 'block';
    })

    
    navhover2.addEventListener('mouseout', function () {
        downbar2.style.display = 'none';
    })


    let navhover3 = document.getElementById('nav-a-hover-3');
    let downbar3 = document.getElementById('down-bar-3');
    

    
    navhover3.addEventListener('mouseover', function () {
    downbar3.style.display = 'block';
    })

    
    navhover3.addEventListener('mouseout', function () {
        downbar3.style.display = 'none';
    })

    // let navhover4 = document.getElementById('nav-a-hover-4');
    // let downbar4 = document.getElementById('down-bar-4');
    

    
    // navhover4.addEventListener('mouseover', function () {
    // downbar4.style.display = 'block';
    // })

    
    // navhover4.addEventListener('mouseout', function () {
    //     downbar4.style.display = 'none';
    // })



    let navbox = document.getElementById('nav-box');
    let ull = document.getElementById('ull');

    navbox.onclick = function(){
        if(ull.style.display == 'none' || ull.style.display == ''){
            ull.style.display = 'block';
            // navbox.style.borderBottom = '1px solid #fff'
        }
        else{
            ull.style.display = 'none';
        }nav-lnav-l
    }

    let achievement = document.getElementById('achievement');
    let achievement_list = document.getElementById('achievement-list');

    achievement.onclick = function(){
        if(achievement_list.style.display == 'none' || achievement_list.style.display == ''){
            achievement_list.style.display = 'block';
        }
        else{
            achievement_list.style.display = 'none';
        }
    }


    let study = document.getElementById('study');
    let study_list = document.getElementById('study-list');

    study.onclick = function(){
        if(study_list.style.display == 'none' || study_list.style.display == ''){
            study_list.style.display = 'block';
        }
        else{
            study_list.style.display = 'none';
        }
    }




    let person = document.getElementById('person');
    let person_list = document.getElementById('person-list');

    person.onclick = function(){
        if(person_list.style.display == 'none' || person_list.style.display == ''){
            person_list.style.display = 'block';
        }
        else{
            person_list.style.display = 'none';
        }
    }

    let edit = document.getElementById('edit');
    let edit_list = document.getElementById('edit-list');

    edit.onclick = function(){
        if(edit_list.style.display == 'none' || edit_list.style.display == ''){
            edit_list.style.display = 'block';
        }
        else{
            edit_list.style.display = 'none';
        }
    }



    let testt = document.getElementById('testt');
    let testt_list = document.getElementById('testt-list');

    testt.onclick = function(){
        if(testt_list.style.display == 'none' || testt_list.style.display == ''){
            testt_list.style.display = 'block';
        }
        else{
            testt_list.style.display = 'none';
        }
    }


    let hw = document.getElementById('hw');
    let hw_list = document.getElementById('hw-list');

    hw.onclick = function(){
        if(hw_list.style.display == 'none' || hw_list.style.display == ''){
            hw_list.style.display = 'block';
        }
        else{
            hw_list.style.display = 'none';
        }
    }
