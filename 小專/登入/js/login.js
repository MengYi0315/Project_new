function postData(url,data,headers){

  return fetch(url, {
      body: JSON.stringify(data),
      headers:headers,
      method:'POST',
      mode:'cors',
  })
}

function submit(){
  const Account=document.getElementById('account').value;
  const Password=document.getElementById('password').value;
  

  const data={
      Account,
      Password
  }
  const headers = {
      'Content-Type': 'application/json'
  };
  postData('http://localhost:5229/api/Members/Login',data,headers)
  .then(data=>{
    console.log(data);

      // sessionStorage.setItem('LoginData', data);
      console.log(data);
  })
}




// // 登录成功后保存 token 到本地存储
// function loginSuccessHandler(token) {
//   localStorage.setItem('token', token);
// }