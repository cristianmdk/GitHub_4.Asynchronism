let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'


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

//The power of async functions becomes more evident when there are multiple steps involved.
async function doSomethingAsync (url_API){
    try{
        const data1  = await fetchData (url_API)
        const data2  = await fetchData (url_API + data1.results[2].id)
        const data3  = await fetchData (data2.origin.url)

        console.log(data1.info.count)
        console.log(data2.name)
        console.log(data3.dimension)
    }catch (error){
        console.log(error)
    }
}

console.log ('Before')
doSomethingAsync(API)
console.log ('After')




/*
todo To solve asynchronous problems we can use callback, promises and async/await

*callback:
it is a function which has another function as a parameter
they are universal, mostly all browser can run callbacks
it is easy to get confuse and lose because it grows and grows
its structure is basically: if error, if error, ...

?promise:
easy to chain. An then can be chained to the next one by a return inside the then
it doesn't work with exceptions.
At the bottom has a catch where all errors are collected
It needs a qualify to run in all browsers.


!async :
they are easy to read
we wait until something happens to continue with the next line
we have to wait for each call
If we want to do more calls, we need to wait for them more and more
It needs a qualify to run in all browsers.
*/