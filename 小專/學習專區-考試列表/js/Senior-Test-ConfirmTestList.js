let LoginToken = sessionStorage.getItem('LoginToken');
console.log(LoginToken);
let name = sessionStorage.getItem('name');

window.onload = function() {
    
    let LoginToken=sessionStorage.getItem('LoginToken');
    console.log("token",LoginToken)
        var post = document.querySelector("#post");
        fetch("https://localhost:7275/api/TestReserve/GetAllDataList")
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => new Date(a.reservedate) - new Date(b.reservedate));
            post.innerHTML = "";
            data.forEach((item) => {
                const date = item.reservedate.split("T");
                const datetime = date[0];
                const date1 = item.reservetime.split(":");
                const reservetime = date1[0] + ":" + date1[1];
                if(item.tester_name === name)
                {
                    if(item.is_success === true)
                    {
                        post.innerHTML +=
                        `
                        <tr>
                            <td class="row">
                                ${item.test_title}
                            </td>
                            <td class="row">
                                ${item.proctor_name}
                            </td>
                            <td class="row">
                                ${datetime} ${reservetime}
                            </td>
                        </tr>
                        `;
                    }
                    
                }
            });
        })
        .catch(error => console.error(error));
    }
    