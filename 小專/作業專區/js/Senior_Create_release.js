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
    const homework_title = document.getElementById('title').value;
    const homework_content = document.getElementById('content').value;
    const start_time = document.getElementById('start').value;
    const end_time = document.getElementById('end').value;

    // var selected = [];
    // for (var option of document.getElementById('post').options)
    // {
    //     if (option.selected) {
    //         selected.push(option.value);
    //     }
    // }
    // console.log("id" ,selected);

    const data = {
        // check_id:selected,
        homework_title:homework_title,
        homework_content:homework_content,
        start_time:start_time,
        end_time:end_time
    }
    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('https://localhost:7275/api/Homework/create', data, headers)
        .then(({data}) => {
            console.log(data);
            window.location.href="./Senior_release_List.html";
    })
}

// let LoginToken=sessionStorage.getItem('LoginToken');
// console.log(LoginToken);
// function postData(url, data, headers) {
//     const formData = new FormData();
//     formData.append('homework_title', data.homework_title);
//     formData.append('homework_content', data.homework_content);
//     formData.append('start_time', data.start_time);
//     formData.append('end_time', data.end_time);

//     return fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         body: formData,
//         headers: headers
//     })
//     .then(response => response.formData)
// }

// function submit() {
//     console.log(LoginToken);
//     const homework_title = document.getElementById('title').value;
//     const homework_content = document.getElementById('content').value;
//     const start_time = document.getElementById('start').value;
//     const end_time = document.getElementById('end').value;

//     const data = {
//         homework_title,
//         homework_content,
//         start_time,
//         end_time
//     }

//     const headers = {
//         'Authorization': `Bearer ${LoginToken}`
//     };
//     console.log(data);

//     postData('https://localhost:7275/api/Homework/create', data, headers)
//         .then(({data}) => {
//             console.log(data);
//         });
// }



