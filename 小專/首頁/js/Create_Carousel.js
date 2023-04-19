function postData(url,data){
    return fetch(url, {
        body: JSON.stringify(data),
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'user-agent':'Example',
            'content-type':'multipart/form-data'
            
            
        },
        method:'POST',
        mode:'cors',
        redirect:'follow',
        referrer:'no-referrer',
    })
        .then(response => response.json()) //輸出成json
}

function resultvalue(result){
    if(result==0)
        return '0';
    else if(result==1)
        return '1';
}

function submit(){
    const title=document.getElementById('title').value;

    const data={
        title
    }

    postData('http://localhost:5229/api/Carousel/CreateData',data)
    .then(data=>{
        const result =data.result;
        console.log(data);
        console.log(result);
    })
}


// function previewFile() {
//     var preview = document.querySelector('.img');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();

//     reader.addEventListener("load", function () {
//         preview.src = reader.result;
//     }, false);

//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }

window.onload=function(){
    var input=document.getElementById("uploadfile");
	var div;
	// 当用户上传时触发事件
	input.onchange=function(){
		readFile(this);
	}
	//处理图片并添加都dom中的函数
	var readFile=function(obj){
		// 获取input里面的文件组
		var fileList=obj.files;
		//对文件组进行遍历，可以到控制台打印出fileList去看看
		for(var i=0;i<fileList.length;i++){
			var reader= new FileReader();
			reader.readAsDataURL(fileList[i]);
			 // 当文件读取成功时执行的函数
			reader.onload=function(e){
				div=document.createElement('div');
				div.innerHTML='<img src="'+this.result+'" />';
				document.getElementById("preview").appendChild(div);
			}
		}
	}
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
            // 獲取檔案名稱
            const fileName = file.name;
            // 建立 <img> 標籤，並設定圖片的 src 屬性
            const img = document.createElement("img");
            img.src = event.target.result;
            img.width = 300; // 設定寬度為300像素
            img.height = 200; // 設定高度為200像素

            // 建立 <p> 標籤，並設定檔案名稱
            const p = document.createElement("p");
            p.innerHTML = fileName;

            // 將圖片和檔案名稱加入預覽區域
            preview.appendChild(img);
            preview.appendChild(p);
        };

        // 讀取檔案
        reader.readAsDataURL(file);
    }
}
  
  // 監聽檔案選擇事件
  const fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", handleFileSelect, false);
  


// //上傳多個文件方法
// //input file已增加multiple属性，按住ctrl可選擇多圖
// document.getElementById("add-pic-btn").addEventListener("change",function(){
//     var obj = this,
//         length = obj.files.length,
//         arrTitle = []; //存標題名
//         _html = '';
    
//     for(var i=0; i<length; i++) {
//         var reader = new FileReader();
//         if (!reader) {
//             console.log('對不起，您的瀏覽器不支援！请更換瀏覽器');
//             return
//         }
//         //存儲上傳的多張照片名字
//         arrTitle.push(obj.files[i].name)
    
//         reader.error=function(e){
//             console.log("讀取異常")
//         }
    
//         //iffi语法
//         ;(function(i){
//                 //讀取成功
//             reader.onload = function(e){
//                 //console.log(e)
//                 var _src = e.target.result;
    
//                 //節點
//                 var divItem = document.createElement('div');
//                 divItem.setAttribute('class','item');
//                 var divPic = document.createElement('div');
//                 divPic.setAttribute('class','pic-box');
//                 var img = document.createElement('img');
//                 img.setAttribute('class','img');
//                 img.setAttribute('src',_src);
//                 var divTk = document.createElement('div');
//                 divTk.setAttribute('class','tk')
//                 var spanDel = document.createElement('span');
//                 spanDel.setAttribute('class','del');
//                 spanDel.setAttribute('title',arrTitle[i]);
//                 spanDel.innerText = 'x';
    
//                 divTk.innerHTML = arrTitle[i];
    
//                 divItem.appendChild(divPic);
//                 divPic.appendChild(img);
//                 divItem.appendChild(divTk);
//                 divItem.appendChild(spanDel);
    
//                 //增加節點結構
//                 var groupTu =  document.getElementById('groupTu');
//                 groupTu.insertBefore(divItem, groupTu.firstChild);
    
//                 //增加刪除節點
//                 spanDel.onclick = function(){
//                     removeItem(this);
//                     return false;
//                 };
    
//             };
//         })(i)
    
//         reader.onloadstart=function(){
    
//         }
//         reader.onprogress=function(e){
//             if(e.lengthComputable){
//                 console.log("正在讀取圖片")
//             }
//         };
//         reader.readAsDataURL(obj.files[i]);
//     }
    
//     })
    
//     //删除图片
//     function removeItem(delNode){
//         var itemNode = delNode.parentNode,
//             title = delNode.getAttribute('title');
//         var flag = confirm("確認要刪除名為"+title+"的图片？");
//         if(flag) {
//             itemNode.parentNode.removeChild(itemNode);
//             console.log('刪除成功~')
//         }
//         return false;
//     }
    
//     const imageInput = document.getElementById('image-input');
//     const previewContainer = document.getElementById('preview-container');
    
//     imageInput.addEventListener('change', function() {
//     previewContainer.innerHTML = '';
    
//     for (let i = 0; i < imageInput.files.length; i++) {
//         const file = imageInput.files[i];
//         const reader = new FileReader();
        
//         reader.addEventListener("load", function () {
//         const img = document.createElement('img');
//         img.src = reader.result;
//         previewContainer.appendChild(img);
//         }, false);
        
//         if (file) {
//         reader.readAsDataURL(file);
//         }
//     }
// });