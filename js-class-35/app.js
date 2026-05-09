function checkForLastName() {
    // if (document.getElementById("lastNameField").value.length === 0 && document.getElementById("firstNameField").value.length === 0) {
    //     let errorPara = document.getElementById('errorTextforFirstName')
    //     errorPara.innerText = `please fill out firstName field`;
    //     errorPara.style.color = 'red'
    //     document.getElementById("firstNameField").style.background = "grey";
    //     document.getElementById("firstNameField").style.border = "1px solid red"

    //     let errorText = document.getElementById('errorTextforLastName')
    //     errorText.innerText = `please fill out lastName field`;
    //     errorText.style.color = 'red'
    //     document.getElementById("lastNameField").style.background = "grey";
    //     document.getElementById("lastNameField").style.border = "1px solid red"

    //     return false;
    // } else {
    //     alert("form submitted successfully!")
    // }


    var firstNameField = document.getElementById("firstNameField").value.length
    var lastNameField = document.getElementById("lastNameField").value.length

    if(firstNameField === 0 && lastNameField === 0){ //TODO refactor

    }
}
