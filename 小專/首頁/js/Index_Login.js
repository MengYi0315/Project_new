// const apiURL = 'http://localhost:5229/api/Announcement/GetAllDataList/${post.id}';

// const getPosts = async () => {
//     try {
//     const response = await fetch(apiURL);
//     const data = await response.json();

//     // 遍歷每個物件，並輸出對應的ID、標題、時間
//     data.forEach(post => {
//         console.log(`ID: ${post.id}`);
//         console.log(`標題: ${post.title}`);
//         console.log(`時間: ${post.created_at}`);
//     });

//     } catch (error) {
//         console.log(error);
//     }
// }

// // 當頁面載入完成後自動執行getPosts函式
// window.onload = getPosts;


// window.onload = function() {
//     var post = document.querySelector("#post");
//     var allpost = [];
//     fetch("http://localhost:5229/api/Announcement/GetAllDataList")
//     .then((response) => response.json())
//     .then((json) => {
//         allpost = json.slice(0, 10);
//         post.innerHTML = "";
//         allpost.forEach((element) => {
//             fetch(`http://localhost:5229/api/Announcement/GetDataById/${element.announce_id}`)
//             .then((response) => response.json())
//             .then((json) => {
//                 post.innerHTML +=
//                 `
//                 <div> ID: ${element.announce_id} </div>
//                 <div> 標題是：  ${json.announce_title}</div>
//                 <div> 文章內容： ${json.announce_content}</div>
//                 `;
//             });
//         });
//     });
// }


window.onload = function() {
    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/Announcement/GetAllDataList")
    .then((response) => response.json())
    .then((json) => {
        post.innerHTML = "";
        json.forEach((element) => {
            fetch(`http://localhost:5229/api/Announcement/ReadOneData?id='${element.announce_id}`)
            .then((response) => response.json())
            .then((json) => {
                post.innerHTML +=
                `
                <div>
                    <a href="/小專/首頁/Admin_Login_Index_detail.html" class="a1 flex">
                        <div class="space-between flex">
                            <div> 標題：  ${element.announce_title}</div>
                            <div> 更新時間： ${element.update_time}</div>
                        </div>
                    </a>
                </div>
                
                `;
            });
        });
    });
  }
  
