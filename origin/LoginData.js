let account=document.getElementById('account');
let password=document.getElementById('password');
let LoginToken=sessionStorage.getItem('LoginToken');

function LoginData(){
    axios({
        method: 'post',
        url: `http://localhost:5229/api/Members/Login`,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${LoginData.token}`, 
        },data:{
            Account:account.value,
            Password:password.value,
        }
    })
            .then(( { data } ) => {
                sessionStorage.setItem('LoginToken',data);
                console.log(data);
                window.location.href="http://127.0.0.1:5555/小專/首頁/Admin_Login_Index.html";
            })
            .catch(error => {
                console.log(error);
            });

}



let Login_btn=document.getElementById('Login_btn');
Login_btn.onclick=function(){
    LoginData();
    LoginToken=sessionStorage.getItem('LoginToken');
    console.log(LoginToken);
}