function updateData(id, data, headers) {
    const formData = new FormData();
    formData.append('activity_title', data.title);
    formData.append('activity_content', data.content);
    formData.append('FormImage', data.image);

    return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: formData,
        headers: headers
    })
    // .then(response => response.json()) // 轉成 JSON 格式
}
let LoginToken=sessionStorage.getItem('LoginToken');
function submit() {
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
    


    const id = data.id; // 取得新增資料的 ID
    updateData('http://localhost:5229/api/Activity/UpdateData?id=',id, headers)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.onload();
        });
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

