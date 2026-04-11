// var password = 'Arham123'

// let password = 'Arham1234' //same nam nh hoskta

// const password = 'Arham1234'
// console.log(password) // Arham1234

// password = 'Arham123'
// console.log(password) // Arham123


// function checkPassword(){
//     if(password === 'Arham123'){
//         alert("Login Successfully!")
//     }else{
//         alert("Incorrect password")
//     }
// }


const checkPassword = (myName) =>{
window.location.replace('dashboard.html')

    console.log(myName)
     if(password === 'Arham1234'){
        alert("Login Successfully!")
    }else{
        alert("Incorrect password")
    }
}


// let firstName = 'Arham'
// let lastName = 'Ali'


// // let fullName = 'Syed Muhammad ' + " " + firstName + " " + lastName + " " + "Qadri"

// let fullName = `Syed Muhammad ${firstName} ${lastName} Qadri`

// console.log(fullName)



// const myObject = {
//     name: 'Arham',
//     age: 24,
//     nationality: 'Pakistani',
//     qualification: 'Intermediate',
//     city: 'Karachi',
//     gender: 'male',
//     contactNumber: '090078601',
//     email: 'arhamali@gmail.com',
//     courseOne : 'UI/UX Designer',
//     password: '123'
// }

// const newObject = {...myObject , password: '12345'}

// myObject.password = '1234'

// console.log(newObject)




// const coursesName = {
//     courseOne: 'Web and App',
//     courseTwo: 'Graphics Designing',
//     courseThree: 'AI and Data Science'
// }


// const detailsWithCourses = {
//     name: 'Arham',
//     age: 24,
//     nationality: 'Pakistani',
//     qualification: 'Intermediate',
//     city: 'Karachi',
//     gender: 'male',
//     contactNumber: '090078601',
//     email: 'arhamali@gmail.com',
//     courseOne: 'Web and App',
//     courseTwo: 'Graphics Designing',
//     courseThree: 'AI and Data Science'
// }

// const detailsWithCourses = { ...coursesName,  ...myObject}

// console.log(detailsWithCourses)

// console.log(myObject.name)
// console.log(myObject.age)
// console.log(myObject.nationality)
// console.log(myObject.qualification)

// const {name:personName , age , nationality , qualification} = myObject

// console.log(personName)
// console.log(age)
// console.log(nationality)
// console.log(qualification)
// console.log(myObject)


function userDetail (personName , age , nationality, ...arham){
    console.log(personName , age , nationality  , arham)
}

userDetail('Arham', 24 , 'Pakistani', '090078601' , 'Intermediate' , 'arhamali@gmail.com' , "C-220 rafay e aam")
