let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let announcementData;


function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/Members/GetOneMemberLevel?id=${id}`, {
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
        
        if(data.level===0)
        {
            post.innerHTML +=
        `
        
            <div class="flex" style="justify-content: center;">
                <div class="title">
                    權限修改
                </div>
                
            </div>
            
            <br>
            <div>
                
            
            </div>
            <table class="reserve-list-table">
                <tr>
                    <td class="table-title">
                        學年
                    </td>
                    <td class="table-title">
                        姓名
                    </td>
                    <td class="table-title">
                        權限
                    </td>
                </tr>
                <tr>
                    <td class="row">
                        ${data.entry_year}
                    </td>
                    <td class="row">
                        ${data.name}
                    </td>
                    <td class="row">
                        <select id="level" style="width:150px;height:30px;">
                            <option value="0" selected>管理者</option>
                            <option value="1">學長姐</option>
                            <option value="2">學生</option>
                        </select>
                    </td>
                </tr>

            </table>
            <br>
            <div style="text-align:center;">
                <input type="button" class="edit-row-button" onclick="update('${id}')" style="width:85px;" value="修改權限">
                <input type="button" class="edit-row-button" style="width:85px;" value="取消修改" onclick="location.href='./Admin-permission.html'">
            </div>
        `;
        }
        else if(data.level===1)
        {
            post.innerHTML +=
        `
        
            <div class="flex" style="justify-content: center;">
                <div class="title">
                    權限修改
                </div>
                
            </div>
            
            <br>
            <div>
                
            
            </div>
            <table class="reserve-list-table">
                <tr>
                    <td class="table-title">
                        學年
                    </td>
                    <td class="table-title">
                        姓名
                    </td>
                    <td class="table-title">
                        權限
                    </td>
                </tr>
                <tr>
                    <td class="row">
                        ${data.entry_year}
                    </td>
                    <td class="row">
                        ${data.name}
                    </td>
                    <td class="row">
                        <select id="level" style="width:150px;height:30px;">
                            <option value="0">管理者</option>
                            <option value="1" selected>學長姐</option>
                            <option value="2">學生</option>
                        </select>
                    </td>
                </tr>

            </table>
            <br>
            <div style="text-align:center;">
                <input type="button" class="edit-row-button" onclick="update('${id}')" style="width:85px;" value="修改權限">
                <input type="button" class="edit-row-button" style="width:85px;" value="取消修改" onclick="location.href='./Admin-permission.html'">
            </div>
        `;
        }
        else if(data.level===2)
        {
            post.innerHTML +=
        `
        
            <div class="flex" style="justify-content: center;">
                <div class="title">
                    權限修改
                </div>
                
            </div>
            
            <br>
            <div>
                
            
            </div>
            <table class="reserve-list-table">
                <tr>
                    <td class="table-title">
                        學年
                    </td>
                    <td class="table-title">
                        姓名
                    </td>
                    <td class="table-title">
                        權限
                    </td>
                </tr>
                <tr>
                    <td class="row">
                        ${data.entry_year}
                    </td>
                    <td class="row">
                        ${data.name}
                    </td>
                    <td class="row">
                        <select id="level" style="width:150px;height:30px;">
                            <option value="0">管理者</option>
                            <option value="1">學長姐</option>
                            <option value="2" selected>學生</option>
                        </select>
                    </td>
                </tr>

            </table>
            <br>
            <div style="text-align:center;">
                <input type="button" class="edit-row-button" onclick="update('${id}')" style="width:85px;" value="修改權限">
                <input type="button" class="edit-row-button" style="width:85px;" value="取消修改" onclick="location.href='./Admin-permission.html'">
            </div>
        `;
        }
        console.log(id);
        console.log(data);
    }) 
}

function update(id) {
    const level = document.getElementById('level').value;
    
    const data={
        members_id:id,
        level: level,
    }

    fetch(`https://localhost:7275/api/Members/ChangeMemberLevel`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`,
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)

        
    })

    .then(data => {
        console.log(data);
        window.location.href="./Admin-permission.html";
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


