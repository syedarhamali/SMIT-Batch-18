import { createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";


function signup (email , password){
  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    console.log("User signed up successfully");
    window.location.href= "dashboard.html"
    // ...
  })
  .catch((error) => {
    console.log(error)
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}


function signIn(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential);
      const user = userCredential.user;
    window.location.href= "dashboard.html"

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function getLoginUser(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user jo login he " , user)
      const uid = user.uid;
      console.log("user id is ", uid)
      // ...
    } else {
      console.log("user mojood nhi he ")
      // User is signed out
      // ...
    }
  });

}

function userLogout(){
  signOut(auth).then(() => {
    console.log("user logout ho gaya! !")
    // Sign-out successful.
  }).catch((error) => {
    console.log(error , "error agaya he logout karty waqt")
    // An error happened.
  });
  
}

export { signup , signIn , getLoginUser , userLogout};