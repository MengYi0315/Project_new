let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let announcementData;


function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/HomeworkCheck/ReadOneData?id=${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
        }
    })
    
    .then(response => response.json())
    .then(data => {
        announcementData = data;
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">
                    修改作業
                </div>
                <br>
                <table>
                    <tr>
                        <td class="normal-word text-top field">
                            上傳檔案：
                        </td>
                        <td class="text-top field">
                            <input type="file" id="FormFile" style="justify-content: left;background-color: #D9D9D9;width:300px;">
                        </td>
                        
                    </tr>
                    
                </table>

                <div class="flex">
                    <input type="submit" value="修改作業" class="reserve-botton" onclick="update('${data.homeworkcheck_id}')">
                    <input type="button" value="取消修改" class="reserve-botton" onclick="location.href='./Admin_do_homework.html';">
                </div>
        `;
        console.log(data);
    }) 
}

function update(id) { 
    const check_file = document.getElementById('FormFile').files[0];

    // 创建一个 FormData 对象，并添加要修改的图片和文字内容
    
    const formData = new FormData();
    // formData.append('homework_id', homework_id);
    formData.append('FormFile', check_file);
    console.log(formData.get('FormFile'));

    fetch(`https://localhost:7275/api/HomeworkCheck/UpdateData?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`,
            

        },
        body: formData

        
    })

    .then(data => {
        console.log(data);
        window.location.href="./Admin_do_homework.html";
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