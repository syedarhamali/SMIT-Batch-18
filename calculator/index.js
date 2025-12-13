var userName = prompt("What's your name??")
alert("Welcome to my website " + userName)


var firstNumber = +prompt("Enter your first Number??")
var operator = prompt("kiya krwana chah rahy ho ?? + , - , x ya /")
var secondNumber = +prompt("Enter your second Number")
var result;


if (operator == "+") {
    result = firstNumber + secondNumber
    alert("Your result is " + result)
}

if (operator == "-") {
    alert("Your result is " + (firstNumber - secondNumber))
}

if (operator == "x") {
    alert("Your result is " + (firstNumber * secondNumber))
}

if (operator == "/") {
    alert("Your result is " + (firstNumber / secondNumber))
}