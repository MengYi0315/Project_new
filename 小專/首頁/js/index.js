var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// var loadFile = function(event) {
//   var reader = new FileReader();
//   reader.onload = function(){
//     var output = document.getElementById('output');
//     output.src = reader.result;
//   };
//   reader.readAsDataURL(event.target.files[0]);
// };

//上傳多個文件方法
    //input file已增加multiple属性，按住ctrl可選擇多圖
document.getElementById("add-pic-btn").addEventListener("change",function(){
  var obj = this,
      length = obj.files.length,
      arrTitle = []; //存標題名
      _html = '';

  for(var i=0; i<length; i++) {
      var reader = new FileReader();
      if (!reader) {
          console.log('對不起，您的瀏覽器不支援！请更換瀏覽器');
          return
      }
      //存儲上傳的多張照片名字
      arrTitle.push(obj.files[i].name)

      reader.error=function(e){
          console.log("讀取異常")
      }

      //iffi语法
      ;(function(i){
            //讀取成功
          reader.onload = function(e){
              //console.log(e)
              var _src = e.target.result;

              //節點
              var divItem = document.createElement('div');
              divItem.setAttribute('class','item');
              var divPic = document.createElement('div');
              divPic.setAttribute('class','pic-box');
              var img = document.createElement('img');
              img.setAttribute('class','img');
              img.setAttribute('src',_src);
              var divTk = document.createElement('div');
              divTk.setAttribute('class','tk')
              var spanDel = document.createElement('span');
              spanDel.setAttribute('class','del');
              spanDel.setAttribute('title',arrTitle[i]);
              spanDel.innerText = 'x';

              divTk.innerHTML = arrTitle[i];

              divItem.appendChild(divPic);
              divPic.appendChild(img);
              divItem.appendChild(divTk);
              divItem.appendChild(spanDel);

              //增加節點結構
              var groupTu =  document.getElementById('groupTu');
              groupTu.insertBefore(divItem, groupTu.firstChild);

              //增加刪除節點
              spanDel.onclick = function(){
                  removeItem(this);
                  return false;
              };

          };
      })(i)

      reader.onloadstart=function(){

      }
      reader.onprogress=function(e){
          if(e.lengthComputable){
              console.log("正在讀取圖片")
          }
      };
      reader.readAsDataURL(obj.files[i]);
  }

})

//删除图片
function removeItem(delNode){
    var itemNode = delNode.parentNode,
        title = delNode.getAttribute('title');
    var flag = confirm("確認要刪除名為"+title+"的图片？");
    if(flag) {
        itemNode.parentNode.removeChild(itemNode);
        console.log('刪除成功~')
    }
    return false;
}