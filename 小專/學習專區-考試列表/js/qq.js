axios({
    method: 'get',
    url: 'https://localhost:7275/api/Test',
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
  