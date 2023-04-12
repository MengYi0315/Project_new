function previousImg() {
    i--;
    if(i == -1)
       i = jsImg.length - 1 ;
    document.getElementById("cover").innerHTML = "<img class='rounded'    src='" + jsImg[i] + "' alt=' ' width=80% />";
  }
  function nextImg() {
    i++;
    if(i == jsImg.length)
       i = 0;
    document.getElementById("cover").innerHTML = "<img class='rounded' src='" + jsImg[i] + "' alt=' ' width=80% />"; 
  }

  $('.carousel').slick({
    slidesToShow: 3,  //可以控制每個輪播有幾張圖片
    dots:true,
    centerMode: true,
  });