let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'


const fetch_data = (url_api) => {
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



//----------------------------------------------------------
fetch_data(API)
    .then ((returnFromResolve)=> console.log(returnFromResolve)) //equal to the parse of the first page
    .catch((returnFromReject) => console.log(returnFromReject))

fetch_data(API+'?page=3')
    .then ((returnFromResolve)=> console.log(returnFromResolve))
    .catch((returnFromReject) => console.error(returnFromReject)) //no difference with .log and .error for a var New Error()





//----------------------------------------------------------
fetch_data(API)
    .then ((returnFromResolve)=> {
        console.log(returnFromResolve) //result of the first promise = information in the page 1
        const id_character = returnFromResolve.results[2].id //from the result I get the id
        console.log(id_character)
        return fetch_data(API+id_character) //create my second promise
    })
    .then ((returnFromResolve)=> {console.log(returnFromResolve)}) // result of my second promise = information of the character 3
    .catch((returnFromReject) => console.error(returnFromReject))



//----------------------------------------------------------
fetch_data(API)
    .then((data1)=> {
        //!result of the first promise (page1)
        console.log('PROMISE 1:', data1)
        console.log(data1.info.count)
        return fetch_data (API + data1.results[2].id)
    })
    .then((data2)=> {
        //! result of the second promise (character3)
        console.log('PROMISE 2:', data2)
        console.log(data2.name)
        return fetch_data (data2.origin.url)
    })
    .then((data3)=> {
        //! result of the third promise (origen)
        console.log('PROMISE 3:', data3)
        console.log(data3.dimension)
    })
    .catch((returnFromReject) => console.log(returnFromReject))

