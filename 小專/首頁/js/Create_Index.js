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
    const activity_title=document.getElementById('title').value;
    const activity_content=document.getElementById('content').value;
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODE5MDA0OTV9.glbxmGgSy3mhWGh_jeS5cOqSh_iOXALVFKRGRUyQqnU';

    const data={
        activity_title,
        activity_content,
        token
    }
    console.log(data);
    postData('http://localhost:5229/api/Activity/CreateData',data)
    .then(data=>{
        const result =data.result;
        console.log(data);
        console.log(result);
        
    })
}

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
    






