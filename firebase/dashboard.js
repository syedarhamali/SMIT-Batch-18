import { getLoginUser } from "./firebaseAuth.js";
import {  addDocToFirestore } from "./firestore.js";
 

document.getElementById('add-doc').addEventListener('click', addDocToFirestore);

getLoginUser()