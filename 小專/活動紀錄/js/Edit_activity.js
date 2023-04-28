// function updateData(id) {
//     const formData = new FormData();
//     formData.append('activity_title', data.title);
//     formData.append('activity_content', data.content);
//     formData.append('FormImage', data.image);

//     return fetch(`http://localhost:5229/api/Activity/UpdateData?id=${id}`, {
//         method: 'PUT',
//         mode: 'cors',
//         body: formData,
//         headers: headers
//     })
//     // .then(response => response.json()) // 轉成 JSON 格式
// }
let LoginToken=sessionStorage.getItem('LoginToken');

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`http://localhost:5229/api/Activity/ReadOneData?id=${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">修改活動</div>
        <div class="create-text">名稱：<input type="text" id="title"class="create-input" value="${activity_title}"></div>
        <div class="create-text flex"><div class="flex"style="justify-content: flex-start;">描述：</div><textarea id="content" style="font-size: 20px;">${activity_content}</textarea></div>
        <div class="create-text">圖片：<input type="file" value="${image}"id="image"onchange="previewFile()"style="justify-content: right;"class="create-input"></div>
        <div style="margin-left:10px;">
            <img class="img">
            <p class="file-name" style="font-size:20px;font-weight: bold;"></p>
        </div>
        
        <input type="submit" onclick="submit()" value="修改" class="create-button">
        <a href="./Admin_Login_activity.html"><input type="button" onclick="submit()" value="返回" class="create-button"></a>
            
        `;
        console.log(data);
    })
    // const formData = new FormData();

    // formData.append('activity_title', data.activity_title);
    // formData.append('activity_content', data.activity_content);
    // formData.append('FormImage', data.first_image);
    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    fetch(`http://localhost:5229/api/Activity/UpdateData?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: formData,
        headers: headers
    })
    
    
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">修改活動</div>
        <div class="create-text">名稱：<input type="text" id="title"class="create-input" value="${activity_title}"></div>
        <div class="create-text flex"><div class="flex"style="justify-content: flex-start;">描述：</div><textarea id="content" style="font-size: 20px;">${activity_content}</textarea></div>
        <div class="create-text">圖片：<input type="file" value="${first_image}"id="image"onchange="previewFile()"style="justify-content: right;"class="create-input"></div>
        <div style="margin-left:10px;">
            <img class="img">
            <p class="file-name" style="font-size:20px;font-weight: bold;"></p>
        </div>
        
        <input type="submit" onclick="submit()" value="修改" class="create-button">
        <a href="./Admin_Login_activity.html"><input type="button" onclick="submit()" value="返回" class="create-button"></a>
            
        `;
        console.log(data);
    })
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    submit(id);
}


// function previewFile() {
//     var preview = document.querySelector('#img');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();

//     reader.addEventListener("load", function () {
//     preview.src = reader.result;
//     }, false);

//     if (file) {
//     reader.readAsDataURL(file);
//     }
// }



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

