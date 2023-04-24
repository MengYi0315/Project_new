const apiURL = 'http://localhost:5229/api/Announcement/GetAllDataList';

const getPosts = async () => {
    try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // 遍歷每個物件，並輸出對應的ID、標題、時間
    data.forEach(post => {
        console.log(`ID: ${post.id}`);
        console.log(`標題: ${post.title}`);
        console.log(`時間: ${post.created_at}`);
    });

    } catch (error) {
        console.log(error);
    }
}

// 當頁面載入完成後自動執行getPosts函式
window.onload = getPosts;
