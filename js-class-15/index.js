// var today = new Date().getDay()

// var namesOfWeek = ['Sunday', 'Monday', 'Tuesday' , 'Wed' , 'Thur' , 'Fri', 'Sat']

// var nameOfDay = namesOfWeek[today]

// console.log(nameOfDay)
// console.log(today)


// if(today === 0){
//     console.log("Sunday")
// } else if(today === 1){
//     console.log("Monday")
// } else if(today === 4){
//     console.log('Tuesday')
// } 

// var today = 8
// switch(today){
//     case 0:
//         console.log("Sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 4: 
//         console.log("Tuesday")
//         break;
//     case 5: 
//         console.log("Wednesday")
//         break;
//     default:
//         console.log("Input is incorrect!")
// }

// for(var i = 0 ; i <= 10 ; i++){
//     console.log("hello world")
// }

// var i = 10
// while(i >= 5){
//     console.log("Running")
//     i++
// }

function game() {
    var tryAgain = 'no'
    var userInput = ''

    // while(tryAgain === 'yes'){
    //     console.log("Game started")
    //     console.log("Game playing")
    //     console.log("Game ended")

    //     userInput = prompt("do you want to play againn??")
    //     tryAgain = userInput
    // }


    do {
        console.log("Game started")
        console.log("Game playing")
        console.log("Game ended")

        userInput = prompt("do you want to play againn??")
        tryAgain = userInput
    } while (tryAgain === 'yes')
}