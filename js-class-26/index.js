class Students{
    constructor(fullName , dob , password , cnic){
        this.fullName = fullName
        this.dob = dob
        this.password = password
        this.cnic = cnic
        this.signUpTime = new Date()
        this.location = 'Karachi'
    }
}

var users = JSON.parse(localStorage.getItem('users')) || []

function handleSubmit(){
    var cnic = document.getElementById("cnic")
    var fullName = document.getElementById("fullName")
    var dob = document.getElementById("dob")
    var password = document.getElementById("password")
    var user = new Students(cnic.value , fullName.value , dob.value , password.value)

    users.push(user)
    localStorage.setItem('users' , JSON.stringify(users))
}


