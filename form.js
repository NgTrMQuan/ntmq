function saveData(){
    var firstname = document.getElementById("firstname").value;
    sessionStorage.firstname = firstname;

    var lastname = document.getElementById("lastname").value;
    sessionStorage.lastname = lastname;

    var email = document.getElementById("email").value;
    sessionStorage.email = email;

    var phone_number = document.getElementById("phone_number").value;
    sessionStorage.phone_number = phone_number;
    
    var age = document.getElementById("age").value;
    sessionStorage.age = age;

    var highschool = document.getElementById("highschool").checked;
    var university = document.getElementById("university").checked;
    var working = document.getElementById("working").checked;
    var retired = document.getElementById("retired").checked;
    
    if (highschool == true){
        sessionStorage.occupation = "highschool";
    }
    if (university == true){
        sessionStorage.occupation = "university";
    }
    if (working == true){
        sessionStorage.occupation = "working";
    }
    if (retired == true){
        sessionStorage.occupation = "retired";
    }
}

function prefillData(){
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value = sessionStorage.firstname;
        document.getElementById("lastname").value = sessionStorage.lastname
        document.getElementById("email").value = sessionStorage.email
        document.getElementById("phone_number").value = sessionStorage.phone_number
        document.getElementById("age").value = sessionStorage.age
    }

    if (sessionStorage.occupation == "highschool"){
        document.getElementById("highschool").checked = true;
    }
    if (sessionStorage.occupation == "university"){
        document.getElementById("university").checked = true;
    }
    if (sessionStorage.occupation == "working"){
        document.getElementById("working").checked = true;
    }
    if (sessionStorage.occupation == "retired"){
        document.getElementById("retired").checked = true;
    }


}

function init() {
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData
    prefillData();
}

window.onload = init;