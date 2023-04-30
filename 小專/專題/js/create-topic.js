


let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token1=>",LoginToken);


function postData(url, data, headers) {
    const formData = new FormData();
    console.log("data" ,data);
    formData.append('senior_title', data.title);
    formData.append('senior_year', data.year);
    formData.append('senior_content', data.content);
    formData.append('FormImage', data.image);

    formData.append('members_id', data.members_id);

    // formData.append('senior_selectedValues', JSON.stringify(data.selectedValues)); // 將selectedValues轉為JSON字串後附加到FormData
    console.log("formdata",formData);

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: headers
    })
      .then(response => response.formData) //輸出成json
}

//新增

function submit() {
    console.log(LoginToken);
    
    const senior_title = document.getElementById('title').value;
    const senior_year = document.getElementById('year').value;
    const year_number = Number(senior_year);

    // const members_id = document.getElementById('post').value;
    const senior_image = document.getElementById('image').files[0];
    const senior_content = document.getElementById('content').value;

    var selected = [];
    for (var option of document.getElementById('post').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    console.log("id" ,selected);




    
    const data = {
        title: senior_title,
        // year: 109,
        year: year_number,
        members_id:selected,
        // members_id:"f63019c4-fbbas-40cc-aac9-3dcaaa33b8a7",

        content: senior_content,
        image: senior_image,
        // selectedOptions: selectedValues,
    };

    const headers = {
        'Authorization': `Bearer ${LoginToken}`
    };
    

    postData('http://localhost:5229/api/seniorproject/CreateData', data, headers)
    .then(({data}) => {
        console.log(data);
        
        });



}












function previewFile() {
    var preview = document.querySelector('.img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    // // 取得檔案名稱
    // var fileName = file.name;
    // var fileNameDisplay = document.querySelector('.file-name');
    // fileNameDisplay.textContent = fileName;

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    // 設定圖片大小
    preview.style.width = "300px";
}



//取的資料 ok

window.onload = function() {
    //




    var post = document.querySelector("#post");
    fetch("http://localhost:5229/api/Members/GetIDList")
    .then(response => response.json())
    .then(data => {
        console.log("member",data);

        post.innerHTML = "";
        data.forEach((item) => {
            // console.log("item",item)
            const date = new Date(item.update_time);
            const update_time = date.toLocaleString();

            post.innerHTML +=
            `

            <option value=${item.members_id}>${item.name}</option>
            `;
        });
    })
    .catch(error => console.error(error));
}




