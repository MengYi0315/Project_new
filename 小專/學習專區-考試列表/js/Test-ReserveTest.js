

// function memberdata(){
//     var member = document.querySelector("#member");
//     fetch("https://localhost:7275/api/Members/GetIDList")
//     .then(response => response.json())
//     .then(data => {
//         // console.log("member",data);

//         member.innerHTML = "";
//         data.forEach((item) => {
//             // console.log("item",item)
//             // const date = new Date(item.update_time);
//             // const update_time = date.toLocaleString();

//             member.innerHTML +=
//             `

//             <option value=${item.members_id}>${item.name}</option>
//             `;
//         });
//     })
// }


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
    fetch(`https://localhost:7275/api/Test/ReadOneData?id=${id}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        
        post.innerHTML +=
        `
        <div class="title">
            考試預約
        </div>
        <br>
        <table>
            <tr>
                <td class="normal-word text-top field">
                    考試標題：
                </td>
                <td class="text-top field" style="float: left;">
                ${data.testData.test_title}
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
                    <input type="date" class="text" id="date">
                </td>
            </tr>
            <tr>
                <td class="normal-word text-top field">
                    預約時段：
                </td>
                <td class="text-top field">
                    <select class="text" id="time">
                        <option selected>18:00:00</option>
                        <option>19:00:00</option>
                        <option>20:00:00</option>
                        <option>21:00:00</option>
                    </select>
                </td>
            </tr>
        </table>

        <div class="flex" id="button">
            <input type="submit" value="提交預約" class="reserve-botton" onclick=" submit('${data.testData.test_id}')">
            <input type="button" value="取消預約" class="reserve-botton" onclick="location.href='./Test-TestList.html'">
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
    })
    }

    



//新增

let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function postData(url, data, headers) {

    return fetch(url, {
        body: JSON.stringify(data),
        headers: headers,
        method: 'POST',
        mode: 'cors',
    })
    //.then(response => response.json()) //輸出成json
}

function submit(id) {
    console.log(LoginToken);
    const  members_id = document.getElementById('member').value;
    const reservedate = document.getElementById('date').value;
    const reservetime = document.getElementById('time').value;
    const test_id = id;

    console.log(members_id)
    const data = {
        members_id,
        reservedate,
        reservetime,
        test_id
    }
    console.log("data",data);
    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('https://localhost:7275/api/TestReserve/CreateData', data, headers)
        .then(({data}) => {
            
            console.log(data);

        })

}

window.onload = function() {

    // var testlist = document.querySelector("#testlist");
    // fetch("https://localhost:7275/api/Test")
    // .then(response => response.json())
    // .then(data => {
        

    //     testlist.innerHTML = "";
    //     data.forEach((item) => {
            
    //         testlist.innerHTML +=
    //         `
            
    //         <option value=${item.test_id}>${item.test_title}</option>
    //         `;
    //     });
    // })
    // .catch(error => console.error(error));

    // var member = document.querySelector("#member");
    // fetch("https://localhost:7275/api/Members/GetIDList")
    // .then(res => res.json())
    // .then(data => {
    //     console.log("member", data)
    //     member.innerHTML = "";
    //     data.forEach((item) => {

    //         member.innerHTML =
    //         `   
    //         <option value=${item.members_id}>${item.name}</option>

    //         `

    //     });
    // })
    // const url = window.location.href;
    // console.log("url",url);
    // var split = url.split("=");
    // var href = split[0];
    // var id = split[1];ㄋ
    // readdata(id);
    // console.log(id)

    urlid();


}


