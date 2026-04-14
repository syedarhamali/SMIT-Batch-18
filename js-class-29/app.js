// function greetUser (myName){
//     console.log(`Welcome to my application ${myName}`)
// }

// function boilEgg(){ // callback (jo function pass hoga as a argument wo call back hoga)
//     console.log("egg is boiling")
// }

// function stove(boilEgg){ // high order function (jo function accept kryga function as a argument wo high order hoga)
//     boilEgg()
// }

// stove(boilEgg)


const users = [{
    name: 'Arham',
    age: 24,
    nationality: 'Pakistani',
    email: 'arham@gmail.com',
    password: '12345'
},
{
    name: 'Umar',
    age: 20,
    nationality: 'Pakistani',
    email: 'umar@gmail.com',
    password: '12345'


},
{
    name:'Wahaj',
    age: 18,
    nationality: 'Pakistani',
    email: 'wahaj@gmail.com',
    password: '12345'

}
]




const user = users.find((user) => user.email === 'arham@gmail.com' && user.password === '123456' ) //high order function

console.log(user , "user ")