import { getLoginUser, signIn, userLogout } from "./firebaseAuth.js";

function signinForm(event){
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    signIn(email, password);
}

getLoginUser()

document.getElementById('signin-form').addEventListener('submit', (event) => signinForm(event));


document.getElementById('logout').addEventListener('click', () => userLogout());
// window.signupForm = signupForm;