let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`http://localhost:5229/api/Members/GetLoginRole?Account=${data.account}`, {
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
                忘記密碼
                </div>
            <div class="normal-word margin-top-login-content">
                帳號：
                <input type="text"  class="text" value="${data.account}">

            </div>
            <div class="normal-word margin-top-login-content">
                Email：
                <input type="text"  class="text">

            </div>
            <div class="margin-top-login-content">
                <input type="submit" onclick="update('${data.account}')" value="找回密碼" class="login-button">
            </div>
            
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
    submit();
}
