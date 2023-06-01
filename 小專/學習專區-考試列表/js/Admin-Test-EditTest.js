let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let name=sessionStorage.getItem('name');
let announcementData;


function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/Test/ReadOneData?Id=${id}`, {
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
                    修改考試
                </div>
                <br>
                <table>
                    <tr>
                        <td class="normal-word text-top field">
                            考試名稱：
                        </td>
                        <td class="text-top field">
                            <input class="text"  id="test_title">
                        </td>

                    </tr>
                    <tr>
                        <td class="normal-word text-top field">
                            考試內容：
                        </td>
                        <td class="text-top field-textarea">
                            <textarea class="textarea" id="test_content"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="normal-word text-top field">
                            考試期限：
                        </td>
                        <td class="text-top field">
                            <input type="date" class="text-date"  id="start_date">
                            <span>&nbsp;~&nbsp;</span>
                            <input type="date" class="text-date" id="end_date">
                        </td>
                        
                    </tr>
                    
                </table>

                <div class="flex" id="post1">
                    <input type="submit" value="修改考試" class="reserve-botton" onclick=" update('${id}')">
                    <input type="button" value="取消" class="reserve-botton"  onclick="location.href='./Admin-Test-TestList.html'">
                </div>
                `;
        
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

    fetch(`https://localhost:7275/api/Test/UpdateData?Id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`,
        },
        body: formData

        
    })

    .then(data => {
        console.log(data);
        window.location.href="./Admin-Test-TestList.html";
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