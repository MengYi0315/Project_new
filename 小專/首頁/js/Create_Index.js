function postData(url,data){
    return fetch(url, {
        body: JSON.stringify(data),
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'user-agent':'Example',
            'content-type':'application/json'
        },
        method:'POST',
        mode:'cors',
        redirect:'follow',
        referrer:'no-referrer',
    })
        .then(response => response.json()) //輸出成json
}

function resultvalue(result){
    if(result==0)
        return '0';
    else if(result==1)
        return '1';
}


function submit(){
    const title=document.getElementById('title');
    const content=document.getElementById('content');

    const data={
        title,
        content
    }
    postData('http://localhost:5229/api/Activity/CreateData',data)
    .then(data=>{
        const result =data.result;
        console.log(data);
        console.log(result);
    })
}


    






