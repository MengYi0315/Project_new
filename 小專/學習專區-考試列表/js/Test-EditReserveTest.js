

async function urlid(){
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    readdata(id);
    // memberdata();
}


// async 
function readdata(id) {

    var post = document.querySelector("#post");
    fetch(`https://localhost:7275/api/TestReserve/ReadOneData?id=${id}`)
    .then(response => response.json())
    .then(data => {
        const date =data.data.reservedate.split("T");
        const datetime = date[0];
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
                    考試標題：
                </td>
                <td class="text-top field" style="float: left;">
                ${data.data.test_title}
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    考核者：
                </td>
                <td class="text-top field">
                    <select class="text" id="member">
                        
                    </select>
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    預約日期：
                </td>
                <td class="text-top field">
                    <input type="date" class="text" id="date" value="${datetime}">
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    預約時段：
                </td>
                <td class="text-top field">
                    <select class="text" id="time">
                        <option selected>${data.data.reservetime}</option>
                        <option>18:00:00</option>
                        <option>19:00:00</option>
                        <option>20:00:00</option>
                        <option>21:00:00</option>
                    </select>
                </td>
            </tr>
        </table>

        <div class="flex" id="button">
            <input type="submit" value="修改預約" class="reserve-botton" onclick=" update('${data.data.reservetime_id}')">
            <input type="button" value="取消修改" class="reserve-botton" onclick="location.href='./Test-TestList.html'">
        </div>
        `;
        var member = document.querySelector("#member");

        member.innerHTML = "";
        
        if (data.memberData && data.memberData.length > 0) {
            data.memberData.forEach((item) => {
                // console.log("item",item)
                // const date = new Date(item.update_time);
                // const update_time = date.toLocaleString();
                member.innerHTML += `
                <option value="${item.members_id}">${item.name}</option>
                `;
            });
            }
            console.log(data);
    })
}

function update(id)
{
    const Newmember_id = document.getElementById('member').value;
    const reservedate = document.getElementById('date').value;
    const reservetime = document.getElementById('time').value;

    console.log(Newmember_id)
    const data = {
        Newmember_id,
        reservedate,
        reservetime,
    }

    fetch(`https://localhost:7275/api/TestReserve/UpdateTestResever?id=${encodeURIComponent(id)}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${LoginToken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data) // 加入要傳送的公告內容
    })
    .then((response) => response.json())
        .then((data) => {
            if (data.reservedate != null && data.reservetime != null) {
                window.alert("預約考試修改成功，返回頁面查看預約狀況");
                location.href = './Test-TestList.html';
            }
            else 
            {
                window.alert("預約考試修改失敗，請重新嘗試");
            }

            
            console.log(data);

        })
        .catch((error) => {
            if (data.reservedate != null && data.reservetime != null) {
                window.alert("預約考試修改成功，返回頁面查看預約狀況");
                location.href = './Test-TestList.html';
            }
            else 
            {
                window.alert("預約考試修改失敗，請重新嘗試");
            }
            console.error(error);
        });
}


//新增

let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

// function postData(url, data, headers) {

//     return fetch(url, {
//         body: JSON.stringify(data),
//         headers: headers,
//         method: 'PUT',
//         mode: 'cors',
//     })
//     //.then(response => response.json()) //輸出成json
// }

// function submit(id) {
//     console.log(LoginToken);
//     const  members_id = document.getElementById('member').value;
//     const reservedate = document.getElementById('date').value;
//     const reservetime = document.getElementById('time').value;
//     const test_id = id;

//     console.log(members_id)
//     const data = {
//         members_id,
//         reservedate,
//         reservetime,
//         test_id
//     }
//     console.log("data",data);
//     const headers = {
//         'Authorization': `Bearer ${LoginToken}`,
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     };
//     postData('https://localhost:7275/api/TestReserve/CreateData', data, headers)
//         .then(({data}) => {
            
//             console.log(data);

//         })

// }


window.onload = function() {

    urlid();
}


