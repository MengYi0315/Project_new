
function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息

    if(confirm("確定是否刪除?")){
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
}


window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken);
let name=sessionStorage.getItem('name');
    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/Homework")
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(a.end_time) - new Date(b.end_time));
        post.innerHTML = "";
        data.forEach((item) => {
            const date1 = new Date(item.start_time);
            const start_time = date1.toLocaleString();
            const date2 = new Date(item.end_time);
            const end_time = date2.toLocaleString();
            if(item.name === name)
            {
                post.innerHTML +=
                `
                <tr style="width:100%;margin-bottom:30px;">
                    <td class="row" style="width:15%;">
                        ${item.name}
                    </td>
                    <td class="row" style="width:15%;">
                        ${item.homework_title}
                    </td>
                    <td class="row" style="width:25%;">
                        ${item.homework_content}
                    </td>
                    <td class="row" style="width:25%;">
                        <span>${start_time}到</span><br>
                        <span>${end_time}止</span>
                        
                    </td>
                    <td class="row" style="width:20%;">
                        <a href="./Login_upload_homework.html?id=${item.homework_id}"><input type="submit"  class="edit-row-button" style="width:80px;"value="上傳作業"></a>
                        <input type="submit"  class="delete-row-button" style="width:80px;" value="刪除作業" onclick="deleteData('https://localhost:7275/api/Homework/', '${item.homework_id}')">
                    </td>
                </tr>
                `;
            }
            else
            {
                post.innerHTML +=
                `
                <tr style="width:100%;margin-bottom:30px;">
                    <td class="row" style="width:15%;">
                        ${item.name}
                    </td>
                    <td class="row" style="width:15%;">
                        ${item.homework_title}
                    </td>
                    <td class="row" style="width:25%;">
                        ${item.homework_content}
                    </td>
                    <td class="row" style="width:25%;">
                        <span>${start_time}到</span><br>
                        <span>${end_time}止</span>
                        
                    </td>
                    <td class="row" style="width:20%;">
                        <a href="./Login_upload_homework.html?id=${item.homework_id}"><input type="submit"  class="edit-row-button" style="width:80px;"value="上傳作業"></a>
                </tr>
                `;
            }
            
        });
    })
    .catch(error => console.error(error));
}