let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let name=sessionStorage.getItem('name');
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

        if(data.check_result === false)
        {
            post.innerHTML +=
            `
            <div class="title">
                        作業檢核
                    </div>
                    <br>
                    <table>
                        <tr>
                            <td class="normal-word text-top field">
                                作業繳交人：
                            </td>
                            <td class="text-top field" style="text-align:left;align-item:center;">
                                ${data.name}
                            </td>
                        </tr>
                        <tr>
                            <td class="normal-word text-top field">
                                作業檔案：
                            </td>
                            <td class="text-top field" style="text-align:left;">
                                ${data.check_file}
                            </td>
                        </tr>
                        <tr>
                            <td class="normal-word text-top field">
                                檢查結果：
                            </td>
                            <td class="text-top field" style="text-align:left;">
                                <select id="check_result" style="width:300px;height:30px;font-size:16px;">
                                
                                    <option value="false" selected>作業尚未檢查</option>
                                    <option value="true">作業已檢查完畢</option>
                                </select>
                            </td>
                        </tr>
                        
                    </table>

                    <div class="flex" style="margin-top:30px;">
                        <input type="submit" value="送出結果" class="reserve-botton" onclick="update('${data.homeworkcheck_id}')">
                        <input type="button" value="取消送出" class="reserve-botton" onclick="location.href='./Admin_detail_check_homework.html?id=${data.homework_id}';">
                    </div>
            `;
        }
        else
        {
            post.innerHTML +=
            `
            <div class="title">
                        作業檢核
                    </div>
                    <br>
                    <table>
                        <tr>
                            <td class="normal-word text-top field">
                                作業繳交人：
                            </td>
                            <td class="text-top field" style="text-align:left;align-item:center;">
                                ${data.name}
                            </td>
                        </tr>
                        <tr>
                            <td class="normal-word text-top field">
                                作業檔案：
                            </td>
                            <td class="text-top field" style="text-align:left;">
                                ${data.check_file}
                            </td>
                        </tr>
                        <tr>
                            <td class="normal-word text-top field">
                                檢查結果：
                            </td>
                            <td class="text-top field" style="text-align:left;">
                                <select id="check_result" style="width:300px;height:30px;font-size:16px;">
                                
                                    <option value="false">作業尚未檢查</option>
                                    <option value="true" selected>作業已檢查完畢</option>
                                </select>
                            </td>
                        </tr>
                        
                    </table>

                    <div class="flex" style="margin-top:30px;">
                        <input type="submit" value="送出結果" class="reserve-botton" onclick="update('${data.homeworkcheck_id}')">
                        <input type="button" value="取消送出" class="reserve-botton" onclick="location.href='./Admin_detail_check_homework.html?id=${data.homework_id}';">
                    </div>
            `;
        }
        
        console.log(data);
    }) 
}

function update(id) {
    const check_result = document.getElementById('check_result').value;

    // 创建一个 FormData 对象，并添加要修改的图片和文字内容
    
    const formData = new FormData();
    // formData.append('homework_id', homework_id);
    formData.append('check_result', check_result);
    console.log(formData.get('check_result'));

    fetch(`https://localhost:7275/api/HomeworkCheck/ChangeCheckStatus?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`,
        },
        body: formData

        
    })

    .then(data => {
        console.log(data);
        window.location.href="./Admin_check_homework.html";
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