window.onload = function(){
    let LoginToken = sessionStorage.getItem(`LoginToken`)
    console.log("token",LoginToken)

    var nav = document.querySelector('.ul-year-win')

    fetch("http://localhost:5229/api/ContestAward/GetAllDataList")
        .then(repoonse => repoonse.json())
        .then(data =>{
                postMessage.innerHTML ="";
                data.forEach((item) => {
                    const year = new year(item.conetest_year)
                    post.innerHTML +=
                    `
                    <td>${item.contest_name}</td>
                    <td>${item.contest_work}</td>
                    <td>${item.contest_rank}</td>
                    <td>
                        <button type="button"  class="edit-row-button"><a href="./Edit_Login_Award.html">修改</a></button>
                        <button type="button"  class="delete-row-button">刪除</button>
                    </td>
                    `;
                });
        })

        .catch(error=>{
                console.error(error);
        });
};

const buttons = document.querySelectorAll('.delete-row-button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    const id = button.dataset.id;
    deleteData(id); // 呼叫刪除 API傳入項目的 ID。
});
});

function deleteData(id) {

fetch(`http://localhost:5229/api/ContestAward/SoftDeleteContestAwardById/${id}`, {
    method: 'DELETE',
})
.then(response => {
    if (response.ok) {
      // 刪除成功
    console.log(`Item ${id} deleted successfully.`);
    } else {
      // 刪除失敗
    console.error(`Error deleting item ${id}: ${response.status} ${response.statusText}`);
    }
})
.catch(error => {
    // 發生錯誤
    console.error(`Error deleting item ${id}: ${error}`);
});
}