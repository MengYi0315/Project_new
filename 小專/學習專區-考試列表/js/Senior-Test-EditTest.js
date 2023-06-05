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

        var start_date =data.testData.start_date;
        var start_time = start_date.split("T");
        console.log(start_time[0]);

        var end_date =data.testData.end_date;
        var end_time = end_date.split("T");
        console.log(end_time[0]);
    //     var existingDateValue = "${data.start_date}";

    // document.getElementById("start_date").value = existingDateValue;
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
                    <input class="text"  id="test_title" value="${data.testData.test_title}">
                </td>

            </tr>
            <tr>
                <td class="normal-word text-top field">
                    考試內容：
                </td>
                <td class="text-top field-textarea">
                    <textarea class="textarea" id="test_content">${data.testData.test_content}</textarea>
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    考試期限：
                </td>
                <td class="text-top field">
                    <input type="date" class="text-date"  id="start_date" value="${start_time[0]}">
                    <span>&nbsp;~&nbsp;</span>
                    <input type="date" class="text-date" id="end_date" value="${end_time[0]}">
                </td>
                
            </tr>
            
        </table>

        <div class="flex" id="post1">
            <input type="submit" value="修改考試" class="reserve-botton" onclick=" update('${data.testData.test_id}')">
            <input type="button" value="取消" class="reserve-botton"  onclick="location.href='./Admin-Test-TestList.html'">
        </div>
        `;
        
        console.log(data);
        
    }) 
}


function update(id) {
    const test_title = document.getElementById('test_title').value;
    const test_content = document.getElementById('test_content').value;
    const start_date = document.getElementById('start_date').value;
    const end_date = document.getElementById('end_date').value;

    // 创建一个 FormData 对象，并添加要修改的图片和文字内容

    const data = {
        test_title:test_title,
        test_content:test_content,
        start_date:start_date,
        end_date:end_date
    };
    
    // const formData = new FormData();
    // // formData.append('homework_id', homework_id);
    // formData.append('test_title', test_title);
    // formData.append('test_content', test_content);
    // formData.append('start_date', start_date);
    // formData.append('end_date', end_date);
    // console.log(formData.get('check_result'));

    fetch(`https://localhost:7275/api/Test/UpdateData?Id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`,
        },
        body: JSON.stringify(data)

        
    })

    .then((response) => response.json())
        .then((data) => {
            if(((test_title != null) && (test_content != null)) && ((start_date != null) && (data.end_date != null))){
                window.alert("考試修改成功，返回頁面查看內容");
                location.href = './Senior-Test-TestList.html';
            }
            else 
            {
                window.alert("考試修改失敗，請重新嘗試");
            }

            
            console.log(data);

        })
        .catch((error) => {
            if (((test_title != null) && (test_content != null)) && ((start_date != null) && (data.end_date != null))){
                window.alert("考試修改成功，返回頁面查看內容");
                location.href = './Senior-Test-TestList.html';
            }
            else 
            {
                window.alert("考試修改失敗，請重新嘗試");
            }
            console.error(error);
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