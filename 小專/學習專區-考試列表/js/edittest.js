let LoginToken=sessionStorage.getItem('LoginToken');
console.log(LoginToken);

function submit(id) {
    var post = document.querySelector("#post");

    fetch(`https://localhost:7275/api/Test/ReadOneData?id=${encodeURIComponent(id)}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        post.innerHTML +=
        `
        <div class="title">
                    修改考試
                </div>
                <br>
                <table>
        <tr>
            <td class="normal-word text-top field">
                考試名稱：
            </td>
            <td class="text-top field">
                <input class="text"  id="test_title" value="${data.test_title}">
            </td>

        </tr>
        <tr>
            <td class="normal-word text-top field">
                考試內容：
            </td>
            <td class="text-top field-textarea">
                <textarea class="textarea" id="test_content" >${data.test_content}</textarea>
            </td>
        </tr>
        <tr>
            <td class="normal-word text-top field">
                考試期限：
            </td>
            <td class="text-top field">
                <input type="date" class="text-date"  id="start_date" value="${data.start_date}">
                <span>&nbsp;~&nbsp;</span>
                <input type="date" class="text-date" id="end_date" value="${data.end_date}">
            </td>
        
        </tr>
        </table>

                <div class="flex" id="post1">
                    <input type="submit" value="修改考試" class="reserve-botton" onclick=" update('${id}')">
                    <input type="button" value="取消" class="reserve-botton"  onclick="location.href='./Admin-Test-TestList.html'">
                </div>
    

        `;
        console.log(data);
    }) 
}

function update(id)
{
    const test_title = document.querySelector("#test_title");
    const test_content = document.querySelector("#test_content");
    const start_date = document.querySelector("#start_date");
    const end_date = document.querySelector("#end_date");
    
    const test_id = id;
    // const startdate = new Date(start_date);

    // const start_formattedDate = startdate.toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit'
    // }).replace(/\//g, '-');



    const data = {
        test_title: test_title.value.toString(),
        test_content: test_content.value.toString(),
        start_date: start_date.value.toString(),
        end_date: end_date.value.toString(),
        test_id: id
    };

    console.log("data1", data);  
    fetch(`https://localhost:7275/api/Test/UpdateData?id=${encodeURIComponent(id)}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
        },
        body: JSON.stringify(data) 
    })
    .then(data => {
        console.log("data", data);
    
        console.log(id)
    });
}

window.onload = function (){
    
    const url = window.location.href;
    console.log("url",url);
    var split = url.split("=");
    var id = split[1];
    console.log(id);
    submit(id);

    
}