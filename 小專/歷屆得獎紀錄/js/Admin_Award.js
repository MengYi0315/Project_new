
function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
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


window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/ContestAward/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        data.forEach((item) => {
            post.innerHTML +=
            `
            <tr class="li-award-win">
                <td style="width:25%;">${item.contest_name}</td>
                <td style="width:25%;">${item.contest_work}</td>
                <td style="width:20%;">${item.contest_rank}</td>
                <td style="width:30%;">
                    <button type="button"  class="edit-row-button"><a href="./Edit_Login_Award.html?id=${item.contest_id}">修改</a></button>
                    <button type="button"  onclick="deleteData('http://localhost:5229/api/ContestAward/DeleteData?id=','${item.contest_id}')"class="delete-row-button">刪除</button>
                </td>
            </tr>
            `;
        });
    })
    .catch(error => console.error(error));
}


