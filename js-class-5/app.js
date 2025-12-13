
if (50 > 60) {
    console.log("50 is greater")
}
else {
    console.log("50 is less")
}




var age = 20;
var nic = false; // boolean
var eyeTestClear = false;

if (age >= 18 && nic === true && eyeTestClear === true) { // AND
    console.log("can apply for driving lisence")
}
else if (age < 18 && nic === false && eyeTestClear === false) {
    console.log("wrong all conditions")
}

else if (age < 18 && nic == false) {
    console.log("age not match and nic must be required");

}
else if (nic == false && eyeTestClear == false) {
    console.log(" nic must be required and must clear test");
}

else if (age < 18 && eyeTestClear == false) {
    console.log(" age must be above 17 and must clear test");
}
else if (age < 18) {
    console.log(" age must be above 17 ");
}
// students
var idCard = true;
var lateMinutes = 10;
var paid = true;

// if(idCard == true && paid == true){
//     console.log("allow")
// }

var num = prompt("enter a number");

if (num < 10 || num == 20 || num == 30) {  // OR

}



// AND    true && true
// OR true || false
// OR false || true
// OR true || true


