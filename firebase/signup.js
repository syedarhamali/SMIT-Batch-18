import { getLoginUser, signup } from "./firebaseAuth.js";

function signupForm(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    signup(email, password , firstName , lastName , age);

}

getLoginUser()

document.getElementById('signup-form').addEventListener('submit', (event) => signupForm(event));

// window.signupForm = signupForm;