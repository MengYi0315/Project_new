let LoginToken = sessionStorage.getItem('LoginToken');

function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息

    if(confirm("確認是否刪除?")){
        return fetch(`${url}${id}`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${LoginToken}`}
        })
        .then(data => {
            console.log(data); // 刪除成功後的回應
            
            fetch("https://localhost:7275/api/Activity/GetAllDataList")
            .then(response => response.json())
            .then(data => {
                post.innerHTML = "";
                data.forEach((item) => {
                    post.innerHTML +=
                    `
                    <div class="relative w-25 flex">
                        <a href="./Admin_Login_detail_activity.html?id=${item.activity_id}" class="a1">
                            <img src="${item.first_image}" class="b-25">
                            <div class="center">${item.activity_title}</div>
                        </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('https://localhost:7275/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
                    </div>
                    `;
                });
                window.onload();
                window.alert("刪除成功");
            })
            .catch(error => console.error(error));
        })
        .catch(error => {
            console.error('There was a problem deleting data:', error);
        });
    
    }
}

window.onload = function() {
    var post = document.querySelector("#post");
    
    fetch("https://localhost:7275/api/Activity/GetAllDataList")
    .then(response => response.json())
    .then(data => {

        console.log("data",data);
        post.innerHTML = "";
        data.forEach((item) => {
            post.innerHTML +=
            `
            <div class="relative w-25 flex">
                <a href="./Admin_Login_detail_activity.html?id=${item.activity_id}" class="a1">
                    <img src="${item.first_image}" class="b-25">
                    <div class="center">${item.activity_title}</div>
                </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('https://localhost:7275/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
            </div>
            `;
        });
    })
    .catch(error => console.error(error));
};
