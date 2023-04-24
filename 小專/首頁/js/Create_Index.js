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
    const announce_title=document.getElementById('title').value;
    const announce_content=document.getElementById('content').value;
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMzIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODIzNDgyOTV9.VNBrdxtbhMjA1repGA351lAt09Qo9quUcUizy7-JfeA';

    const data={
        announce_title,
        announce_content,
        token
    }
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    postData('http://localhost:5229/api/Announcement/CreateData',data,headers)
    .then(data=>{
        console.log(data);

    })
}