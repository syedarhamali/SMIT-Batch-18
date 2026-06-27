import { getLoginUser, signup } from "./firebaseAuth.js";

function signupForm(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signup(email, password);

}

getLoginUser()

document.getElementById('signup-form').addEventListener('submit', (event) => signupForm(event));

// window.signupForm = signupForm;