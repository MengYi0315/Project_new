


let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token1",LoginToken);

let projectdata;

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

    fetch(`http://localhost:5229/api/seniorproject/ReadOneData?id=${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    .then(data => {
        projectdata = data;
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">
            修改專題作品
        </div>
        <br>
        <div>
            <div class="topic-1">
                <div class="flex" style="width: 100%;">
                    <div class="topic-photo flex">
                        <div class="photo flex" id="img">
                            <img  class="img">
                            <!-- <input type="button" value="IMG" class="select-photo">     -->
                        </div>     
                    </div>
                
                
                    <div class="topic-content">
                        <div style="padding-top: 72px;">
                            專題名稱：
                            <input class="topic-text" id="title">
                        </div>
                        <div class="member" >
                            選擇年份：
                            <select class="year-select" id="year">
                                <option>請選擇年份</option>
                                <option>111年</option>
                                <option>110年</option>
                                <option>109年</option>
                                <option>108年</option>
                                <option>107年</option>
                            </select>
                        </div>
                        <div class="member flex">
                            專題組員：
                            <select class="member-select" id="post" multiple>
                            
                                <!-- <option>一</option>
                                <option>二</option>
                                <option>三</option>
                                <option>四</option>
                                <option>五</option>
                                <option>五</option>
                                <option>五</option>
                                <option>五</option>
                                -->
                            </select>
                    
                        </div>
                        <div  class="member">
                            圖片檔案：
                            <input type="file" id="image" onchange="previewFile()" class="select-photo" accept="image/*">
                        </div>
                        <div  class="member flex" style="padding-bottom: 20px; justify-content: flex-start;">
                            專題簡介：
                            <textarea class="topic-content-text" id="content"></textarea>
                        
                        </div>

                    </div>

                    
                </div>
            
                <div class="button-div flex">
                    <div class="button-padding">
                        <input type="button" value="保存" class="create-button">
                    </div>
                    <div class="button-padding">
                        <input type="button" value="返回" class="create-button" onclick="location.href='./Admin_topic-login.html'">
                    </div>
                </div>
            </div>
        </div>  

        `;
        console.log(data);
    }) 
}

function update(id) { 
    const senior_title = document.querySelector('title').value;
    const senior_year = document.querySelector('year').value;
    const senior_person = document.querySelector('post').value;
    const senior_image = document.querySelector('image').files[0];
    const senior_content = document.querySelector('content').value;

    // 创建一个 FormData 对象，并添加要修改的图片和文字内容
    
    const formData = new FormData();
    formData.append('activity_title', titleInput);
    formData.append('activity_content', contentInput);
    formData.append('FormImage', image.files[0]);

    fetch(`http://localhost:5229/api/Activity/UpdateData?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`
        },
        body: formData
    })

    .then(data => {
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




function postData(url, data, headers) {
    const formData = new FormData();
    formData.append('senior_title', data.title);
    formData.append('senior_year', data.year);
    formData.append('senior_person', data.post);
    formData.append('senior_content', data.content);
    formData.append('FormImage', data.image);
    // formData.append('senior_selectedValues', JSON.stringify(data.selectedValues)); // 將selectedValues轉為JSON字串後附加到FormData



    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
      .then(response => response.formData) //輸出成json
}

//新增

function submit() {
    console.log(LoginToken);
    
    const senior_title = document.getElementById('title').value;
    const senior_year = document.getElementById('year').value;
    const senior_person = document.getElementById('post').value;
    const senior_image = document.getElementById('image').files[0];
    const senior_content = document.getElementById('content').value;
    // const select = document.getElementById('options');
    // const selectedValues = [];
    // for (let i = 0; i < select.options.length; i++) 
    // {
    //     if (select.options[i].selected) 
    //     {
    //         selectedValues.push(select.options[i].value);
    //     }
    // }
    const data = {
        title: senior_title,
        year: senior_year,
        post:senior_person,
        content: senior_content,
        image: senior_image,
        // selectedOptions: selectedValues,
    };

    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    

    postData('http://localhost:5229/api/seniorproject/CreateData', data, headers)
    .then(({data}) => {
        console.log(data);
        
        });


    // const senior_title = document.getElementById('title').value;
    // const senior_content = document.getElementById('content').value;
    // const senior_year = document.getElementById('year').value;
    // const members_id = document.getElementById('post').value;


    // const data = {
    //     announce_title,
    //     announce_content
    // }
    // const headers = {
    //     'Authorization': `Bearer ${LoginToken}`,
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // };
    // postData('http://localhost:5229/api/seniorproject/CreateData', data, headers)
    //     .then(({data}) => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
}
// function previewFile() {
//     var preview = document.querySelector('.img');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();


//     reader.addEventListener("load", function () {
//         preview.src = reader.result;
//     }, false);

//     if (file) {
//         reader.readAsDataURL(file);
//     }

//     // 設定圖片大小
//     preview.style.width = "300px";
// }









// //刪除

// function deleteData(url, id) {
//     console.log('Deleting data:', `${url}${id}`); // 调试信息
//     return fetch(`${url}${id}`, {
//         method: 'DELETE',
//         headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
//     })
//     .then(data => {
//         console.log(data); // 刪除成功後的回應
//     })
//     .catch(error => {
//         console.error('There was a problem deleting data:', error);
//     });
// }



//取的資料 ok

window.onload = function() {
    //




    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/Members/GetIDList")
    .then(response => response.json())
    .then(data => {
        console.log("data",data);

        post.innerHTML = "";
        data.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();

            post.innerHTML +=
            `

            <option>${item.name}</option>
            `;
        });
    })
    .catch(error => console.error(error));
}

//<div class="photo" id="photo"></div>

// function postData(url,data,headers){

//     return fetch(url, {
//         body: JSON.stringify(data),
//         headers:headers,
//         method:'POST',
//         mode:'cors',
//     })
//     //.then(response => response.json()) //輸出成json
// }

// function submit(){
//     const announce_title=document.getElementById('title').value;
//     const announce_content=document.getElementById('content').value;
//     const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODI1MDM3MzV9.dU4k9OBupPvholFaKwWM_RJaedcrItBZ3NnwR6V21Fw';

//     const data={
//         announce_title,
//         announce_content
//     }
//     const headers = {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     };
//     postData('http://localhost:5229/api/Announcement/CreateData',data,headers)
//     .then(data=>{
//         // sessionStorage.setItem('LoginData', JSON.stringify(data));
//         console.log(data);
//     })
// }  


// function getToken() {
//     const loginData = JSON.parse(sessionStorage.getItem('LoginData'));
//     return loginData.token;
// }

// function postData(url,data,headers){

//     return fetch(url, {
//         body: JSON.stringify(data),
//         headers:headers,
//         method:'POST',
//         mode:'cors',
//     })
//     //.then(response => response.json()) //輸出成json
// }

// function submit(){
//     const announce_title=document.getElementById('title').value;
//     const announce_content=document.getElementById('content').value;
//     const token = getToken();

//     const data={
//         announce_title,
//         announce_content
//     }
//     const headers = {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     };
//     postData('http://localhost:5229/api/Announcement/CreateData',data,headers)
//     .then(data=>{
//         sessionStorage.setItem('LoginData', JSON.stringify(data));
//         console.log(data);
//     })
// }
