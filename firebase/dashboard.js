import { getLoginUser } from "./firebaseAuth.js";
import {  addDocToFirestore, getDocFromFirestore, getDocsFromFirestore } from "./firestore.js";
 

// getLoginUser(user =>{
//     console.log(user);
//     getUserData(user)
// })
// document.getElementById('add-doc').addEventListener('click', addDocToFirestore);





// async function getUserData(user) {
//     const userData = await getDocFromFirestore("users" , user.uid)
//     document.getElementById("card-container").innerHTML = `<div class="card">
//         <h2>Profile Card</h2>

//         <div class="info">
//             <span class="label">First Name:</span> ${userData.firstName}
//         </div>
//          <div class="info">
//             <span class="label">Last Name:</span> ${userData.lastName}
//         </div>
//          <div class="info">
//             <span class="label">Age:</span> ${userData.age}
//         </div>
//     </div>`
// }



async function getUsersFromFirestore(){
    const users = await getDocsFromFirestore("users")

    console.log(users)
}

getUsersFromFirestore()