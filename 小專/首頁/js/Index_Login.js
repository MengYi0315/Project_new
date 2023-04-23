function getData(url, data, headers) {
    const queryString = `?activity_title=${data.title}&activity_content=${data.content}&FormImage=${data.image}`;

    return fetch(`${url}${queryString}`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
    })
      .then(response => response.json()) //輸出成json
}


function resultvalue(result){
    if(result==0)
        return '0';
    else if(result==1)
        return '1';
}


function submit() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODIyMzkxMTJ9.lAlXv_IqkEq0UCtBqMuN9JF8BUS_fHZ6mSmd4ukTlz8';

    const data = {
        title: title,
        content: content,
        image: image,
    };

    const headers = {
        'Authorization': `Bearer ${token}`
    };

    getData('http://localhost:5229/api/Announcement/GetAllDataList', data, headers)
        .then(data => {
        const result = data.result;
        console.log(data);
        console.log(result);
        });
}
