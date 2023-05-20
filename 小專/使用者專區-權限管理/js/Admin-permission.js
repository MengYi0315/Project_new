let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
let name=sessionStorage.getItem('name');


function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息

    if(confirm("確定是否刪除?")){
            return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應
        // window.onload();
        // window.alert("刪除成功");
    })
    // .catch(error => {
    //     console.error('There was a problem deleting data:', error);
    //     window.alert("刪除失敗ˋ");
    // });

    }
}
// function update(id) {
    
//     const data={
//         is_delete: 1,
//     }

//     fetch(`https://localhost:7275/api/Members/ChangeMemberLevel`, {
//         method: 'PUT',
//         mode: 'cors',
//         headers: {
//             'Authorization': `Bearer ${LoginToken}`,
//             'Content-Type': 'application/json',
//         },
//         body:JSON.stringify(data)

        
//     })

//     .then(data => {
//         console.log(data);
//         window.location.href="./Admin-permission.html";
//     });
// }


window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/Members/GetMemberLevel")
    .then(response => response.json())
    .then(data => {
        // data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        post.innerHTML = "";
        data.sort((a, b) => new Date(a.entry_year) - new Date(b.entry_year));
        data.forEach((item) => {
            // const date = new Date(item.update_time);
            // const update_time = date.toLocaleString();
            post.innerHTML +=
            `
            <tr>
                <td class="row">
                    ${item.entry_year}
                </td>
                <td class="row">
                    ${item.name}
                </td>
                <td class="row" style="width:20%;">
                    ${item.role}
                </td>
                <td class="row" style="width:30%;">
                    <a href="./Admin-edit-permission.html?id=${item.members_id}"><input type="button" class="edit-row-button" style="width:85px;" value="修改權限"></a>
                    <a href="./Admin-permission.html"><input type="button" class="delete-row-button" onclick="deleteData('https://localhost:7275/api/DeleteMember?id=','${item.members_id}')"style="width:85px;" value="刪除會員"></a>
                    </td>
            </tr>
            `;
        });
    })
    .catch(error => console.error(error));
}


