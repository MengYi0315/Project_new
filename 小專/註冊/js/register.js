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
    const entry_year = document.getElementById('entry_year').value;
    const account = document.getElementById('account').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('checkpassword').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('level').value;


    const data = {
        entry_year,
        account,
        name,
        password,
        passwordCheck,
        email,
        level,
    }
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    postData('https://localhost:7275/api/Members/register', data, headers)
        .then(({data}) => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
}