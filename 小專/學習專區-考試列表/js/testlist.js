window.onload = function(){
    let LoginToken = sessionStorage.getItem('LoginToken');
    console.log("token", LoginToken);

    var testlist = document.querySelector("#testlist");

    // console.log("token",LoginToken);

    fetch("https://localhost:7275/api/Test")
    .then(res => res.json())
    .then(data => {
    
        testlist.innerHTML = "";

        data.forEach((item) => {

            const start_dateString = item.start_date;
            const end_dateString = item.end_date;

            console.log("date",item.start_date);


            const start_date = new Date(start_dateString);
            const end_date = new Date(end_dateString);

            // 獲取年月日(開始日期)
            const start_year = start_date.getFullYear();
            const start_month = start_date.getMonth() + 1; // 月份从0开始，需要加1
            const start_day = start_date.getDate();
    
            // 构建正常格式的日期字符串
            const start_formattedDate = `${start_year}-${start_month < 10 ? '0' + start_month : start_month}-${start_day < 10 ? '0' + start_day : start_day}`;
            console.log(start_formattedDate);
    


            // 獲取年月日(開始日期)
            const end_year = end_date.getFullYear();
            const end_month = end_date.getMonth() + 1; // 月份从0开始，需要加1
            const end_day = end_date.getDate();
                
            // 构建正常格式的日期字符串
            const end_formattedDate = `${end_year}-${end_month < 10 ? '0' + end_month : end_month}-${end_day < 10 ? '0' + end_day : end_day}`;
            console.log(end_formattedDate);


            // if()




            testlist.innerHTML +=
            `
            <tr>
                <td class="row">
                    ${item.test_title}
                </td>
                <td class="row">
                    ${start_formattedDate} ~ ${end_formattedDate}
                </td>
                <td class="row">
                <span>未考試，還未預約</span>
                <input type="button" value="前往預約" class="row-button"  onclick="location.href='./Admin-Test-ReserveTest.html?id=${item.test_id}';">
        </td>
                <td class="row">
                    <button type="button"  class="edit-row-button"><a href="./Admin-Test-EditTest.html">修改</a></button>
                    <button type="button"  class="delete-row-button"><a href="#">刪除</a></button>
                
                </td>

        </tr>



            `


        });
    })



}