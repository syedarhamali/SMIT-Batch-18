var firstName = 'Arham'
var lastName = 'Ali'

var firstName2 = 'Suhair'
var lastName2 = 'Khan'

var userOne = {
    firstName: 'Arham',
    lastName: 'Ali',
    age: 24,
    nationality: 'Pakistani'
}

var userTwo = {
    firstName: 'Suhair',
    lastName: 'Khan'
}

userOne.firstName = 'Suhairr'
var users = []

users.push(userOne)
console.log(users)
console.log(firstName) //Arham
console.log(firstName2) //Suhair
console.log(userOne.firstName)
console.log(userTwo.firstName)
console.log(userOne)

// var users = [['Arham', 'Ali', 24, 'Pakistani'], ['Suhair', 'Khan', 19]] wrong



