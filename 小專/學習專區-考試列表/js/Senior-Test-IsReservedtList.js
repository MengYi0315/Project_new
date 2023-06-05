let LoginToken = sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let name = sessionStorage.getItem('name');

    
    
window.onload = function () {
    axios({
            method: 'get',
            url: 'https://localhost:7275/api/TestReserve/GetAllDataList',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginToken}`,
            },
        })
    .then(({ data }) => {
        data.sort((a, b) => new Date(a.reservedate) - new Date(b.reservedate));
        post.innerHTML = "";
        data.forEach((item) => {
            const date = item.reservedate.split("T");
            const datetime = date[0];
            const date1 = item.reservetime.split(":");
            const reservetime = date1[0] + ":" + date1[1];
            if(item.proctor_name === name)
            {
                if(item.is_success === true)
                {
                    post.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.tester_name}
                        </td>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${datetime} ${reservetime}
                        </td>
                    </tr>
                    `;
                }
                
            }
            console.log("data1", item);
        });
        reserve();
    })
    .catch(error => {
        console.log(error);
    })
}
    
function reserve() {
    console.log(LoginToken);
    axios({
            method: 'get',
            url: 'https://localhost:7275/api/TestReserve/GetAllDataList',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginToken}`,
            },
        })
    .then(({ data }) => {
        data.sort((a, b) => new Date(a.reservedate) - new Date(b.reservedate));
        post1.innerHTML = "";
        data.forEach((item) => {
            const date = item.reservedate.split("T");
            const datetime = date[0];
            const date1 = item.reservetime.split(":");
            const reservetime = date1[0] + ":" + date1[1];
            if(item.proctor_name === name)
            {
                if((item.is_success === false) && (item.is_fail === false))
                {
                    post1.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.tester_name}
                        </td>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${datetime} ${reservetime}
                        </td>
                        <td class="row">
                            <input type="button" value="確認預約" class="row-button" onclick="update('${item.tester_id}')">
                            <input type="button" value="回絕預約" class="d-4-row-button" onclick="updateno('${item.tester_id}')">
                        </td>
                    </tr>
                    `;
                }
                if(item.is_success === true)
                {
                    post1.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.tester_name}
                        </td>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${datetime} ${reservetime}
                        </td>
                        <td class="row">
                            已確認預約
                        </td>
                    </tr>
                    `;
                }
                if(item.is_fail === true)
                {
                    post1.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.tester_name}
                        </td>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${datetime} ${reservetime}
                        </td>
                        <td class="row" style="color:yellow;font-weight:bolder;">
                            已回絕預約
                        </td>
                    </tr>
                    `;
                }
                
            }
            console.log("data2", item);
        });
    })
    .catch(error => {
        console.log(error);
    })

}

function update(id) {
    const data={
        is_success:true
    }

    fetch(`https://localhost:7275/api/TestReserve/TesterSuccessReserve?Id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`,
        },
        body:JSON.stringify(data)

        
    })

    .then(data => {
        console.log(data);
        
        window.onload();
        // window.location.href="./Senior-Test-IsReservedtList.html";
    });

}
function updateno(id) {

    const data={
        is_fail:true
    }
    fetch(`https://localhost:7275/api/TestReserve/TesterFailReserve?id=${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`,
        },
        body:JSON.stringify(data)
        
    })

    .then(data => {
        console.log(data);
        window.onload();
        // window.location.href="./Senior-Test-IsReservedtList.html";
    });

}