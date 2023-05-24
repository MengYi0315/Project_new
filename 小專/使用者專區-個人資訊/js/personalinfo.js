
window.onload = function() {
    
    let LoginToken=sessionStorage.getItem('LoginToken');
    console.log("token",LoginToken);
    
        var acinfo = document.querySelector("#acinfo");
        fetch("https://localhost:7275/api/Members/GetLoginInfo",{ 
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            acinfo.innerHTML = "";
            
            const person_name= data.name;
            const person_account = data.account;
            const person_email = data.emaill;

            acinfo.innerHTML +=
            `
            <tr>
                <td class="normal-word text-bottom field" >
                    姓名：
                </td>
                <td class="text-bottom field normal-word-1">
                    ${person_name}
                    <!-- <input type="text"  class="text"> -->
                </td>

            </tr>
            <tr>
                <td class="normal-word text-bottom field" >
                    帳號：
                </td>
                <td class="text-bottom field normal-word-1">
                    ${person_account}
                </td>

            </tr>
        
        
            <tr>
                <td class="normal-word text-bottom field" >
                    Email：
                </td>
                <td class="text-bottom field normal-word-1">
                    ${person_email}
                </td>

            </tr>
            
            <tr>
                
                <td colspan="2" class="text-bottom field normal-word-1">
                    
                    <input type="button" value="修改密碼" class="reserve-botton" onclick="location.href='/小專/使用者專區-修改密碼/Admin-ChangePassword.html'">

                </td>

            </tr>
            `;
        
        })
        .catch(patato =>{
            console.error(patato);
        })
        
        
} 
