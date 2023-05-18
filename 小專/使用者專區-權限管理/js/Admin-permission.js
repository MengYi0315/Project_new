window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
    var post = document.querySelector("#post");
    fetch("https://localhost:7275/api/Members/GetMemberLevel")
    .then(response => response.json())
    .then(data => {
        // data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        post.innerHTML = "";
        data.forEach((item) => {
            // const date = new Date(item.update_time);
            // const update_time = date.toLocaleString();
            post.innerHTML +=
            `
            <tr>
                <td class="row">
                    ${item.entry_year}
                </td>
                <td class="row">
                    ${item.name}
                </td>
                <td class="row">
                    ${item.role}
                </td>
                <td class="row">
                    <input type="button" class="edit-row-button" style="width:85px;" value="修改權限">
                </td>
            </tr>
            `;
        });
    })
    .catch(error => console.error(error));
}


