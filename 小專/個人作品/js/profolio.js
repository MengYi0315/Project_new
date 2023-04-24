let btns = document.querySelectorAll('.info-btn');
let contents = document.querySelectorAll('.info-content');
let panels = document.querySelectorAll('.info-panel');

btns.forEach(function(btn, index) {
btn.addEventListener('click', function() {
    // 切換顯示和隱藏狀態
    if (contents[index].style.display === 'none') {
      contents[index].style.display = 'block';
      btn.innerHTML = '收起資訊';
    } else {
      contents[index].style.display = 'none';
      btn.innerHTML = '展開資訊';
    }
  });
});

  // 為每個展開區塊容器添加點擊事件監聽器
panels.forEach(function(panel, index) {
  panel.addEventListener('click', function(event) {
    // 檢查點擊的目標是否為空白區域
    if (event.target === panels[btns]) {
      // 如果當前區塊已經展開，則關閉該區塊
      if (contents[index].style.display === 'block') {
        contents[index].style.display = 'none';
        btns[index].innerHTML = '展開資訊';
      }
    }
  });
});


