function validateForm() {
    var account = document.getElementById("account").value.trim();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var checkpassword = document.getElementById("checkpassword").value;
    var select = document.getElementById("select").value;
    
    if (name === "") {
    alert("請填寫姓名");
    return false;
    }
    if (acount === "") {
        alert("請填寫帳號");
        return false;
    }
    
    
    if (email === "") {
    alert("請填寫電子郵件");
    return false;
    } else if (!validateEmail(email)) {
    alert("電子郵件格式不正確");
    return false;
    }
    
    if (password === "") {
    alert("請填寫密碼");
    return false;
    }

    if (select === "") {
        alert("請選擇權限");
        return false;
    }
    
    return true;
    }

    function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }
