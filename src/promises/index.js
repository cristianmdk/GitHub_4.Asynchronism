/*
A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:
Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
Rejected: onRejected() will be called (e.g., reject() was called)
Pending: not yet fulfilled or rejected
*/
//! function which asynchronously generates grades by giving a record of grades and two callback functions,
//! one called if the course is successfully approved, and the other called if it is failed.

//The arguments to "then" are optional, and "catch(failureCallback)"" is short for "then(null, failureCallback)"


//----------------------------------------------------------
//Example of asynchronism
let age = 18
console.log ('A. Checking age.')
setTimeout(()=>{
    age++
    console.log('B. Happy birthday.')
},2000)
console.log (`C. Now your age is ${age}`)


//with promises
function fun_promise (resolve, reject){
    setTimeout(()=>{
        age++
        console.log('2. Happy birthday.')
        resolve(age)
    },2000)
}
const my_promise = new Promise (fun_promise)

// I promise when Im done with my_promise (with what is inside) "then" I will do what is inside the "positive_answer"
console.log ('1. Checking age.')
my_promise
    .then(positive_answer => console.log (`3. Now your age is ${age}`))





//----------------------------------------------------------
//callback
function sum(num1, num2){
    if (num1 > num2){
        return(num1 + num2)
    }else{
        return(num2-num1)
    }
}
function call_func(num1, num2, callback){
    return callback(num1, num2)
}
console.log(call_func(6,4,sum))
console.log(call_func(4,6,sum))

//transformed function from callback to promises
function sum_promises(num1, num2){
    return new Promise((resolve, reject)=>{
        if (num1 > num2){
            resolve(num1 + num2)
        }else{
            reject(num2-num1)
        }
    })
}

//promise version let
//We create a promise and we tell
//what we are going to do if we succeed "resolve (num1 + num2)"
//or what we are going to do if we fail "reject (num2 - num1)"
let sum_promises_let = (num1, num2) =>(
    new Promise((resolve, reject)=>{
        if (num1 > num2){
            resolve(num1 + num2)
        }else{
            reject(num2-num1)
        }
    })
)

//do "then" if we succeed or do "catch" if we fail
//use of the promise
sum_promises(6,4)
    .then ((returnFromResolve)=> {
        console.log(returnFromResolve)
        return (sum_promises(4,6))
    })
    .then ((returnFromResolve)=> console.log(returnFromResolve))
    .catch((returnFromReject) => console.log(returnFromReject))


sum_promises_let(6,4)
    .then ((returnFromResolve)=> {
        console.log(returnFromResolve)
        return (sum_promises(4,6))
    })
    .then ((returnFromResolve)=> console.log(returnFromResolve))
    .catch((returnFromReject) => console.log(returnFromReject))




//----------------------------------------------------------
//function with callback
function print_date (dateNow){
    console.log (dateNow)
}
function date_callback(callback){
    console.log(new Date)
    setTimeout(function internal_fun(){
        let date = new Date
        callback(date)
    }, 3000)
}
date_callback(print_date)

//Transformation from callback to promises
const IWantDate = true
function date(){
    return new Promise((resolve, reject)=>{
        if (IWantDate){
            console.log(new Date)
            setTimeout(()=>{
                let date = new Date
                resolve (date)
            }, 3000)
        }else{
            const error = new Error('Dammit!')
            reject (error)
        }
    })
}

date()
    .then((dateFromResolve) =>{
        console.log (dateFromResolve)
    })
    .catch((messageFromError) => {
        console.log (messageFromError)
    })

//promise with let
let dateLet=new Promise((resolve,reject)=>{
    if (IWantDate){
        console.log(new Date)
        setTimeout(()=>{
            let date = new Date
            resolve (date)
        }, 3000)
    }else{
        const error=new Error('Dammit!')
        reject (error)
    }
})

dateLet
    .then((dateFromResolve) => console.log (dateFromResolve))
    .catch((messageFromError) => console.log (messageFromError))






//----------------------------------------------------------
const promise1 = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('Solved promise1')
        }else{
            reject('Dammit! promise1')
        }
    })
}


promise1()
    .then(response => console.log(response))
    .catch(err => console.error(err))



const promise2 = () =>{
    return new Promise((resolve, reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('Solved promise2')
            },2000)
        }else{
            const error = new Error('Dammit! promise2')
            reject (error)
        }
    })
}


promise2()
    .then(response => console.log(response))
    .then(response => console.log('Second response'))
    .catch(err => console.error(err))


Promise.all([promise1(), promise2()])
    .then(response => {
        console.log('Array of results:', response)
    })
    .then(response => console.log('Second response'))
    .catch(err => console.error(err))

