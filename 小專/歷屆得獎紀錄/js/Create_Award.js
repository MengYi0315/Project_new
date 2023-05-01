let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);
function postData(url, data, headers) {
    return fetch(url, {
        body: JSON.stringify(data),
        headers: headers,
        method: 'POST',
        mode: 'cors',
    })
    //.then(response => response.json()) //輸出成json
}

function submit() {
    console.log(LoginToken);
    const contest_year = document.getElementById('contest_year').value;
    const contest_name = document.getElementById('contest_name').value;
    const contest_work = document.getElementById('contest_work').value;
    const contest_rank = document.getElementById('contest_rank').value;


    const data = {
        contest_year,
        contest_name,
        contest_work,
        contest_rank
    }
    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('http://localhost:5229/api/ContestAward/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);
            window.onload();
            window.alert("新增成功");
        })
        .catch(error => {
            // window.alert("新增失敗");
        })
}


// function deleteData(url, id) {
//     console.log('Deleting data:', `${url}${id}`); // 调试信息
//     return fetch(`${url}${id}`, {
//         method: 'DELETE',
//         headers: {'Authorization': `Bearer ${sessionStorage.getItem('LoginToken')}`}
//     })
//     .then(data => {
//         console.log(data); // 刪除成功後的回應
//         window.onload();
//         window.alert("刪除成功");
//     })
//     .catch(error => {
//         console.error('There was a problem deleting data:', error);
//         window.alert("刪除失敗ˋ");
//     });
// }

// window.onload = function() {
//     var post = document.querySelector("#post");
//     fetch("http://localhost:5229/api/Announcement/GetAllDataList")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
//         post.innerHTML = "";
//         data.forEach((item) => {
//             const date = new Date(item.update_time);
//             const update_time = date.toLocaleString();

//             post.innerHTML +=
//             `
//             <div class="title-win flex">
//                 新增歷屆得獎紀錄
//             </div>
//             <div class="area flex">
//                 <div class="item">
//                     作品年份：
//                     <select name="year" id="contest_year" style="height:30px;width:200px;font-size: 20px;">
//                         <option>請選擇得獎年份</option>
//                         <option value="111">111年</option>
//                         <option value="110">110年</option>
//                         <option value="109">109年</option>
//                         <option value="108">108年</option>
//                         <option value="107">107年</option>
//                         <option value="106">106年</option>
//                         <option value="105">105年</option>
//                         <option value="104">104年</option>
//                         <option value="103">103年</option>
//                         <option value="102">102年</option>
//                         <option value="103">101年</option>
//                         <option value="102">100年</option>
//                     </select>
//                 </div>
//                 <div class="item">
//                     競賽名稱：
//                     <input type="text" id="contest_name" class="item_detail">
//                 </div>
//                 <div class="item">
//                     作品名稱：
//                     <input type="text" id="contest_work" class="item_detail">
//                 </div>
//                 <div class="item">
//                     得獎名次：
//                     <input type="text" id="contest_rank" class="item_detail">
//                 </div>
                
//                 <div class="button-right flex">
//                     <div>
//                         <a href="#"><input type="submit" onclick="submit()" value="保存" class="create-button"></a>
//                         <a href="./Admin_Login_Award.html"><input type="button" value="返回" class="create-button"></a>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//     })
// }

{/* <div class="item">
                    參與人員：
                    <input type="button" value="選擇人員" class="select-person">

                </div> */}