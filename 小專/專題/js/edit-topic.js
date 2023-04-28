


let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token1=>",LoginToken);
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
function previewFile() {
    var preview = document.querySelector('.img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();


    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    // 設定圖片大小
    preview.style.width = "300px";
}









//刪除

function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應
    })
    .catch(error => {
        console.error('There was a problem deleting data:', error);
    });
}



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
