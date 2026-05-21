import {getProductData} from "./dashboard.js";



function signUp(event) {
    event.preventDefault()

    const { value: fullName } = document.getElementById("fullName")
    const { value: email } = document.getElementById("email")
    const { value: password } = document.getElementById("password")

    localStorage.setItem("user", JSON.stringify({ fullName, email, password }))

}


const products = getProductData()


console.log(products)
