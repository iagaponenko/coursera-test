function onButtonClick() {
    alert("Form submitted!");
    // Extract the name of the therapist from the corresponding input of the form
    // and store the name in the variable "therapistName" below. We will use
    // the content of that variable later.
    //
    
    let therapistName = document.getElementById("Therapist-name").value;
    let patientName = document.getElementById("Patient-name").value;
    let changes;
    let changesElements = document.getElementsByName("Changes");
    for (let i = 0; i < changesElements.length; ++i) {
        if (changesElements[i].checked) {
            changes = changesElements[i].value;
        }
    }
    let summary = 
    document.getElementById("questionary-box").innerHTML = summary;
}

function validateName(id) {
    let value = document.getElementById(id).value;
    if (value === "") {
        alert("input: " + id + " is empty");
    }
}
