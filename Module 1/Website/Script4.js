function contactUsForm() {

    var username = document.getElementById("name");
    var email = document.getElementById("mail");
    var phoneno = document.getElementById("phone");
    var comment = document.getElementById("more");

    if (username.value.trim() == "") {
        document.getElementById('username').innerHTML="Enter the first name";
        username.style.border="solid 1px red";
         return false;
     }

        else if (email.value.trim() == "") {
        document.getElementById('email').innerHTML="Enter the first name";
        email.style.border="solid 1px red";
         return false;
     }

        else if (phoneno.value.trim() == "") {
        document.getElementById('phoneno').innerHTML="Enter the first name";
        phoneno.style.border="solid 1px red";
         return false;
     }

        else if (comment.value.trim() == "") {
        document.getElementById('comment').innerHTML="Enter the first name";
        comment.style.border="solid 1px red";
         return false;
     }
     else {
        alert("Form submitted")
        return true;
     }
     
}