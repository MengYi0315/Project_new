window.onload = function() {
  var topicname = document.querySelector("#topicname");
  var member = document.querySelector("#member");
  var article = document.querySelector("#article");


  var post = document.querySelector("#post");
  fetch("http://localhost:5229/api/seniorproject/GetAllDataList")
  .then(response => response.json())
  .then(data => {
      data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));

      topicname.innerHTML = `
        <p></p>
      `;
      
      member.innerHTML = `
        <p></p>
      `;

      article.innerHTML = `
        <p></p>
      `;











      post.innerHTML = "";
      data.forEach((item) => {
          const date = new Date(item.update_time);
          const update_time = date.toLocaleString();
          post.innerHTML +=
          `
          <div class="flex">
              <div style="width:100%;">
                  <a href="/小專/首頁/Admin_Login_Index_detail.html" class="a1 flex">
                      <div class="space-between flex">
                          <div> 標題： ${item.announce_title}</div>
                          <div> 更新時間： ${update_time}</div>
                      </div>
                  </a>
              </div>
              
              <div class="flex">
                  <button type="submit"  class="edit-row-button"><a href="./Edit_Login_Index.html/${item.announce_id}"  style="color:#FFF;">修改</a></button>
                  <button type="submit"  onclick="deleteData('http://localhost:5229/api/Announcement/DeleteData?id=', ${item.announce_id})"class="delete-row-button">刪除</button>
              </div>
          </div>
          `;
      });
  })
  .catch(error => console.error(error));
}
