/*window.onload = function() {
    
    let LoginToken=sessionStorage.getItem('LoginToken');
    console.log("token",LoginToken)
        var tabo = document.querySelector("#tabo");
        fetch("http://localhost:5229/api/thesis/GetAllDataList",{ method: 'GET'},hearders: new Headers({'Content-Type': 'application/json'}))
        .then(response => response.json())
        .then(data =>{
            data.sort((id, title, abstract, year) => new )
        })
        data.forEach((item)=>{
            const title = new title(thesis.title);
            const id = new id(thesis.id);
            const abstract = new abstract(thesis.abstract);
            const year = new year(thesis.year)
            tabo.innerHTML +=
            `
            <div class="unpad">
                <div class="border1px">
                    <div class="thesis-topic">
                        <table class="tablewidth">
                            <tr>
                                <td class="td-A td-to">${thesis.id}</td>
                                <td class="td-A td-wr">${thesis.title}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="thesis-content">
                        <table class="tablewidth">
                            <tr>
                                <td class="td-co">${thesis.abstract}</td>
                            </tr>
                            
                        </table>
                        
                    </div>
                </div>
            </div>
                
            `;
        
        })
        
        
    }
*/