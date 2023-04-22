axios({
    method: 'get',
    url: 'http://localhost:5229/api/Members/Login',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`, 
    },
    params:{
        limit: 2,
    },
  })
  .then(( { data } ) => {
    Print1.innerHTML = JSON.stringify(data);
  })
  .catch((error) => console.log(error))
  