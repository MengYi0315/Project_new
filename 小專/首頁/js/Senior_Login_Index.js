let currentPage = 1;

window.onload = function() {
    
let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken)
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    fetch("https://localhost:7275/api/Announcement/GetAllDataList")
    .then(response => response.json())
    .then(data => {
        // data.sort((a, b) => new Date(b.update_time) - new Date(a.update_time));
        post.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div>
                <a href="/小專/首頁/Senior-Login_Index_detail.html?id=${item.announce_id}" 
                
                <div class="a1 flex">
                    <div class="space-between flex zz">
                        <div> 標題： ${item.announce_title}</div>
                        <div> 更新時間： ${update_time}</div>
                    </div>
                    </div>
                </a>
            </div>
            `
        });
        
        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }
        
        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
    .catch(error => console.error(error));
}

function goToPage(page)
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${page}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div>
                <a href="/小專/首頁Senior-Login_Index_detail.html?id=${item.announce_id}" 
                
                <div class="a1 flex">
                    <div class="space-between flex zz">
                        <div> 標題： ${item.announce_title}</div>
                        <div> 更新時間： ${update_time}</div>
                    </div>
                    </div>
                </a>
            </div>
            `
        });

        currentPage = page;

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }

        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
}

function goToFront()
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    currentPage -= 1;
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        if(currentPage < 1 )
        {
            currentPage = 1;
        }
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div>
                <a href="/小專/首頁/Senior-Login_Index_detail.html?id=${item.announce_id}" 
                
                <div class="a1 flex">
                    <div class="space-between flex zz">
                        <div> 標題： ${item.announce_title}</div>
                        <div> 更新時間： ${update_time}</div>
                    </div>
                    </div>
                </a>
            </div>
            `
        });

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }
        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
}

function goToBack()
{
    var post = document.querySelector("#post");
    var poo = document.querySelector("#Middle");
    currentPage += 1;
    fetch(`https://localhost:7275/api/Announcement/GetAllDataList?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
        post.innerHTML = "";
        poo.innerHTML = "";
        const arr = Array.from(data.data)
        const maxpage = data.maxPage;
        if(currentPage > maxpage )
        {
            currentPage = maxpage;
        }
        arr.forEach((item) => {
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();
            
            post.innerHTML +=
            `
            <div>
                <a href="/小專/首頁/Senior-Login_Index_detail.html?id=${item.announce_id}" 
                
                <div class="a1 flex">
                    <div class="space-between flex zz">
                        <div> 標題： ${item.announce_title}</div>
                        <div> 更新時間： ${update_time}</div>
                    </div>
                    </div>
                </a>
            </div>
            `
        });

        for (let i = currentPage-2; i <= currentPage+2; i++) {
            if( i > 0 && i <= maxpage)
            {
                poo.innerHTML += 
            `
            <div id="Inbutton">
                <button class=paging onclick="goToPage(${i})">${i}</button>
            </div>
                
            `;
            }
            
        }

        const buttons = document.querySelectorAll('.paging');
        
        buttons.forEach(button => {
            if (button.textContent == currentPage) {
                button.classList.add('button-active');
            } else {
                button.classList.remove('button-active');
            }
        });
    })
}


