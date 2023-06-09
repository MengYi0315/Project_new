let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
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
    postData('https://localhost:7275/api/Announcement/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);
            window.onload();
       })
        .catch(error => {
            console.error(error);
        })
}


function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息

    if(confirm("確定是否刪除?")){
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應
        window.onload();
        window.alert("刪除成功");
    })
    .catch(error => {
        console.error('There was a problem deleting data:', error);
        window.alert("刪除失敗ˋ");
    });

    }
   
}

let currentPage = 1;

window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    fetch("https://localhost:7275/api/Announcement/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        // data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        poo.innerHTML = "";
        post.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div class="flex">
                <div style="width:100%;">
                    <a href="/小專/首頁/Admin_Login_Index_detail.html?id=${item.announce_id}" class="a1 flex">
                        <div class="space-between flex ee">
                            <div> 標題： ${item.announce_title}</div>
                            <div> 更新時間： ${update_time}</div>
                        </div>
                    </a>
                </div>
                
                <div class="flex">
                    <a href="./Edit_Login_Index.html?id=${item.announce_id}"  style="color:#FFF;"><input type="submit" class="edit-row-button" value="修改"></a>
                    <input type="submit" onclick="deleteData('https://localhost:7275/api/Announcement/DeleteData?id=', '${item.announce_id}')" class="delete-row-button" value="刪除">
                </div>
            </div>
            `;
        });
        
        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }
        
        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
    .catch(error => console.error(error));
}

function goToPage(page)
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${page}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div class="flex">
                <div style="width:100%;">
                    <a href="/小專/首頁/Admin_Login_Index_detail.html?id=${item.announce_id}" class="a1 flex">
                        <div class="space-between flex ee">
                            <div> 標題： ${item.announce_title}</div>
                            <div> 更新時間： ${update_time}</div>
                        </div>
                    </a>
                </div>
                
                <div class="flex">
                    <a href="./Edit_Login_Index.html?id=${item.announce_id}"  style="color:#FFF;"><input type="submit" class="edit-row-button" value="修改"></a>
                    <input type="submit" onclick="deleteData('https://localhost:7275/api/Announcement/DeleteData?id=', '${item.announce_id}')" class="delete-row-button" value="刪除">
                </div>
            </div>
            `;
        });

        currentPage = page;

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }

        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
}

function goToFront()
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    currentPage -= 1;
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        if(currentPage < 1 )
        {
            currentPage = 1;
        }
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div class="flex">
                <div style="width:100%;">
                    <a href="/小專/首頁/Admin_Login_Index_detail.html?id=${item.announce_id}" class="a1 flex">
                        <div class="space-between flex ee">
                            <div> 標題： ${item.announce_title}</div>
                            <div> 更新時間： ${update_time}</div>
                        </div>
                    </a>
                </div>
                
                <div class="flex">
                    <a href="./Edit_Login_Index.html?id=${item.announce_id}"  style="color:#FFF;"><input type="submit" class="edit-row-button" value="修改"></a>
                    <input type="submit" onclick="deleteData('https://localhost:7275/api/Announcement/DeleteData?id=', '${item.announce_id}')" class="delete-row-button" value="刪除">
                </div>
            </div>
            `;
        });

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }
        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
}

function goToBack()
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    currentPage += 1;
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        if(currentPage > maxpage )
        {
            currentPage = maxpage;
        }
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div class="flex">
                <div style="width:100%;">
                    <a href="/小專/首頁/Admin_Login_Index_detail.html?id=${item.announce_id}" class="a1 flex">
                        <div class="space-between flex ee">
                            <div> 標題： ${item.announce_title}</div>
                            <div> 更新時間： ${update_time}</div>
                        </div>
                    </a>
                </div>
                
                <div class="flex">
                    <a href="./Edit_Login_Index.html?id=${item.announce_id}"  style="color:#FFF;"><input type="submit" class="edit-row-button" value="修改"></a>
                    <input type="submit" onclick="deleteData('https://localhost:7275/api/Announcement/DeleteData?id=', '${item.announce_id}')" class="delete-row-button" value="刪除">
                </div>
            </div>
            `;
        });

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }

        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
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
//     postData('https://localhost:7275/api/Announcement/CreateData',data,headers)
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
//     postData('https://localhost:7275/api/Announcement/CreateData',data,headers)
//     .then(data=>{
//         sessionStorage.setItem('LoginData', JSON.stringify(data));
//         console.log(data);
//     })
// }
