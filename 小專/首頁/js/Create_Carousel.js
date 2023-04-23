// function postData(url,data){
//     return fetch(url, {
//         body: JSON.stringify(data),
//         cache:'no-cache',
//         credentials:'same-origin',
//         headers:{
//             'user-agent':'Example',
//             'content-type':'multipart/form-data'
//         },
//         method:'POST',
//         mode:'cors',
//         redirect:'follow',
//         referrer:'no-referrer',
//     })
//         .then(response => response.json()) //輸出成json
// }

// function resultvalue(result){
//     if(result==0)
//         return '0';
//     else if(result==1)
//         return '1';
// }

// function submit(){
//     const title=document.getElementById('title').value;

//     const data={
//         title
//     }

//     postData('http://localhost:5229/api/Carousel/CreateData',data)
//     .then(data=>{
//         const result =data.result;
//         console.log(data);
//         console.log(result);
//     })
// }
function postData(url, data, headers) {
    const formData = new FormData();
    formData.append('FormImage', data.image);

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
      .then(response => response.formData) //輸出成json
}


function submit() {
    const imageInput = document.getElementById('image');
    if (imageInput.files.length === 0) {
        console.log('No image selected!');
        return;
    }
    const images = imageInput.files[0];
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODIxOTk0ODV9.ErfZa_5krqH0jeDYNnp8LvKpkdWduGktcz_Jecbhb7g';

    const data = {
        images: images
    };

    const headers = {
        'Authorization': `Bearer ${token}`
    };
    
    const requests = []; // 用來存儲所有的請求
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const formData = new FormData();
        formData.append('FormImage', image);

        requests.push(
            fetch('http://localhost:5229/api/Carousel/CreateData', {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: headers
            })
            .then(response => response.formData)
        );
    }

    // 等待所有請求完成後，輸出結果
    Promise.all(requests).then(data => {
        console.log(data);
    });
}



// 當選擇檔案時，呼叫此函式
function handleFileSelect(event) {
    const files = event.target.files; // 取得選擇的檔案
    const preview = document.getElementById("preview");

    // 清空預覽區域
    preview.innerHTML = "";

    // 迴圈讀取每一個檔案
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // 獲取檔案名稱
        const fileName = file.name;

        // 建立 FileReader 物件
        const reader = new FileReader();

        // 當讀取完成時，執行此函式
        reader.onload = function(event) {
            // 建立 <div> 標籤，並設定樣式
            const div = document.createElement("div");
            div.style.marginRight = "20px";
    
            // 建立 <img> 標籤，並設定圖片的 src 屬性和樣式
            const img = document.createElement("img");
            img.src = event.target.result;
            img.style.width = "200px";
            img.style.height = "125px";
    
            // 建立 <p> 標籤，並設定檔案名稱和樣式
            const p = document.createElement("p");
            p.innerHTML = fileName;
            p.style.marginLeft = "10px";
            p.style.marginBottom = "30px"; // 添加底部間距
            p.style.textAlign="center";
            p.style.fontSize="16px;"
    
            // 將 <img> 和 <p> 標籤加入 <div> 標籤中
            div.appendChild(img);
            div.appendChild(p);
    
            // 將 <div> 標籤加入預覽區域
            preview.appendChild(div);
        };

        // 讀取檔案
        reader.readAsDataURL(file);
    }
}

// 監聽檔案選擇事件
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", handleFileSelect, false);


