// todo CALLBACK: function which receives another function (call) as a parameter

// Function which will be called
function sum(num1, num2){
    return num1 + num2
}

// function which will do the callback
function call_func(num1, num2, callback){
    return callback(num1, num2)
}

//console.log(call_func(6,4,sum))



//todo The function print_date and date are equivalent to date_printed
function print_date (dateNow){
    console.log (dateNow)
}
function date(callback){
    console.log(new Date)
    setTimeout(function internal_fun(){
        let date = new Date
        callback(date)
    }, 3000)
}
date(print_date)


function date_printed(){
    console.log(new Date)
    setTimeout(function internal_fun(){
        let date = new Date
        function printDate (dateNow) {
            console.log (dateNow)
        }
        printDate(date);
    }, 3000)
}
date_printed()


//date(printDate);