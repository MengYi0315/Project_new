function  validateForm() {
    var account = document.getElementById("account").value.trim();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var checkpassword = document.getElementById("checkpassword").value;
    var level = document.getElementById("level").value;
    var errors = [];
    var length =0;
    let differencepw="";
    let accountvenify="";
    let emailvalidate="";
    let emaillength="";
    let namechar="";

    
    
    if (name === "") {
      errors.push("姓名");
      length +=1;
    }
    else{
      if(name.length >20){
          length+=1;
          namechar="姓名長度不能超過20字元";
        }
        else{
          namechar="";

        }
    
    }

    if (account === "") {
      errors.push("帳號");
      length +=1;
    }
    else{
      if(account.length >30){
        length +=1;
        accountvenify="帳號長度不能超過30字元";
        }
        else{
          accountvenify="";
        } 


    }
    if (password === "") {
      errors.push("密碼");
      length +=1;
    }

    if (checkpassword === "") {
      errors.push("確認密碼");
      length +=1;
    }

    if (email === "") {
      errors.push("Email");
      length +=1;
      emailvalidate="";

    }
    
    

    

    if (level === "") {
      errors.push("權限");
      length +=1;
    }

    if(password != checkpassword){
      differencepw="密碼輸入不一致";
      //  errors.push("密碼輸入不一致");
      length +=1;
    }
    else{
      differencepw="";
    }

    if(email.length > 200){
      length +=1;
      emaillength="Email長度不能超過200字元";
    }
      

      if (length > 0) {
        alert("請填寫以下欄位：" + errors.join(", ")+"\n"
        + differencepw +"\n"
        +namechar+"\n"
        +accountvenify+"\n"
        +emailvalidate+"\n"
        +emaillength
        );




        return false;
      }

      return true;
    }
