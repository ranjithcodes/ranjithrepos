function validateForm() {
    var un = document.getElementById("username");
    var pwd = document.getElementById("password");

    // Check if username is empty
    if (un.value.trim() == "") {
       document.getElementById('userr').innerHTML="Enter the username";
       un.style.border="solid 1px red";
        return false;
    }

    if (!isNaN(un)) {
        document.getElementById('userr').innerHTML="Username contain alphabets only!";
        return false; 
    }
    else {
        document.getElementById('userr').innerHTML="";
    }

    // Check if password is empty
    if (pwd.value.trim() == "") {
        document.getElementById('passwordd').innerHTML="Enter the password";
        un.style.border="solid 1px red";
        return false;
    }

    // Check if password is at least 8 characters long
    else if (pwd.value.trim().length < 8) {
        alert("Your password must be at least 8 characters long.");
        return false;
    }
    else {
        return true;
    }
    
}