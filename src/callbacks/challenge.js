//xmlhttprequest is inside the javaScript
//which will allow us to do request to any service
//1. terminal: npm install xmlhttprequest --save =>install dependency


// Instantiate the library which was installed
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// URL to which we are going to make the requests
const API = 'https://rickandmortyapi.com/api/character/'


// "fetch_data" brings the information from the API
function fetch_data(url_api, callback){
    // Step 1. element XMLHttpRequest
    const xhttp = new XMLHttpRequest()
    // Step 2. The onreadystatechange event is triggered four times (1-4),
    //one time for each change in the readyState.
    //it is necessary to listen to onreadystatechange
    //if it changes what the request in the step 3 is asking.
    xhttp.onreadystatechange = function (){
        // Step 2.1. The readyState property holds the status of the XMLHttpRequest.
        // Step 2.2. The status property and the statusText property holds the status of the XMLHttpRequest object.
        // Values for readyState and status in: w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if (xhttp.readyState === 4){
            if(xhttp.status === 200 ){ //validation the function is being executed
                // the callback will have to parameters: 1. error, 2. the answer of the call to the app
                // it is necessary to transform to JSON format, because if not I will receive a string (the same if I dont have postman)
                callback (null, JSON.parse(xhttp.responseText)) //now I can give back the callback¡
            } else { //in case it is not working properly
                const error = new Error('Error-->' + url_api)
                return callback(error, null) //null because i don't have any answer from the request
            }
        }
    }
    //Step 3. call an URL and do a request (GET)
    xhttp.open('GET', url_api, true) //true to activate the asynchronism. we are opening a conception
    //Step 4. to finalize the request
    xhttp.send()
}




// callback (error, string from the URL)


//My first request is the information in the page 1
fetch_data(API, function(error1, data1){
    if (error1) return console.log (error1)
    //it will print the data from API.
    //it corresponds to the data in the page 1
    console.log(data1)
})

//My first request is the information in the page 3
const data_1 = fetch_data(API+'?page=3', function(error1, data1){
    if (error1) return console.log (error1)
    console.log(data1) //it will print the data from API + '?page=3', it corresponds to the data in the page 3
})






//My second request gets the information of the character 3
// id_character and new_API get the same data
fetch_data(API,function(error1, data1){
    if (error1) return console.log(error1)

    const id_character = data1.results[2].id
    console.log(id_character)
    fetch_data(API+id_character, function(error2, data2){
        if (error2) return console.log(error2)
        console.log (data2)
    })

    const new_API = data1.results[2].url
    fetch_data(new_API, function(error2, data2){
        if (error2) return console.log(error2)
        console.log (data2)
    })
})







fetch_data(API, function(error1, data1){
    if (error1) return console.log(error1)
    fetch_data (API + data1.results[0].id, function (error2, data2){
        if (error2) return console.log(error2)
        fetch_data (data2.origin.url, function (error3, data3){
            if (error3) return console.log(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})


