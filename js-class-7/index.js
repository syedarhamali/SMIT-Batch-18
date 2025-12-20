// var cityName = prompt("apke sheher ka naam kiya he??")

// if (cityName === 'Lahore') {
//     console.log("you are living in cleaniest city !")
// } else if (cityName === 'Islamabad') {
//     console.log("you are living in cleaniest city !")

// } else {
//     console.log("sheher saaf krwaloo!!")
// }



var isCNIC = prompt("do you have cnic??")
var isPakistani = prompt("are you pakistani??")
var age = +prompt("what's your age??")

if (isCNIC === 'yes' ||  isPakistani === 'yes' || age >= 18 ) { //optional
    console.log("you are eligible for vote!")
}  else {
    console.log("bachy ho ghar jao!")
}



if (isCNIC === 'yes'&& isPakistani === 'yes' && age >= 18 ) { //mandatory
    console.log("you are eligible for vote!")
}  else {
    console.log("bachy ho ghar jao!")
}

// &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// || 
// true || true = true
// true || false = true
// false || true = true
// false || false = false