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
                console.log("data",data)
                sessionStorage.setItem('LoginToken',data);
                window.alert("登入成功");
                console.log(data);
                window.location.href="http://127.0.0.1:5555/小專/首頁/Admin_Login_Index.html";
            })
            .catch(error => {
                console.log(error);

                if (!account.value && !password.value) {
                    window.alert("請正確填寫以下欄位：帳號, 密碼");
                  }
                  window.alert("登入失敗");



            });

}


// function LoginMember(Account)
// {
//   return fetch(`http://localhost:5229/api/Members/GetLoginRole?Account=${Account}`, {
//             method:'GET',
//             mode:'cors',
//             })  
//             .then(response => response.json())
//             .then(data => {
//     console.log(data);
//     sessionStorage.setItem('Role',data.Role);
//     Role=sessionStorage.getItem('Role');
//     console.log(data.Role);
//   })
// }


let Login_btn=document.getElementById('Login_btn');
Login_btn.onclick=function(){
    LoginData();
    LoginToken=sessionStorage.getItem('LoginToken');
    console.log(LoginToken);
}