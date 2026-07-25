import { getLoginUser, signup } from "./firebaseAuth.js";

function signupForm(event) {
    const picture = ''
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const profilePicture = 

  signup(email, password, firstName, lastName, age);
}
const url = "https://api.cloudinary.com/v1_1/{cloudName}/image/upload";

document
  .getElementById("profilePicture")
  .addEventListener("change", (event) => {
    console.log(event.target.files[0]);

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "UPLOAD_PRESET");

    fetch(url, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

getLoginUser();

document
  .getElementById("signup-form")
  .addEventListener("submit", (event) => signupForm(event));

// window.signupForm = signupForm;