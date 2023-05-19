
function readcheck(id) {

    var post = document.querySelector("#post");
    fetch(`https://localhost:7275/api/HomeworkCheck/ReadByHomework?id=${id}`)
    .then(response => response.json())
    .then(data => {
        
        post.innerHTML = "";
        data.sort((a, b) => new Date(a.finishtime) - new Date(b.finishtime));
        data.forEach((item) => {

        const date = new Date(item.finishtime);
        const finishtime = date.toLocaleString();
        console.log(item.check_result);
        post.innerHTML +=
        `
        <tr style="width:100%;margin-bottom:30px;">
            <td class="row" style="width:20%;">
                ${item.name}
            </td>
            <td class="row" style="width:30%;">
                ${finishtime}
            </td>
            <td class="row" style="width:35%;">
                <span class="file-text" onclick="downloadFile('${item.check_file}', 'file.txt')">${item.check_file}</span>
            </td>
            <td class="row" style="width:15%;">
                <a href="./Admin_update_check_homework.html?id=${item.homeworkcheck_id}"><input type="button" class="edit-row-button" style="width:85px;"value="作業檢核"></a>
            </td>
        </tr>
        `;
            
        });
    })

}

function downloadFile(fileName) {
    fetch(`https://localhost:7275/api/HomeworkCheck/DownloadFile?filename=${encodeURIComponent(fileName)}`)
    .then(response => response.blob())
    .then(blob => {
        // 创建一个<a>元素，用于下载文件
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;

        // 点击下载链接并移除元素
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
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