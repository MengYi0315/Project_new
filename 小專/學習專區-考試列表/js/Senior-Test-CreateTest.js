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
    const test_title = document.getElementById('test_title').value;
    const test_content = document.getElementById('test_content').value;
    const start_date = document.getElementById('start_date').value;
    const end_date = document.getElementById('end_date').value;


    const data = {
        test_title,
        test_content,
        start_date,
        end_date
    }
    console.log("data" ,data);

    const headers = {
        'Authorization': `Bearer ${LoginToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    postData('https://localhost:7275/api/Test/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);

        })

}