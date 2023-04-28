let LoginToken = sessionStorage.getItem('LoginToken');

function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${LoginToken}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應
        fetch("http://localhost:5229/api/Activity/GetAllDataList")
        .then(response => response.json())
        .then(data => {
            post.innerHTML = "";
            data.forEach((item) => {
                post.innerHTML +=
                `
                <div class="relative w-25 flex">
                    <a href="http://127.0.0.1:5555/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_detail_activity.html?id=${item.activity_id}" class="a1">
                        <img src="${item.first_image}" class="b-25">
                        <div class="center">${item.activity_title}</div>
                    </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('http://localhost:5229/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
                </div>
                `;
            });
            window.onload();
        })
        .catch(error => console.error(error));
    })
    .catch(error => {
        console.error('There was a problem deleting data:', error);
    });
}

window.onload = function() {
    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/Activity/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        data.forEach((item) => {
            post.innerHTML +=
            `
            <div class="relative w-25 flex">
                <a href="http://127.0.0.1:5555/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_detail_activity.html?id=${item.activity_id}" class="a1">
                    <img src="${item.first_image}" onclick="readone('http://127.0.0.1:5555/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_detail_activity.html?id=','${item.activity_id}','${item.activity_title}',,'${item.activity_content}')" class="b-25">
                    <div class="center">${item.activity_title}</div>
                </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('http://localhost:5229/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
            </div>
            `;
        });
    })
    .catch(error => console.error(error));
};
