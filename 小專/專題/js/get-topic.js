
//新增

let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token1=>",LoginToken);
function postData(url, data, headers) {
    return fetch(url, {
        body: JSON.stringify(data),
        headers: headers,
        method: 'POST',
        mode: 'cors',
    })
    //.then(response => response.json()) //輸出成json
}

function submit() {
    console.log(LoginToken);
    const announce_title = document.getElementById('title').value;
    const announce_content = document.getElementById('content').value;


    const data = {
        announce_title,
        announce_content
    }
    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('http://localhost:5229/api/seniorproject/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
}







//刪除

function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${LoginToken}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應

        fetch("http://localhost:5229/api/seniorproject/GetAllDataList")
        .then(response => response.json())
        .then(data => {
            post.innerHTML = "";
            data.forEach((item) => {
                post.innerHTML +=
                `
                <div class="topic" style="margin-bottom: 10px;" >
                    <div class="flex">
                        <div class="topic-photo flex">
                            
                        <img src="http://localhost:5229/${item.senior_image}" class="photo">
                        </div>
                        
                        <div class="topic-content flex" >
                            <div class="topic-name">
                            ${item.senior_title}
                            </div>
                            <div class="member" id="member">
                            ${item.name}
                            </div>
                            <div class="article" id="article">
                            ${item.senior_content}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="edit">
                            <button type="submit" class="edit-row-button">
                                <a href="./topic-edit.html?id=${item.seniorproject_id}">
                                    修改
                                </a>
                            </button>
                            <input class="delete-row-button" value="刪除" type="submit" onclick="deleteData('http://localhost:5229/api/seniorproject/DeleteData?id=', '${item.seniorproject_id}')">
                            
                        </div>
                    </div>
                </div>
    
                `;
            });
            window.onload();
        })
        .catch(error => console.error(error));

        
    })
    .catch(error => {
        console.error('There was a problem deleting data:', error);
    });
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    readone(id);
}


//取的資料 

window.onload = function() {

    var post = document.querySelector("#post");

    fetch("http://localhost:5229/api/seniorproject/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        
        console.log("data",data);

        post.innerHTML = "";
        data.forEach((item) => {
            // const date = new Date(item.update_time);
            // const update_time = date.toLocaleString();

            post.innerHTML +=
            `
            <div class="topic" style="margin-bottom: 10px;" >
                <div class="flex">
                    <div class="topic-photo flex">
                        
                    <img src="http://localhost:5229/${item.senior_image}" class="photo">
                    </div>
                    
                    <div class="topic-content flex" >
                        <div class="topic-name">
                        ${item.senior_title}
                        </div>
                        <div class="member" id="member">
                        ${item.name}
                        </div>
                        <div class="article" id="article">
                        ${item.senior_content}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="edit">
                        <button type="button" class="edit-row-button">

                            <a href="/小專/專題/topic-edit.html?id=${item.seniorproject_id}">
                                修改
                            </a>
                        </button>
                        
                        <input class="delete-row-button" value="刪除" type="submit" onclick="deleteData('http://localhost:5229/api/seniorproject/DeleteData?id=', '${item.seniorproject_id}')">
                        
                    </div>
                </div>
            </div>

            `;
        });
    })
    .catch(error => console.error(error));
}


function previewFile() {
    var preview = document.querySelector('.img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

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




//${seniorproject_id}


{/* <div class="topic-photo flex">
                  
<img src="${item.senior_image}" class="photo"> 
</div>

<div class="topic-content flex" >
<div class="topic-name">
    <p>${item.senior_title}</p>
</div>
<div class="member" id="member">
    ${item.name}
</div>
<div class="article" id="article">
    ${item.senior_content}
</div>
</div> */}