import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

async function addDocToFirestore(userId , userData) {
  try {
    await setDoc(doc(db, "users", userId), userData);
    window.location.href= "dashboard.html"
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { addDocToFirestore };
