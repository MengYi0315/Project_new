window.onload = function() {

    // var testlist = document.querySelector("#testlist");
    // fetch("https://localhost:7275/api/Test")
    // .then(response => response.json())
    // .then(data => {
        

    //     testlist.innerHTML = "";
    //     data.forEach((item) => {
            
    //         testlist.innerHTML +=
    //         `
            
    //         <option value=${item.test_id}>${item.test_title}</option>
    //         `;
    //     });
    // })
    // .catch(error => console.error(error));

    // var member = document.querySelector("#member");
    // fetch("https://localhost:7275/api/Members/GetIDList")
    // .then(res => res.json())
    // .then(data => {
    //     console.log("member", data)
    //     member.innerHTML = "";
    //     data.forEach((item) => {

    //         member.innerHTML =
    //         `   
    //         <option value=${item.members_id}>${item.name}</option>

    //         `

    //     });
    // })
    // const url = window.location.href;
    // console.log("url",url);
    // var split = url.split("=");
    // var href = split[0];
    // var id = split[1];
    // readdata(id);
    // console.log(id)



    fetchdata();

// urlid();
    

}

function fetchdata(){
    var post = document.querySelector("#member");
    fetch("https://localhost:7275/api/Members/GetIDList")
    .then(response => response.json())
    .then(data => {
        // console.log("member",data);

        post.innerHTML = "";
        data.forEach((item) => {
            // console.log("item",item)
            // const date = new Date(item.update_time);
            // const update_time = date.toLocaleString();

            post.innerHTML +=
            `

            <option value=${item.members_id}>${item.name}</option>
            `;
        });
    })
    .catch(error => console.error(error));





}


// function urlid(){
//     const url = window.location.href;
//     console.log("url",url);
//     var split = url.split("=");
//     var href = split[0];
//     var id = split[1];
//     readdata(id);
//     console.log(id)



// }





function readdata(id) {

    
    





    var post = document.querySelector("#post");
    fetch(`https://localhost:7275/api/Test/${id}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        
        post.innerHTML +=
        `
            ${data.test_title}

        `;

        console.log(data);

    })
}







//新增

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
    const proctor_id = document.getElementById('member').value;
    const reservedate = document.getElementById('date').value;
    const reservetime = document.getElementById('time').value;

    console.log(proctor_id)
    const data = {
        proctor_id,
        reservedate,
        reservetime
        
    }
    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('https://localhost:7275/api/TestReserve/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);

        })

}





