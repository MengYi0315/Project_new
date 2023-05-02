function  validateForm() {
    var contest_name = document.getElementById("contest_name").value.trim();
    var contest_year = document.getElementById("contest_year").value.trim();
    // var post = document.getElementById("post").value.trim();
    var contest_work = document.getElementById("contest_work").value;
    var contest_rank = document.getElementById("contest_rank").value;
    // var level = document.getElementById("level").value;
    var errors = [];
    var length =0;
    let differencepw="";
    let accountvenify="";
    let emailvalidate="";
    let emaillength="";
    let namechar="";
    let emailerror="";

    
    
    if (contest_name === "") {
      errors.push("競賽名稱");
      length +=1;
    }
    
    

    if (contest_year === "") {
      errors.push("作品年份");
      length +=1;
    }

    
    if (contest_work === "") {
      errors.push("作品名稱");
      length +=1;
    }

    if (contest_rank === "") {
      errors.push("得獎名次");
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
    

