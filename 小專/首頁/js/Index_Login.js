window.onload = function() {
    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/Announcement/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        post.innerHTML = "";
        data.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            post.innerHTML +=
            `
            <div>
                <a href="/小專/首頁/Admin_Login_Index_detail.html?id=${item.announce_id}" 
                
                class="a1 flex">
                    <div class="space-between flex">
                        <div> 標題： ${item.announce_title}</div>
                        <div> 更新時間： ${update_time}</div>
                    </div>
                </a>
            </div>
            `;
        });
    })
    .catch(error => console.error(error));
}


