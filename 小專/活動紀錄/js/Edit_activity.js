let LoginToken=sessionStorage.getItem('LoginToken');
function submit() {
    console.log(LoginToken);
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];

    const data = {
        title: title,
        content: content,
        image: image,
    };

    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    

    postData('http://localhost:5229/api/Activity/CreateData', data, headers)
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
        <div class="create-text">名稱：<input type="text" id="title"class="create-input" value="${data.activity_title}"></div>
        <div class="create-text flex"><div class="flex"style="justify-content: flex-start;">描述：</div><textarea id="content" style="font-size: 20px;">${data.activity_content}</textarea></div>
        <div class="create-text">圖片：<input type="file" value="${data.first_image}"id="image"onchange="previewFile()"style="justify-content: right;"class="create-input"></div>
        <div style="margin-left:10px;margin-bottom:20px;">
            <img class="img" src="${data.first_image}" style="width:300px;">
            <p class="file-name" style="font-size:20px;font-weight: bold;"></p>
        </div>
        
        <a href="./Admin_Login_activity.html"><input type="submit" onclick="update(${id})" value="修改" class="create-button"></a>
        <a href="./Admin_Login_activity.html"><input type="button" value="返回" class="create-button"></a>
            
        `;
        console.log(data);
    }) 
}

function update(id)
{
    var post = document.querySelector("#post");
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const formData = new FormData();
    formData.append('activity_title', title);
    formData.append('activity_content', content);
    formData.append('FormImage', image);
    fetch(`http://localhost:5229/api/Activity/UpdateData?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
        },
        body:formData,
    })
    
    
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">修改活動</div>
        <div class="create-text">名稱：<input type="text" id="title"class="create-input" value="${activity_title}"></div>
        <div class="create-text flex"><div class="flex"style="justify-content: flex-start;">描述：</div><textarea id="content" style="font-size: 20px;">${activity_content}</textarea></div>
        <div class="create-text">圖片：<input type="file" id="image" onchange="previewFile()" style="justify-content: right;"class="create-input"></div>
        <div style="margin-left:10px; margin-bottom:20px;">
            <img class="img" src="${data.first_image}" style="width:300px;">
            <p class="file-name" style="font-size:20px;font-weight: bold;"></p>
        </div>
        
        <input type="submit" onclick="update(${id})" value="修改" class="create-button">
        <a href="./Admin_Login_activity.html"><input type="button" onclick="submit()" value="返回" class="create-button"></a>
            
        `;
        console.log(data);
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