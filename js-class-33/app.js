// function AtmPin(){
//     let pin = 1234

//     function getPin(){ //clouser
//         console.log(pin)
//     }

//     return getPin
// }

// const myPin = AtmPin()


// console.log(AtmPin())
// myPin()




function login(){
    let userPassword = 1234

    function validate(password){
        if(password.length < 6){
            return false
        } else{
            return true
        }
    }

    function checkPassword(password){

        if(!validate(password)){
            return 'Password weak he'
        } else{
            return 'Password strong he'
        }
        
    }

    return checkPassword
}

let getLogin = login()

getLogin('1234567')