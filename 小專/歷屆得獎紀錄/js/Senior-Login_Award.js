

window.onload = function() {
    let LoginToken=sessionStorage.getItem('LoginToken');
    console.log("token",LoginToken);
    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/ContestAward/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        data.sort((a, b) => new Date(b.contest_year) - new Date(a.contest_year));
        data.forEach((item) => {
            post.innerHTML +=
            `
            <tr class="li-award-win">
                <td style="width:25%;">${item.contest_year}</td>
                <td style="width:25%;">${item.contest_name}</td>
                <td style="width:25%;">${item.contest_work}</td>
                <td style="width:25%;">${item.contest_rank}</td>
            </tr>
            `;
        });
    })
    .catch(error => console.error(error));
}




