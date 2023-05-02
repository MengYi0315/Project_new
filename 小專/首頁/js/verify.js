function  validateForm() {
    var fileInput = document.getElementById("fileInput").value.trim();

    
    

    if ( fileInput === "") {
      errors.push("帳號");
      length +=1;
    }

      

      if (length > 0) {
        alert("請填寫以下欄位：" + errors.join(", ")+"\n"
        );




        return false;
      }
    }

    

