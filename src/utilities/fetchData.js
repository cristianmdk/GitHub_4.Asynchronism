let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


function fetchData (url_api){
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve (JSON.parse(xhttp.responseText))
                }else{
                    reject (new Error ('Error ', url_api))
                }
            }
    })
    xhttp.open('GET', url_api, true)
    xhttp.send()
    })
}