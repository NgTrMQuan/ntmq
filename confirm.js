function loadData(){
    var firstname = document.getElementById("confirm_name")
    firstname.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;

    var email = document.getElementById("confirm_email")
    email.textContent = sessionStorage.email;

    var phone_number = document.getElementById("confirm_phonenumber")
    phone_number.textContent = sessionStorage.phone_number;

    var age = document.getElementById("confirm_age")
    age.textContent = sessionStorage.age;
}

function cancelButton(){
    window.location = "form.html"
}

function init(){
    loadData;
    var cancel = document.getElementById("cancelButton")
    cancel.onclick = cancelButton;
}

window.onload = init;