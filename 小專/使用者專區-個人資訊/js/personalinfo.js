let LoginToken=sessionStorage.getItem('LoginToken');
console.log("token",LoginToken);
let name=sessionStorage.getItem('name');

window.onload = function() {
    
        var post = document.querySelector("#post");
        fetch("https://localhost:7275/api/Members",{ 
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LoginToken}`
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            post.innerHTML = "";
            data.forEach(item => {
                if(item.name === name)
                {
                    console.log(item.name);
                    post.innerHTML +=
                    `
                    <tr>
                        <td class="normal-word text-bottom field" >
                            姓名：
                        </td>
                        <td class="text-bottom field normal-word-1">
                            ${item.name}
                            <!-- <input type="text"  class="text"> -->
                        </td>

                    </tr>
                    <tr>
                        <td class="normal-word text-bottom field" >
                            帳號：
                        </td>
                        <td class="text-bottom field normal-word-1">
                            ${item.account}
                        </td>

                    </tr>
                
                
                    <tr>
                        <td class="normal-word text-bottom field" >
                            Email：
                        </td>
                        <td class="text-bottom field normal-word-1">
                            ${item.email}
                        </td>

                    </tr>
                    

                    `;
                }
            });

        })
        
} 
