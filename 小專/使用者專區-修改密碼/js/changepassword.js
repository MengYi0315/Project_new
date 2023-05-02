let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`http://localhost:5229/api/Members/GetLoginRole?Account=${encodeURIComponent(id)}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    .then(data => {
        announcementData = data;
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="login-word margin-top-login-content">
                修改密碼
            </div>
            <table>
                <tr>
                    <td class="normal-word text-bottom field" >
                        帳號：
                    </td>
                    <td class="text-bottom field">
                        <input type="text"  class="text">
                    </td>

                </tr>
                <tr>
                    <td class="normal-word text-bottom field" >
                        舊密碼：
                    </td>
                    <td class="text-bottom field">
                        <input type="password"  class="text">
                    </td>

                </tr>
                <tr>
                    <td class="normal-word text-bottom field" >
                        新密碼：
                    </td>
                    <td class="text-bottom field">
                        <input type="password"  class="text">
                    </td>
                    
                </tr>
                <tr style="line-height: 8;">
                    <td colspan="2"  style="text-align: center;width:237%;">
                        <input type="submit" onclick="update()"value="修改密碼" class="login-button">
                        <input type="submit" value="返回" class="login-button">
                    </td>
                </tr>

            </table>
        `;
        console.log(data);
    }) 
}

function update()
{
    const Account = document.getElementById('Account');
    const Password = document.getElementById('OldPassword');
    const NewPassword = document.getElementById('NewPassword');

    const data = {
        Account: Account.value,
        Password: Password.value,
        NewPassword: NewPassword.value,
    };
    console.log(data);
    fetch(`http://localhost:5229/api/Members/ChangePassword`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`,
        },
        
    })
    .catch(error => {
    console.error(error);
    });
}

