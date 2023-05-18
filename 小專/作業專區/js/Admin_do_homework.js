let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
let Account=sessionStorage.getItem('account');


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


function readcheck(id) {

    var post = document.querySelector("#post");
    fetch(`https://localhost:7275/api/HomeworkCheck`)
    .then(response => response.json())
    .then(data => {
        
        post.innerHTML = "";
        data.sort((a, b) => new Date(a.finishtime) - new Date(b.finishtime));
        data.forEach((item) => {

        const date = new Date(item.finishtime);
        const finishtime = date.toLocaleString();
        if(item.name === Account)
        {
            post.innerHTML +=
            `
            <tr style="width:100%;margin-bottom:30px;">
                <td class="row" style="width:15%;">
                    ${item.name}
                </td>
                <td class="row" style="width:30%;">
                    ${finishtime}
                </td>
                <td class="row" style="width:25%;">
                    ${item.check_file}
                </td>
                <td class="row" style="width:30%;">
                    <a href="./Admin_edit_upload_homework.html?id=${item.homeworkcheck_id}"><input type="submit" class="edit-row-button" style="width:85px;" value="修改作業"></a>
                    <input type="submit" class="delete-row-button" style="width:85px;" value="刪除作業" onclick=" deleteData('https://localhost:7275/api/HomeworkCheck/','${item.homeworkcheck_id}')">
                </td>
            </tr>
            `;
        }
        
            
        });
    })

}

// function readcheck(id) {

//     var post = document.querySelector("#post");

//     fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${encodeURIComponent(id)}`, {
//         method: 'GET',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
    
//     .then(response => response.json())
//     .then(data => {
//         announcementData = data;
//         post.innerHTML = "";
//         post.innerHTML +=
//         `
//         <div class="title">修改公告</div>
//         <div class="create-content">標題：<input id="title" maxlength="50" style="line-height: 25px;width:500px;margin: 20px 0px;" type="text" value="${data.announce_title}"></div>
//         <div class="create-content flex">
//             內容：<textarea name="" id="content" maxlength="200" cols="74" rows="9">${data.announce_content}</textarea>
            
//         </div>
//         <div style="margin-left:20px;">
//             <input type="submit" onclick="update('${id}') ,validateForm() " value="發布" class="submit">
//         </div> 
            
//         `;
//         console.log(data);
        
//     }) 

// }


window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    readcheck(id);
}