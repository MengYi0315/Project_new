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
            修改考試預約
        </div>
        <br>
        <table>
            <tr>
                <td class="normal-word text-top field">
                    預約考試：
                </td>
                <td class="text-top field">
                    <select class="text">
                        <option>第八章口試</option>
                        <option>第八章筆試</option>
                        <option>第九章口試</option>
                        <option>Html</option>
                        
                    </select>
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    考核者：
                </td>
                <td class="text-top field">
                    <select class="text">
                        <option>王曉明</option>
                        <option>王大明</option>
                        <option>王一明</option>
                        <option>王二明</option>
                        <option>王三明</option>
                        <option>王四明</option>
                        <option>王五明</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    預約日期：
                </td>
                <td class="text-top field">
                    <input type="date" class="text">
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    預約時段：
                </td>
                <td class="text-top field">
                    <select class="text">
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        
                    </select>
                </td>
            </tr>
        </table>

        <div class="flex">
            <input type="button" value="修改預約" class="reserve-botton">
            <input type="button" value="取消" class="reserve-botton"  onclick="location.href='./Admin-Test-TestList.html'">
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