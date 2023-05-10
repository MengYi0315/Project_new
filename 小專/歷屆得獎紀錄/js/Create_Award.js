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
    postData('https://localhost:7275/api/ContestAward/CreateData', data, headers)
        .then(({data}) => {
            console.log(data);

        })

}