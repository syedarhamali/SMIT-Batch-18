import { auth , createUserWithEmailAndPassword} from "./firebaseConfig.js";

document.getElementById("form-submit").addEventListener('click', submitForm)


function submitForm() {
    var { value: email } = document.getElementById("email")
    var { value: password } = document.getElementById("password")

    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            console.log(user , "ye wo banda he jo signup hua hai")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(error)
            // ..
        });

}