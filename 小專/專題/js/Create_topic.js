function postData(url, data, headers) {
    const formData = new FormData();
    formData.append('senior_title', data.title);
    formData.append('senior_year', data.year);
    formData.append('senior_person', data.person);
    formData.append('senior_content', data.content);
    formData.append('FormImage', data.image);
    formData.append('senior_selectedValues', JSON.stringify(data.selectedValues)); // 將selectedValues轉為JSON字串後附加到FormData

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
    //const senior_person = document.getElementById('person').value;
    const senior_image = document.getElementById('image').files[0];
    const senior_content = document.getElementById('content').value;
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkp1bmlvciIsIlNlbmlvciJdLCJleHAiOjE2ODI0OTU5MjF9.LiiZ96BBkru2ny4JS_Pxd5scrN2fdmYoAyjTZvGGB-Q';
    const select = document.getElementById('options');
    const selectedValues = [];
    for (let i = 0; i < select.options.length; i++) 
    {
        if (select.options[i].selected) 
        {
            selectedValues.push(select.options[i].value);
        }
    }
    const data = {
        title: senior_title,
        year: senior_year,
        // person:senior_person,
        content: senior_content,
        image: senior_image,
        selectedOptions: selectedValues,
    };

    const headers = {
        'Authorization': `Bearer ${token}`
    };
    

    postData('https://localhost:7275/api/seniorproject/CreateData', data, headers)
        .then(data => {
            console.log(data);
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

