let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let updateForm = document.querySelector("#update-form");

console.log(updateForm);
function updateData(url, id) {
    // 讀取舊有資料
    fetch(`http://localhost:5229/api/Announcement/ReadOneData?id=${id}`, {
    headers: {
        'Authorization': `Bearer ${LoginToken}`
    }
    })
    .then(response => response.json())
    .then(data => {
        // 將舊有資料填充到表單中
        updateForm.title.value = data.announce_title;
        updateForm.content.value = data.announce_content;
    })
    .catch(error => console.error('Error:', error));

    // 監聽表單提交事件
    updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(updateForm);

    // 更新資料
    fetch(`${url}${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${LoginToken}`
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // 在成功更新後，可以執行一些額外的操作，例如重定向到另一個頁面
    })
    .catch(error => console.error('Error:', error));
});



    // return fetch(`${url}${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${LoginToken}`
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(data => {
    //     console.log(data);
    //     var post = document.querySelector("#post");
    //     fetch("http://localhost:5229/api/Announcement/GetAllDataList")
    //     .then(response => response.json())
    //     .then(data => {
    //         data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
    //     post.innerHTML = "";
    //     data.forEach((item) => {
    //         const date = new Date(item.update_time);
    //         const update_time = date.toLocaleString();
    //         post.innerHTML +=
    //         `<div class="title">修改公告</div>
    //         <div>
            
    //             <div class="create-content">標題：<input value='${data.announce_title}'style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value=""></div>
    //             <div class="create-content flex">
    //                 內容：<textarea value='${data.announce_content}'name="" id="" cols="74" rows="9"></textarea>
                    
    //             </div>
    //             <div style="margin-left:20px;">
    //                 <input type="button" value="發布" class="submit">
    //             </div>
    //         </div>
                
    //         `;
    //     });
    // });  
    // });
}




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
