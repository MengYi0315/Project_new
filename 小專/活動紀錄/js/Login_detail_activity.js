

function readone(id) {
    
    var popup = document.querySelector("#popup");
    console.log('Readone data:', `${id}`); // 调试信息
    
    fetch(`https://localhost:7275/api/Activity/ReadOneData?id=${id}`)
    .then(response => response.json())
    .then(data => {
        popup.innerHTML = "";
        popup.innerHTML +=
        `
            <div class="absolute-x "><a href="./Login_activity.html">X</a></div>
            <div class="reveal-left flex">
                <img src="${data.first_image}" class="b-25">
            </div>
            <div class="reveal-right flex">
                <div class="title-detail">${data.activity_title}</div>
                <div class="activity-detail">${data.activity_content}</div>
            </div>
            
            
        `;
        console.log(data);
    })
    .catch(error => console.error(error));
}
function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
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
                    <a href="./Login_detail_activity.html?id=${item.activity_id}" class="a1">
                        <img src="${item.first_image}" class="b-25">
                        <div class="center">${item.activity_title}</div>
                    </a>
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

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    readone(id);
}
// window.onload = function() {
//     var post = document.querySelector("#post");
//     fetch("https://localhost:7275/api/Activity/GetAllDataList")
//     .then(response => response.json())
//     .then(data => {
//         post.innerHTML = "";
//         data.forEach((item) => {
//             post.innerHTML +=
//             `
//             <div class="relative w-25 flex">
//                 <a href="./Admin_Login_detail_activity.html?id=${item.activity_id}" class="a1">
//                     <img src="${item.first_image}" class="b-25">
//                     <div class="center">${item.activity_title}</div>
//                 </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('https://localhost:7275/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
//             </div>
//             `;
//         });
//     })
//     .catch(error => console.error(error));
// };
        // popup.innerHTML +=
        //     `
        //         <div class="absolute-x "><a href="http://127.0.0.1:5500/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_activity.html">X</a></div>
        //         <div class="reveal-left flex">
        //             <a href="http://127.0.0.1:5500/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_detail_activity.html?id=${item.activity_id}"><img src="${item.first_image}" class="b-25"></a>
        //         </div>
        //         <div class="reveal-right flex">
        //             <div class="title-detail">${item.activity_title}</div>
        //             <div class="activity-detail">${item.activity_content}</div>
        //         </div>
        //         <div class="absolute-edit"><a href="./Edit_Login_activity?id=${item.activity_id}"><img src="./img/edit.PNG" style="width: 45px;height:40px;"></a></div>
                
        //     `;