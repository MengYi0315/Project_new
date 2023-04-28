let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function updateData(id) {
    var post = document.querySelector("#post");
    // 讀取舊有資料
    fetch(`http://localhost:5229/api/Announcement/ReadOneData?id=${id}`, {
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

    fetch(`http://localhost:5229/api/Announcement/ReadOneData?id=${id}`, {
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
        <div class="title">修改公告</div>
        <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_id}"></div>
        <div class="create-content flex">
            內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
            
        </div>
        <div style="margin-left:20px;">
            <input type="button"onclick="submit()" value="發布" class="submit">
        </div> 
            
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
    fetch(`http://localhost:5229/api/Announcement/UpdateData?id=${id}`, {
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
        <div class="title">修改公告</div>
        <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value=""></div>
        <div class="create-content flex">
            內容：<textarea name="" id="" cols="74" rows="9"></textarea>
            
        </div>
        <div style="margin-left:20px;">
            <input type="button" value="發布" class="submit">
        </div> 
            
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