// console.log(this)

// const user = {
//     name: 'Arham',
//     gender: 'Male',
//     phoneNumber: 90078601,
//     getDetails: function (){
//         console.log(this.name )
//         console.log(this.phoneNumber)
//         console.log(this.gender)
//         console.log(this.nationality)
//     }
// }

// user.getDetails()

// const user1 = {
//     name: 'Arham',
//     gender: 'Male',
//     phoneNumber: 90078601,

// }

// const user2 = {
//     name: 'Ahmed',
//     gender: 'Male',
//     phoneNumber: 90078602,
// }

// function getDetails() {
//     console.log('this is object name value', this.name)
//     console.log('this is object gender value', this.gender)
//     console.log('this is object phoneNumber value', this.phoneNumber)
// }

// getDetails.call(user1)
// getDetails.call(user2)
// getDetails.call(user2)


// const arham = {
//     balance: 20000,
//     name: 'Arham Ali',
//     bank: 'Meezan'
// }

// const ahmed= {
//      balance: 20000,
//     name: 'Ahmed',
//     bank: 'Meezan'
// }

// // Call (ik jaga ap ny environment se value uthany ka bola dosri jaga apny parameter se value uthany ka bola)
// function getDetail(city , country){

//     console.log(this.balance)
//     console.log(this.name)
//     console.log(this.bank)
//     console.log(city)
//     console.log(country)

// }

// getDetail.call(arham , 'Karachi' , 'Pakistan')
// getDetail.call(ahmed , 'Multan' , 'Pakistan')


// // apply 

// const arham = {
//     balance: 20000,
//     name: 'Arham Ali',
//     bank: 'Meezan'
// }

// const ahmed= {
//      balance: 20000,
//     name: 'Ahmed',
//     bank: 'Meezan'
// }

// // Apply 
// function getDetail(city , country){

//     console.log(this.balance)
//     console.log(this.name)
//     console.log(this.bank)
//     console.log(city)
//     console.log(country)

// }

// getDetail.apply(arham , ['Karachi' , 'Pakistan'])



// const user = {
//     name : 'Arham',
//     greet: function (){
//         console.log(name)
//     }
// }

// function myDetails(){
//     var personName = 'Arham'

//     function getName(){
//         console.log(personName)
//     }

//     return getName
// }

// const getDetail = myDetails()
// getDetail()


// Bind 
const userOne = {
    personName: 'Arham Ali',
    greet: function (){
        console.log(this.personName)
    }
}

var getDetail = userOne.greet.bind(userOne)

getDetail()