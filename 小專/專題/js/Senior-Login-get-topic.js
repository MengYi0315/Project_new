
//取的資料 

window.onload = function() {

    var post = document.querySelector("#post");

    fetch("https://localhost:7275/api/seniorproject/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        
        console.log("data",data);

        post.innerHTML = "";
        data.forEach((item) => {
            // const date = new Date(item.update_time);
            // const update_time = date.toLocaleString();

            post.innerHTML +=
            `
            <div class="topic" style="margin-bottom: 10px;" >
                <div class="flex a">
                    <div class="topic-photo flex">
                        
                    <img src="${item.senior_image}" class="photo">
                    </div>
                    
                    <div class="topic-content flex" >
                        <div class="topic-name">
                        ${item.senior_title}
                        </div>
                        <div class="member" id="member">
                        ${item.name}
                        </div>
                        <div class="article" id="article">
                        ${item.senior_content}
                        </div>
                    </div>
                </div>
                
            </div>

            `;
        });
    })
    .catch(error => console.error(error));
}
