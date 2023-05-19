let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
function postData(url, data, headers) {
    const formData = new FormData();
    formData.append('homework_id', data.homework_id);
    formData.append('check_note', data.check_note);
    formData.append('FormFile', data.check_file);

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
    .then(response => response.formData)
}


function submit(id) {
    const check_note = "加油";
    const check_file = document.getElementById('FormFile').files[0];

    const data = {
        homework_id:id,
        check_note:check_note,
        check_file: check_file,
    };

    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    console.log(data);

    postData('https://localhost:7275/api/HomeworkCheck/create', data, headers)
        .then(({data}) => {
            
            console.log(data);
            window.location.href="./Login_release_List.html";
        });
}


function updateData(id) {
    var post = document.querySelector("#post");
    // 讀取舊有資料
    fetch(`https://localhost:7275/api/Homework/ReadOneData?id=${id}`, {
    headers: {
        'Authorization': `Bearer ${LoginToken}`
    }
    })
    .then(response => response.json())
    .then(data => {

        post.innerHTML = "";

        post.innerHTML +=
        `
        <div class="title">
                    上傳作業
                </div>
                <br>
                <table>
                    <tr>
                        <td class="normal-word text-top field">
                            檢核人：
                        </td>
                        <td class="text-top field">
                            <input class="text" value="${data.name}" disabled>
                        </td>

                    </tr>
                    
                    <tr>
                        <td class="normal-word text-top field">
                            作業標題：
                        </td>
                        <td class="text-top field">
                            <input class="text" id="title" value="${data.homework_title}" disabled>
                        </td>

                    </tr>
                    <tr>
                        <td class="normal-word text-top field">
                            作業說明：
                        </td>
                        <td class="text-top field-textarea">
                            <textarea class="textarea" id="content"disabled>${data.homework_content}</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="normal-word text-top field">
                            上傳檔案：
                        </td>
                        <td class="text-top field" id="throw">
                             <input type="file" id="FormFile" style="justify-content: left;background-color: #D9D9D9;width:300px;">
                        </td>
                        
                    </tr>
                    
                </table>

                <div class="flex">
                    <input type="button" value="上傳作業" class="reserve-botton" onclick="submit('${id}')">
                    <input type="button" value="取消上傳" class="reserve-botton" onclick="location.href='./Login_release_List.html';">
                </div>
        `;
        
    })
    .catch(error => console.error('Error:', error));
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    updateData(id);
}