let accountinput = document.querySelector('account');
accountinput.forEach( input => {
    accountinput.addEventListener('input', function(){
        if(accountinput.validity.valueMissing){
            input
        }
    })
    
});