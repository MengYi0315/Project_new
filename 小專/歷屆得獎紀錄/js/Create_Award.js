function postData(url,data,headers){

    return fetch(url, {
        body: JSON.stringify(data),
        headers:headers,
        method:'POST',
        mode:'cors',
    })
    //.then(response => response.json()) //輸出成json
}

function submit(){
    const contest_year=document.getElementById('year').value;
    const contest_name=document.getElementById('name').value;
    const contest_work=document.getElementById('work').value;
    const contest_rank=document.getElementById('rank').value;
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODI1MDM3MzV9.dU4k9OBupPvholFaKwWM_RJaedcrItBZ3NnwR6V21Fw';

    const data={
        contest_year,
        contest_name,
        contest_work,
        contest_rank
    }
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    postData('http://localhost:5229/api/ContestAward/CreateData',data,headers)
    .then(data=>{
        // sessionStorage.setItem('LoginData', JSON.stringify(data));
        console.log(data);
    })
}
