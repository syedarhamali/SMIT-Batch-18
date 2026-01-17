
//arguments pass hoty hen function call karty waqt
//parameters wo values hoti he jahan argument se value arhi hoti he

// function sumOfTwoNumbers(numberOne , numberTwo){
//     var numberOne = numberOne;
//     var numberTwo = numberTwo;
//     var sum = numberOne - numberTwo
//     console.log(sum)
// }


// function askSubjectMarks() {
//     var subOne = +prompt("Enter your first subject marks")
//     var subTwo = +prompt("Enter your second subject marks")
//     var subThree = +prompt("Enter your third subject marks")
//     var subFour = +prompt("Enter your forth subject marks")
//     var subFive = +prompt("Enter your fifth subject marks")

//     getTotal(subOne, subTwo, subThree, subFour, subFive)
// }


// function getTotal(One, two, three, four, five) {
//     var sum = One + two + three + four + five
//     console.log(sum)
//     var totalMarks = 500;
//     var percentage = (sum / totalMarks) * 100
//     console.log(percentage)

//     gradingSystem(percentage)
// }

// function gradingSystem(percentage) {

//     if (percentage >= 80) {
//         console.log("Grade A+ \n Excellent")
//     }
//     else if (percentage >= 70) {
//         console.log("Grade A \n Very Good ")
//     }
//     else if (percentage >= 60) {
//         console.log("Grade B \n good")
//     }
//     else if (percentage >= 50) {
//         console.log("Grade C \n You need to Improve")
//     }
//     else if (percentage < 50) {
//         console.log("Grade F \n Fail")
//     }

// }


function greet(){
    var userName = prompt("What's your name??")
    welcomeUser(userName)
}


function welcomeUser(userName = 'User'){
    console.log("Welcome to my website " + userName)
}