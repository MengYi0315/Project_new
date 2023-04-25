function postData(url, data, headers) {
    const formData = new FormData();
    formData.append('seniorproject_title', data.title);
    formData.append('seniorproject_content', data.content);
    formData.append('FormImage', data.image);
    formData.append('seniorproject_year', data.year);

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
      .then(response => response.formData) //輸出成json
}

function submit() {
    const senior_title = document.getElementById('title').value;
    const senior_year = document.getElementById('year').value;
    const senior_person = document.getElementById('person').value;
    const senior_image = document.getElementById('image').files[0];
    const senior_content = document.getElementById('content').value;
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODIyMzkxMTJ9.lAlXv_IqkEq0UCtBqMuN9JF8BUS_fHZ6mSmd4ukTlz8';

    const data = {
        title: title,
        year: year,
        person:person,
        content: content,
        image: image,
    };

    const headers = {
        'Authorization': `Bearer ${token}`
    };
    

    postData('http://localhost:5229/api/Activity/CreateData', data, headers)
        .then(data => {
        const result = data.result;
        console.log(data);
        console.log(result);
        });
}


// function previewFile() {
//     var preview = document.querySelector('.img');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();

//     reader.addEventListener("load", function () {
//     preview.src = reader.result;
//     }, false);

//     if (file) {
//         reader.readAsDataURL(file);
//         //設定圖片大小
//         preview.style.width = "300px";
//     }
// }



function previewFile() {
    var preview = document.querySelector('.img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();


    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    // 設定圖片大小
    preview.style.width = "300px";
}

