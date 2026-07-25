import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  collection
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js";

async function addDocToFirestore(userId, userData) {
  try {
    await setDoc(doc(db, "users", userId), userData);
    window.location.href = "dashboard.html";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getDocFromFirestore(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function getDocsFromFirestore(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    return doc.data();
  });
}

export { addDocToFirestore, getDocFromFirestore , getDocsFromFirestore };
