let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function updateData(id) {
    var post = document.querySelector("#post");
    // 讀取舊有資料
    fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${id}`, {
    headers: {
        'Authorization': `Bearer ${LoginToken}`
    }
    })
    .then(response => response.json())
    .then(data => {

        post.innerHTML = "";

        post.innerHTML +=
        `
        <div class="title">修改公告</div>
        <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
        <div class="create-content flex">
            內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
            
        </div>
        <div style="margin-left:20px;">
            <input type="button" value="發布" class="submit">
        </div> 
        `;
        
    })
    .catch(error => console.error('Error:', error));
}

// window.onload = function (){
    
//     const url = window.location.href;
//     console.log("url",url);
//     var split = url.split("=");
//     var href = split[0];
//     var id = split[1];
//     updateData(id);
// }

function submit() {
    console.log(LoginToken);
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const data = {
        title: title,
        content: content,
    };

    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    
    
    postData('https://localhost:7275/api/Activity/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);
            
            
        });
}

function previewFile() {
    var preview = document.querySelector('.img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    // 取得檔案名稱
    var fileName = file.name;
    var fileNameDisplay = document.querySelector('.file-name');
    fileNameDisplay.textContent = fileName;

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    // 設定圖片大小
    preview.style.width = "300px";
}

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${encodeURIComponent(id)}`, {
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
        <div class="title">修改公告</div>
        <div class="create-content">標題：<input id="title" maxlength="50" style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
        <div class="create-content flex">
            內容：<textarea name="" id="content" maxlength="200" cols="74" rows="9">${data.announce_content}</textarea>
            
        </div>
        <div style="margin-left:20px;">
            <input type="submit" onclick="update('${id}') ,validateForm() " value="發布" class="submit">
        </div> 
            
        `;
        console.log(data);
        
    }) 
}

function update(id)
{
    const titleInput = document.querySelector('input[type="text"]');
    const contentInput = document.querySelector('textarea');

    const data = {
        announce_title: titleInput.value.toString(),
        announce_content: contentInput.value.toString()
    };
    fetch(`https://localhost:7275/api/Announcement/UpdateData?id=${encodeURIComponent(id)}`, {
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
        window.location.href="./Admin_Login_Index.html";
    });
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    submit(id);
}



// post.innerHTML = "";
// post.innerHTML +=
// `
// <div class="title">修改公告</div>
// <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
// <div class="create-content flex">
//     內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
    
// </div>
// <div style="margin-left:20px;">
//     <input type="submit" onclick="update(id)" value="發布" class="submit" >
// </div> 
    
// `;
// window.location.href="http://127.0.0.1:5500/小專/首頁/Admin_Login_Index.html";


// function submit() {
//     console.log(LoginToken);
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;

//     const data = {
//         title: title,
//         content: content,
//     };

//     const headers = {
//         'Authorization': `Bearer ${LoginToken}`
//     };
    

//     postData('https://localhost:7275/api/Activity/CreateData', data, headers)
//         .then(({data}) => {
//             console.log(data);
            
//         });
// }

// function updateData(id) {
//     var post = document.querySelector("#post");
//     // 讀取舊有資料
//     fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${id}`, {
//     headers: {
//         'Authorization': `Bearer ${LoginToken}`
//     }
//     })
//     .then(response => response.json())
//     .then(data => {

//         post.innerHTML = "";

//         post.innerHTML +=
//         `
//         <div class="title">修改公告</div>
//         <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
//         <div class="create-content flex">
//             內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
            
//         </div>
//         <div style="margin-left:20px;">
//             <input type="button" value="發布" class="submit">
//         </div> 
//         `;
//     })
//     .catch(error => console.error('Error:', error));
// }

// window.onload = function (){
    
//     const url = window.location.href;
//     console.log("url",url);
//     var split = url.split("=");
//     var href = split[0];
//     var id = split[1];
//     updateData(id);
// }