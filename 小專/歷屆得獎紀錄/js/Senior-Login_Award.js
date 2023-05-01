

window.onload = function() {
    let LoginToken=sessionStorage.getItem('LoginToken');
    console.log("token",LoginToken);
    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/ContestAward/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        data.forEach((item) => {
            post.innerHTML +=
            `
            <tr class="li-award-win">
                <td style="width:35%;">${item.contest_name}</td>
                <td style="width:35%;">${item.contest_work}</td>
                <td style="width:30%;">${item.contest_rank}</td>
            </tr>
            `;
        });
    })
    .catch(error => console.error(error));
}




