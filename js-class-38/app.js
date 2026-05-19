// Funtion to display something
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }


























// Create a Promise Object
// let myPromise = new Promise(function(resolve, reject) {
//  let ok = false;

// // Code that might take some time goes here

//   if (ok) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });






// const myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function(){ resolve("I love Saylani !!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// }).catch((error) => console.log(error));









// Using then() to display the result
// myPromise.then(
//   function(value) {myDisplayer(value)},
//   function(value) {myDisplayer(value)}
// );



// let isTrue = null
// if (isTrue === true) {
//     console.log('running')
// } else {
//     console.log('Not running')
// }


// isTrue === true ? console.log("running") : isTrue === false ? console.log('not running') : console.log("invalid answer")

// ? se phly wali value agr true hoti he to ? k baad wala code execute hojayega warna : k baad wala code execute hoga 


// console.log(isTrue === true ? 'Running' :  'Not running') //ternary operator
// console.log(isTrue === true ? 'Running' ? isTrue === false : 'Not running': 'Not found') //ternary operator



// optional chaining


const users = [
    {
    studentName: 'Bakhtiyar',
    age: 18,
    class: 'Batch 18'
},
    {
    personName: 'Arham',
    age: 24,
    class: 'batch 18'
}, {
    personName: 'Rehan',
    age: 18,
    class: 'Batch 18'
}, {
    personName: 'Bakhtiyar',
    age: 18,
    class: 'Batch 18'
}]

// let users = null

users?.forEach((user) => {
    console.log(user.personName)
})

console.log('running')


console.log("running")