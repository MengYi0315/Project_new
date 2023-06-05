let LoginToken = sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let name = sessionStorage.getItem('name');

function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息

    if (confirm("確定是否刪除?")) {
        return fetch(`${url}${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}` }
            })
            .then(data => {
                console.log(data); // 刪除成功後的回應
                window.onload();
                window.alert("刪除成功");
            })
            .catch(error => {
                console.error('There was a problem deleting data:', error);
                window.alert("刪除失敗ˋ");
            });

    }
}

window.onload = function () {
    axios({
            method: 'get',
            url: 'https://localhost:7275/api/Test/GetAllDataList',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginToken}`,
            },
        }).then(({ data }) => {
            console.log('data1', data);
            var testlist = document.querySelector("#testlist");

            data.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
            testlist.innerHTML = "";

            data.forEach((item) => {
                // const s = item.is_success;

                //  s =false;

                const start_dateString = item.start_date;
                const end_dateString = item.end_date;

                const start_date = new Date(start_dateString);
                const end_date = new Date(end_dateString);

                // 獲取年月日(開始日期)
                const start_year = start_date.getFullYear();
                const start_month = start_date.getMonth() + 1; // 月份从0开始，需要加1
                const start_day = start_date.getDate();

                // 构建正常格式的日期字符串
                const start_formattedDate = `${start_year}-${start_month < 10 ? '0' + start_month : start_month}-${start_day < 10 ? '0' + start_day : start_day}`;

                // 獲取年月日(開始日期)
                const end_year = end_date.getFullYear();
                const end_month = end_date.getMonth() + 1; // 月份从0开始，需要加1
                const end_day = end_date.getDate();

                // 构建正常格式的日期字符串
                const end_formattedDate = `${end_year}-${end_month < 10 ? '0' + end_month : end_month}-${end_day < 10 ? '0' + end_day : end_day}`;
                console.log("item.tester_name", item.tester_name);
                console.log("name", name);
                if (item.name === name) {
                    testlist.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${item.test_content}
                        </td>
                        <td class="row">
                            ${start_formattedDate} ~ ${end_formattedDate}
                            
                        </td>
                        <td class="row">
                            <input type="button" value="修改" class="edit-row-button"  onclick="location.href='./Test-EditTest.html?id=${item.test_id}';">
                            <input type="button" value="刪除" class="delete-row-button"  onclick="deleteData('https://localhost:7275/api/Test/DeleteData?id=', '${item.test_id}') ">
                        </td>
                    </tr>
                    `;
                }
                else
                {
                    testlist.innerHTML +=
                    `
                    <tr>
                        <td class="row">
                            ${item.test_title}
                        </td>
                        <td class="row">
                            ${item.test_content}
                        </td>
                        <td class="row">
                            ${start_formattedDate} ~ ${end_formattedDate}
                        </td>
                        <td class="row">
                            <input type="button" value="前往預約" class="row-button"  onclick="location.href='./Test-ReserveTest.html?id=${item.test_id}';">
                        </td>
                    </tr>
                    `;
                }
                // if(s === false){

                // }

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
        }).then(({ data }) => {
            console.log('data2', data);
            var reservelist = document.querySelector("#reservelist");

            data.sort((a, b) => new Date(a.reservedate) - new Date(b.reservedate));
            reservelist.innerHTML = "";

            data.forEach((item) => {
                console.log('item.tester_name', item.tester_name);
                console.log('item.proctor_name', item.proctor_name);
                console.log('name', name);
                const date = item.reservedate.split("T");
                const datetime = date[0];
                const date1 = item.reservetime.split(":");
                const reservetime = date1[0] + ":" + date1[1];
                if (item.tester_name === name) {
                    if (item.is_success === true) {
                        reservelist.innerHTML +=
                        `
                        <tr>
                            <td class="row" style="width:20%;">
                                ${item.test_title}
                            </td>
                            <td class="row" style="width:20%;">
                                ${item.proctor_name}
                            </td>
                            <td class="row" style="width:20%;">
                                ${datetime}
                            </td>
                            <td class="row" style="width:20%;">
                                ${reservetime}
                            </td>
                            <td class="row" style="width:20%;">
                                <span class="reject-text">您已預約成功</span>
                            </td>

                        </tr>
                        `;
                    }
                    if (item.is_fail === true) {
                        reservelist.innerHTML +=
                        `
                        <tr>
                            <td class="row" style="width:20%;">
                                ${item.test_title}
                            </td>
                            <td class="row" style="width:20%;">
                                ${item.proctor_name}
                            </td>
                            <td class="row" style="width:20%;">
                                ${datetime}
                            </td>
                            <td class="row" style="width:20%;">
                                ${reservetime}
                            </td>
                            <td class="row" style="width:20%;">
                                <span class="reject-text">您的預約已被回絕!請</span>
                                <input type="button" value="重新預約" class="row-button" onclick="location.href='./Test-ReserveTest.html?id=${item.test_id}'">
                                
                            </td>

                        </tr>
                        `;
                    }
                    if ((item.is_fail === false) && (item.is_success === false)) {
                        reservelist.innerHTML +=
                        `
                        <tr>
                            <td class="row" style="width:20%;">
                                ${item.test_title}
                            </td>
                            <td class="row" style="width:20%;">
                                ${item.proctor_name}
                            </td>
                            <td class="row" style="width:20%;">
                                ${datetime}
                            </td>
                            <td class="row" style="width:20%;">
                                ${reservetime}
                            </td>
                            <td class="row" style="width:20%;">
                            <input type="submit" value="修改" class="edit-row-button"  onclick="location.href='./Test-EditReserveTest.html?id=${item.reservetime_id}';">
                            <input type="button" value="刪除" class="delete-row-button"  onclick="deleteData('https://localhost:7275/api/TestReserve/DeleteData?id=', '${item.reservetime_id}') ">
                                
                            </td>

                        </tr>
                        `;
                    }
                }
                console.log("data2", item);
            });
        }).catch(error => {
            console.log(error);
        })

}
