let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let announcementData;

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
    // preview.style.width = "300px";
}

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/Activity/ReadOneData?id=${id}`, {
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
        <div class="title">修改活動</div>
        <div class="create-text">名稱：<input type="text" id="title"class="create-input" maxlength="50" value="${data.activity_title}"></div>
        <div class="create-text flex"><div class="flex"style="justify-content: flex-start;">描述：</div><textarea id="content" maxlength="200" style="font-size: 20px;">${data.activity_content}</textarea></div>
        <div class="create-text">圖片：<input type="file" value="${data.first_image}"id="image"onchange="previewFile()"style="justify-content: right;"class="create-input"></div>
        <div class="img-put">
            <img class="img" src="${data.first_image}" >
            <p class="file-name"></p>
        </div> 

        <div class="zz flex">
            <input type="submit" onclick="update('${id}') , validateForm()" value="修改" class="create-button">
            <a href="./Admin_Login_activity.html"><input type="button" value="返回" class="create-button"></a>

        </div>
            
        `;
        console.log(data);
    }) 
}

function update(id) { 
    const titleInput = document.querySelector('input[type="text"]').value;
    const contentInput = document.querySelector('textarea').value;
    const image = document.querySelector('input[type="file"]');

    // 创建一个 FormData 对象，并添加要修改的图片和文字内容
    
    const formData = new FormData();
    formData.append('activity_title', titleInput);
    formData.append('activity_content', contentInput);
    formData.append('FormImage', image.files[0]);

    fetch(`https://localhost:7275/api/Activity/UpdateData?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`
        },
        body: formData

        
    })

    .then(data => {
        console.log(data);
        window.location.href="./Admin_Login_activity.html";
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