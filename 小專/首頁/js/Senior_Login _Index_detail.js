window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var href = split[0];
    var id = split[1];
    readdata(id);
}

function readdata(id) {
    var post = document.querySelector("#post");
    fetch(`https://localhost:7275/api/Announcement/ReadOneData?id=${id}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";

        post.innerHTML +=
        `
        <div class="detail-title">${data.announce_title}</div>
        <div class="detail-time"><i style="margin-right:15px;"class="fa-sharp fa-solid fa-clock"></i>${data.update_time}</div>
        <div class="detail-content">
            ${data.announce_content}
            </div>
            
        </div>
        `;

        console.log(data);

    })
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

