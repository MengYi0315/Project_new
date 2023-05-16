window.onload = function(){
    let LoginToken = sessionStorage.getItem('LoginToken');
    console.log("token", LoginToken);

    var downbar1 = document.querySelector("#down-bar-1");

    fetch("https://localhost:7275/api/Members/GetIDList")
    .then(res  => res.json())
    .then(data => {
        downbar1.innerHTML = "";
        data.forEach((item) => {
            downbar1.innerHTML +=
    `   
    <a href="/小專/學習專區-考試列表/Admin-Test-TestList.html?${item.member_id}" class="down-bar-text"><li>考試專區</li></a> 
    <a href=""  class="down-bar-text"><li>作業專區</li></a>
    <a href="/小專/留言板/admin-msgboard.html"  class="down-bar-text"><li>討論留言板</li></a>


    `


            
        });
    })


    // console.log("token",LoginToken);

    // fetch("https://localhost:7275/api/Test")
    // .then(res => res.json())
    // .then(data => {
    
    //     testlist.innerHTML = "";

    //     data.forEach((item) => {



    //         testlist.innerHTML +=
    //         `
    //         <tr>
    //             <td class="row">
    //                 ${item.test_title}
    //             </td>
    //             <td class="row">
    //                 ${start_formattedDate} ~ ${end_formattedDate}
    //             </td>
    //             <td class="row">
    //                 <span>已預約</span>
    //             </td>
    //             <td class="row">
    //                 <button type="button"  class="edit-row-button"><a href="./Admin-Test-EditTest.html">修改</a></button>
    //                 <button type="button"  class="delete-row-button"><a href="#">刪除</a></button>
                
    //             </td>

    //     </tr>



    //         `


    //     });
    // })



}