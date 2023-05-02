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
                        <input type="password"  class="text">
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
                        <input type="submit" value="修改密碼" class="login-button">
                        <input type="submit" value="返回" class="login-button">
                    </td>
                </tr>

            </table>
        `;
        console.log(data);
    }) 
}

function update(account)
{
    const titleInput = document.querySelector('input[type="text"]');
    const contentInput = document.querySelector('textarea');

    const data = {
        announce_title: titleInput.value.toString(),
        announce_content: contentInput.value.toString()
    };
    fetch(`http://localhost:5229/api/Members/ForgetPassword?account=${account}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
        },
        body: JSON.stringify(data) // 加入要傳送的公告內容
    })
    .then(data => {
        console.log(data);
    });
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var id = split[1];
    console.log(id);
    submit(id);
}
