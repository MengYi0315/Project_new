function readdata(url,id) {
    var post = document.querySelector("#post");
    fetch(`${url}${id}`)
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        post.innerHTML = "";

            post.innerHTML +=
            `
            <div class="detail-title">${data.announce_title}</div>
            <div class="detail-time"><i style="margin-right:15px;"class="fa-sharp fa-solid fa-clock"></i>${item.update_time}</div>
            <div class="detail-content">
                ${data.announce_content}
                </div>
                
            </div>
            `;

    })
    .catch(error => console.error(error));
}

// function readdata(url,id) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//         // 處理伺服器回應的資料
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//         // 在此處理回傳的資料，例如將其填充到 HTML 元素中
//         }
//     };
//     xhr.open("GET", url + id);
//     xhr.send();
// }


// function fetchData(id) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//         // 處理伺服器回應的資料
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//         // 在此處理回傳的資料，例如將其填充到 HTML 元素中
//         document.getElementById("data-title").textContent = data.title;
//         document.getElementById("data-content").textContent = data.content;
//         }
//     };
//     xhr.open("GET", "/api/data/" + id);
//     xhr.send();
// }

// // 假設需要查詢的 ID 為 123，可以調用 fetchData 函數
// fetchData(123);

