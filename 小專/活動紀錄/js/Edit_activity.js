function updateData(id, data, headers) {
    const formData = new FormData();
    formData.append('activity_title', data.title);
    formData.append('activity_content', data.content);
    formData.append('FormImage', data.image);

    return fetch(`http://localhost:5229/api/Activity/UpdateData?id=${id}`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
    .then(response => response.json()) // 轉成 JSON 格式
}

function submit() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODIyNjAzODV9.GDJWDDM1pk-sRUbTPSrdFTh3KYcQFSaihmWxllohgmQ';

    const data = {
        title: title,
        content: content,
        image: image,
    };

    const headers = {
        'Authorization': `Bearer ${token}`
    };
    

    postData('http://localhost:5229/api/Activity/CreateData', data, headers)
        .then(response => response.json()) // 轉成 JSON 格式
        .then(data => {
            const result = data.result;
            console.log(data);
            console.log(result);

            const id = data.id; // 取得新增資料的 ID
            updateData(id, data, headers)
                .then(response => response.json())
                .then(data => {
                    const result = data.result;
                    console.log(data);
                    console.log(result);
                });
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

