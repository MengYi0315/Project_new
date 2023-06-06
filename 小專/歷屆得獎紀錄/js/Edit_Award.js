let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/ContestAward/ReadOneData?id=${encodeURIComponent(id)}`, {
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
        <div class="item">
            作品年份：
            <select name="year" id="contest_year" class="year-list">
                <option value="">請選擇得獎年份</option>
                <option value="111">111年</option>
                <option value="110">110年</option>
                <option value="109">109年</option>
                <option value="108">108年</option>
                <option value="107">107年</option>
                <option value="106">106年</option>
                <option value="105">105年</option>
                <option value="104">104年</option>
                <option value="103">103年</option>
                <option value="102">102年</option>
                <option value="103">101年</option>
                <option value="102">100年</option>
            </select>
        </div>
        <div class="item">
            競賽名稱：
            <input type="text" maxlength="40" id="contest_name" class="item_detail" value="${data.contest_name}">
        </div>
        <div class="item">
            作品名稱：
            <input type="text" maxlength="50" id="contest_work" class="item_detail" value="${data.contest_work}">
        </div>
        <div class="item">
            得獎名次：
            <input type="text" id="contest_rank" class="item_detail" value="${data.contest_rank}">
        </div>
        
        <div class="button-right flex">
            <div>
                <a href="#"><input type="submit" onclick="update('${id}'),validateForm()" value="保存" class="create-button"></a>
                <a href="./Admin_Login_Award.html"><input type="button" value="返回" class="create-button"></a>
            </div>
        </div>
            
        `;
        console.log(data);
    }) 
}

function update(id)
{
    const contest_year = document.querySelector("#contest_year");
    const contest_name = document.querySelector("#contest_name");
    const contest_work = document.querySelector("#contest_work");
    const contest_rank = document.querySelector("#contest_rank");

    const data = {
        contest_year: contest_year.value.toString(),
        contest_name: contest_name.value.toString(),
        contest_work: contest_work.value.toString(),
        contest_rank: contest_rank.value.toString()
    };

    fetch(`https://localhost:7275/api/ContestAward/UpdateData?id=${encodeURIComponent(id)}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
        },
        body: JSON.stringify(data) // 加入要傳送的公告內容
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.alert("修改得獎紀錄失敗，請重新嘗試");
        


    })
    .catch(error => {

        window.alert("修改得獎紀錄成功，返回頁面查看內容");
        location.href="./Admin_Login_Award.html";
        console.log(error);
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



// function updateData(id) {
//     var post = document.querySelector("#post");
//     // 讀取舊有資料
//     fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${id}`, {
//     headers: {
//         'Authorization': `Bearer ${LoginToken}`
//     }
//     })
//     .then(response => response.json())
//     .then(data => {

//         post.innerHTML = "";

//         post.innerHTML +=
//         `
//         <div class="title">修改公告</div>
//         <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
//         <div class="create-content flex">
//             內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
            
//         </div>
//         <div style="margin-left:20px;">
//             <input type="button" value="發布" class="submit">
//         </div> 
//         `;
//     })
//     .catch(error => console.error('Error:', error));
// }

// window.onload = function (){
    
//     const url = window.location.href;
//     console.log("url",url);
//     var split = url.split("=");
//     var href = split[0];
//     var id = split[1];
//     updateData(id);
// }
// post.innerHTML = "";
// post.innerHTML +=
// `
// <div class="title">修改公告</div>
// <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
// <div class="create-content flex">
//     內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
    
// </div>
// <div style="margin-left:20px;">
//     <input type="submit" onclick="update(id)" value="發布" class="submit" >
// </div> 
    
// `;
// window.location.href="http://127.0.0.1:5555/小專/首頁/Admin_Login_Index.html";


// function submit() {
//     console.log(LoginToken);
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;

//     const data = {
//         title: title,
//         content: content,
//     };

//     const headers = {
//         'Authorization': `Bearer ${LoginToken}`
//     };
    

//     postData('https://localhost:7275/api/Activity/CreateData', data, headers)
//         .then(({data}) => {
//             console.log(data);
            
//         });
// }

// function updateData(id) {
//     var post = document.querySelector("#post");
//     // 讀取舊有資料
//     fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${id}`, {
//     headers: {
//         'Authorization': `Bearer ${LoginToken}`
//     }
//     })
//     .then(response => response.json())
//     .then(data => {

//         post.innerHTML = "";

//         post.innerHTML +=
//         `
//         <div class="title">修改公告</div>
//         <div class="create-content">標題：<input style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
//         <div class="create-content flex">
//             內容：<textarea name="" id="" cols="74" rows="9">${data.announce_content}</textarea>
            
//         </div>
//         <div style="margin-left:20px;">
//             <input type="button" value="發布" class="submit">
//         </div> 
//         `;
//     })
//     .catch(error => console.error('Error:', error));
// }

// window.onload = function (){
    
//     const url = window.location.href;
//     console.log("url",url);
//     var split = url.split("=");
//     var href = split[0];
//     var id = split[1];
//     updateData(id);
// }