
let age = 10

const my_promise = new Promise ((resolve, reject)=>{
    if (true){
        setTimeout(()=>{
            age++
            console.log('2. Happy birthday.')
            resolve(age)
        },2000)
    } else{
        const error = new Error('Dammit!')
        reject (error)
    }
})

console.log ('1. Checking age.')
my_promise
    .then(() => { })
    console.log (`3. Now your age is ${age}`)



//----------------------------------------------------------
//Promise
const increaseAge = () =>{
    return new Promise ((resolve, reject)=>{
        (true)
            ? setTimeout(()=>{
                message = `A. Increasing age to ${age+=1}`
                resolve (console.log(message))
            },2000)
            : reject (new Error('Dammit!'))
    })
}


function  DoSomethingAsync () {
    const something = increaseAge()
    console.log ('B. Confirming the age')
    console.log(`C. Happy ${age}th birthday.`)
}

async function  DoSomethingSync () {
    const something = await increaseAge()
    console.log ('B. Confirming the age')
    console.log(`C. Happy ${age}th birthday.`)
}


console.log ('Before')
DoSomethingASync()
console.log ('After')


console.log ('Before')
DoSomethingSync()
console.log ('After')




//----------------------------------------------------------
const chainPromises = async ()=>{
    try{
        console.log ('1.Checking age.')
        const something  = await increaseAge ()
        const something2 = await increaseAge ()
        const something3 = await increaseAge ()
        const something4 = await increaseAge ()
        console.log('B. Happy fourth birthday.')
        console.log(`C. Happy ${age}th birthday.`)
    }catch (error){
        console.log(error)
    }
}

console.log ('Before')
chainPromises()
console.log ('After')

