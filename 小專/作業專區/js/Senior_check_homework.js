window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
let Account=sessionStorage.getItem('account');

    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/Homework")
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(a.end_time) - new Date(b.end_time));
        post.innerHTML = "";
        data.forEach((item) => {
            const date1 = new Date(item.start_time);
            const start_time = date1.toLocaleString();
            const date2 = new Date(item.end_time);
            const end_time = date2.toLocaleString();
            if(item.name === Account)
            {
                post.innerHTML +=
            `
            <tr style="width:100%;margin-bottom:30px;">
                <td class="row" style="width:15%;">
                    ${item.name}
                </td>
                <td class="row" style="width:15%;">
                    ${item.homework_title}
                </td>
                <td class="row" style="width:25%;">
                    ${item.homework_content}
                </td>
                <td class="row" style="width:25%;">
                    <span>${start_time}到</span><br>
                    <span>${end_time}止</span>
                    
                </td>
                <td class="row" style="width:20%;">
                    <a href="./Senior_detail_check_homework.html?id=${item.homework_id}"><input type="submit"  class="edit-row-button" style="width:80px;" value="前往查看"></a>
                </td>
            </tr>
            `;
            }
            
        });
    })
    .catch(error => console.error(error));
}