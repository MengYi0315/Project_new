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
                // window.alert("登入成功");
                // console.log(data);
                window.location.href="http://127.0.0.1:5500/小專/首頁/Admin_Login_Index.html";
                
                // if(data.name === "密碼錯誤")
                // {
                //     window.alert("密碼錯誤");
                // }
                // else
                // {
                //     if(data.is_delete === false)
                //     {
                //         if(data.level === 0)
                //         {
                //             window.alert("登入成功，您好尊貴的用戶 "+data.name+" 先生/小姐");
                //             window.location.href="http://127.0.0.1:5500/小專/首頁/Admin_Login_Index.html";

                //         }
                //         else if(data.level === 1)
                //         {
                //             window.alert("登入成功，您好尊貴的用戶 "+data.name+" 先生/小姐");
                //             window.location.href="http://127.0.0.1:5500/小專/首頁/Senior-Login_Index.html";
                //         }
                //         else if(data.level === 2)
                //         {
                //             window.alert("登入成功，您好尊貴的用戶 "+data.name+" 先生/小姐");
                //             window.location.href="http://127.0.0.1:5500/小專/首頁/Login_Index.html";
                //         }
                //         // else
                //         // {
                //         //     window.alert("您不是本官網的會員，即將返回首頁");
                //         //     window.location.href="http://127.0.0.1:5500/小專/首頁/Logout_Index.html";
                //         // }
                //     }
                //     if(data.is_delete === true)
                //     {
                //         window.alert("此會員已刪除或您尚未註冊會員，即將返回首頁");
                //         window.location.href="http://127.0.0.1:5500/小專/首頁/Logout_Index.html";
                //     }
                // }

                
                
                
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