function  validateForm() {
    var title = document.getElementById("title").value.trim();
    var content = document.getElementById("content").value;
    var image = document.getElementById("image").value;
    // var level = document.getElementById("level").value;
    var errors = [];
    var length =0;

    
    
    if (title === "") {
      errors.push("名稱");
      length +=1;
    }
    
    if (content === "") {
      errors.push("描述");
      length +=1;
     

    }


    if (image === "") {
      errors.push("圖片");
      length +=1;
    }

    
    
    

    

    // if (level === "") {
    //   errors.push("權限");
    //   length +=1;
    // }

    // if(password != checkpassword){
    //   differencepw="密碼輸入不一致";
    //   //  errors.push("密碼輸入不一致");
    //   length +=1;
    // }
    // else{
    //   differencepw="";
    // }

    // if(email.length > 200){
    //   length +=1;
    //   emaillength="Email長度不能超過200字元";
    // }

    // if (!isValidEmail(email)) {
      
    //   emailerror="請輸入正確的Email格式";
     
    // }



      

      if (length > 0) {
        alert("請填寫以下欄位：" + errors.join(", ")+"\n"
        );




        return false;
      }
  // alert("註冊成功。請去收信");
  // // window.location.href="./";
  //     return true;

      
    }

    // function isValidEmail(email) {
    //   // 檢查 email 格式是否正確
    //   const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //   return regex.test(email);
    // }
    

