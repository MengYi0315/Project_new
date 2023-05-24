let account=document.getElementById('account');
let password=document.getElementById('password');
let LoginToken=sessionStorage.getItem('LoginToken');
let name=sessionStorage.getItem('name');



function LoginData(){
    axios({
        method: 'post',
        url: `https://localhost:7275/api/Members/Login`,
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
                sessionStorage.setItem('LoginToken',data.token);
                sessionStorage.setItem('name',data.name);
                window.alert("登入成功");
                console.log(data);
                window.location.href="http://127.0.0.1:5555/小專/使用者專區-個人資訊/Admin-PersonalInformation.html";
            })
            .catch(error => {
                console.log(error);

                if (!account.value && !password.value) 
                {
                    window.alert("請正確填寫以下欄位：帳號, 密碼");
                }
                window.alert("登入失敗");
            });

}


// function LoginMember(Account)
// {
//   return fetch(`https://localhost:7275/api/Members/GetLoginRole?Account=${Account}`, {
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
    name=sessionStorage.getItem('name');
    console.log(LoginToken);
    console.log(name);
}