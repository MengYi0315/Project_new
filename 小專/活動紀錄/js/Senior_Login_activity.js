window.onload = function() {
    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/Activity/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        data.forEach((item) => {
            post.innerHTML +=
            `
            <div class="relative w-25 flex">
                <a href="http://127.0.0.1:5555/%E5%B0%8F%E5%B0%88/%E6%B4%BB%E5%8B%95%E7%B4%80%E9%8C%84/Senior-Login_detail_activity.html?id=${item.activity_id}" class="a1">
                    <img src="${item.first_image}" class="b-25">
                    <div class="center">${item.activity_title}</div>
                </a>
            </div>
            `;
        });
    })
    .catch(error => console.error(error));
}