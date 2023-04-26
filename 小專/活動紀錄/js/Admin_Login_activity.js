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
                <a href="" class="a1">
                    <img src="${item.first_image}" class="b-25">
                    <div class="center">${item.activity_title}</div>
                </a><div class="absolute"><input class="submit" value="X" type="submit" onclick="deleteData('http://localhost:5229/api/Activity/DeleteData?id=', '${item.activity_id}')"></div>
            </div>
            `;
        });
    })
    .catch(error => console.error(error));
};
//http://127.0.0.1:5555/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Admin_Login_activity.html/id=${item.activity_id}

let LoginToken = sessionStorage.getItem('LoginToken');
function deleteData(url, id) {
    console.log('Deleting data:', `${url}${id}`); // 调试信息
    return fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${LoginToken}`}
    })
    .then(data => {
        console.log(data); // 刪除成功後的回應
    })
    .catch(error => {
        console.error('There was a problem deleting data:', error);
    });
}


// // 獲取屏幕尺寸
// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

// // 設置視窗尺寸
// const popupWidth = 500;
// const popupHeight = 500;

// // 計算視窗在屏幕中心的位置
// const leftPos = (screenWidth - popupWidth) / 2;
// const topPos = (screenHeight - popupHeight) / 2;


// // 打開彈出視窗
// window.open('http://localhost:5229/api/Activity/ReadOneData?id=', 'example', `width=${popupWidth}, height=${popupHeight}, left=${leftPos}, top=${topPos}`);





// function updateData(url, id, headers) {
//     return fetch(`${url}?${id}`, {
//         method: 'DELETE',
//         headers: headers
//     })
//     // .then(response => response.json()); // 輸出成 json
// }

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


// window.onload = function() {
//     var post = document.querySelector("#post");
//     fetch("http://localhost:5229/api/Announcement/GetAllDataList")
//     .then((response) => response.json())
//     .then((json) => {
//         post.innerHTML = "";
//         json.forEach((element) => {
//             fetch(`http://localhost:5229/api/Announcement/ReadOneData?id='${element.announce_id}`)
//             .then((response) => response.json())
//             .then((json) => {
//                 const date = new Date(element.update_time);
//                 const update_time = date.toLocaleString(); // 转换为本地日期和时间字符串
//                 console.log(update_time); // "2021/5/5 下午2:29:29" （可能因地区和语言而有所不同）

//                 post.innerHTML +=
//                 `
//                 <div>
//                     <a href="/小專/首頁/Admin_Login_Index_detail.html" class="a1 flex">
//                         <div class="space-between flex">
//                             <div> 標題：  ${element.announce_title}</div>
//                             <div> 更新時間： ${element.update_time}</div>
//                         </div>
//                     </a>
//                 </div>
                
//                 `;
//             });
//         });
//     });
// }



// window.onload = function() {
//     var post = document.querySelector("#post");
//     fetch("http://localhost:5229/api/Announcement/GetAllDataList")
//       .then((response) => response.json())
//       .then((json) => {
//         const announcements = []; // 存儲公告數據的數組
//         json.forEach((element) => {
//           fetch(`http://localhost:5229/api/Announcement/ReadOneData?id='${element.announce_id}`)
//             .then((response) => response.json())
//             .then((json) => {
//               const date = new Date(element.update_time);
//               const update_time = date.toLocaleString(); // 转换为本地日期和时间字符串
//               console.log(update_time); // "2021/5/5 下午2:29:29" （可能因地区和语言而有所不同）
//               announcements.push({ element, update_time }); // 將公告數據與時間關聯起來，添加到數組中
//             });
//         });
//         // 等待所有數據都加載完成，然後對數組按照時間排序
//         Promise.all(announcements).then(() => {
//           announcements.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
//           // 遍歷排序後的數組，按照需要顯示數據
//           announcements.forEach(({ element, update_time }) => {
//             post.innerHTML +=
//             `
//             <div>
//                 <a href="/小專/首頁/Admin_Login_Index_detail.html" class="a1 flex">
//                     <div class="space-between flex">
//                         <div> 標題：  ${element.announce_title}</div>
//                         <div> 更新時間： ${update_time}</div>
//                     </div>
//                 </a>
//             </div>
//             `;
//           });
//         });
//       });
//   }
  



// const pageSize = 10; // 每頁顯示的數量
// let currentPage = 1; // 當前頁碼

// const post = document.querySelector("#post");
// const pagination = document.querySelector("#pagination");

// // 載入初始頁面
// loadPage(currentPage);

// // 點擊分頁按鈕切換頁面
// pagination.addEventListener("click", (event) => {
//     if (event.target.tagName === "BUTTON") {
//         currentPage = parseInt(event.target.dataset.page);
//         loadPage(currentPage);
//     }
// });

// function loadPage(page) {
//     fetch(`http://localhost:5229/api/Announcement/GetAllDataList?page=${page}&pageSize=${pageSize}`)
//     .then(response => response.json())
//     .then(data => {
//         data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
//         post.innerHTML = "";
//         data.forEach((item) => {
//             const date = new Date(item.update_time);
//             const update_time = date.toLocaleString();
//             post.innerHTML +=
//             `
//             <div>
//                 <a href="/小專/首頁/Admin_Login_Index_detail.html" class="a1 flex">
//                     <div class="space-between flex">
//                         <div> 標題：  ${item.announce_title}</div>
//                         <div> 更新時間： ${update_time}</div>
//                     </div>
//                 </a>
//             </div>
//             `;
//         });
//         renderPagination(page);
//     })
//     .catch(error => console.error(error));
// }

// function renderPagination(page) {
//     fetch("http://localhost:5229/api/Announcement/GetTotalPageCount")
//     .then(response => response.json())
//     .then(data => {
//         const totalPage = Math.ceil(data / pageSize);
//         let html = "";
//         for (let i = 1; i <= totalPage; i++) {
//             html += `<button data-page="${i}" ${i === page ? "disabled" : ""}>${i}</button>`;
//         }
//         pagination.innerHTML = html;
//     })
//     .catch(error => console.error(error));
// }

