
const contest_year = document.querySelector('year');
const contest_name = document.querySelector('name');
const contest_work = document.querySelector('work');
const contest_rank = document.querySelector('rank');

// 假設您已經取得了要修改的資料，並將其儲存在一個名為 data 的物件中。
const data = {
    id: 'contest_id',
    year: 'contest_year',
    title: 'contest_title',
    content: 'contest_work',
    rk: 'contest_rank',
    member: 'contest_member',
};

// 將資料填入表單中。
titleInput.value = data.title;
contentInput.value = data.content;
dateInput.value = data.date;

// 偵聽表單的提交事件，當使用者提交表單時，呼叫相應的函數進行處理。
submitButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  // 從表單中獲取使用者輸入的資料。
    const updatedData = {
    id: data.id, // 帶入原始資料的 ID。
    title: titleInput.value,
    content: contentInput.value,
    date: dateInput.value,
    };

  // 在這裡呼叫修改資料的 API，傳入使用者輸入的資料。
  // 請注意，這個範例僅僅是示範如何呼叫 API，實際上還需要根據你的具體情況進行相應的修改。
    updateData(updatedData);
}

function updateData(data) {
  // 在這裡使用 XMLHttpRequest 或 fetch 呼叫修改資料的 API，傳入使用者輸入的資料。
  // 請注意，這個範例僅僅是示範如何呼叫 API，實際上還需要根據你的具體情況進行相應的修改。
}


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
