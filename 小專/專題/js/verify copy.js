function  validateForm() {
    var title = document.getElementById("title").value.trim();
    var senior_year = document.getElementById("senior_year").value.trim();
    var member = document.getElementById("member").value.trim();
    var content = document.getElementById("content").value;
    var FFF = document.getElementById("FFF").value;
    // var level = document.getElementById("level").value;
    var errors = [];
    var length =0;
    let differencepw="";
    let accountvenify="";
    let emailvalidate="";
    let emaillength="";
    let namechar="";
    let emailerror="";

    
    
    if (title === "") {
      errors.push("專題名稱");
      length +=1;
    }
    
    

    if (senior_year === "") {
      errors.push("年份");
      length +=1;
    }

    
    if (member === "") {
      errors.push("專題組員");
      length +=1;
    }

    if (FFF === "") {
      errors.push("圖片檔案");
      length +=1;
    }

    if (content === "") {
      errors.push("專題簡介");
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
        + differencepw +"\n"
        +namechar+"\n"
        +accountvenify+"\n"
        +emailvalidate+"\n"
        +emaillength+"\n"
        +emailerror+"\n"
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
    

