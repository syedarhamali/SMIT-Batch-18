// var userName = 'Nafay' // Global Variable


// function sumOfTwo(){
//     var userName = 'Zain' //local variable
//     console.log(userName)
// }


// console.log(userName)


// function checkSignal(userInput) {
//     if (userInput === '') return
//     var color = userInput.toLowerCase()

//     if (color === "red") {
//         return "STOP";
//     } else if (color === "yellow") {
//         return "READY";
//     } else if (color === "green") {
//         return "GO";
//     } else {
//         return "INVALID";
//     }
// }

// function checkTrafficSignal() {
//     var userInput = prompt("Enter signal color (Red,Yellow,Green)", 'red');
//     var message = checkSignal(userInput);
//     alert(message);
// }

function checkName(userInput){

    if(userInput === 'Arham'){
        return 'you are a teacher'
    } else{
        return 'you are student'
    }

}



function getStarted(){
    var userInput = prompt("Enter your name")
    var output = checkName(userInput)

    console.log(output)


}