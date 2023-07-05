function regForm() {

    var firstname = document.getElementById("fn");
    var lastname = document.getElementById("ln");
    var date = document.getElementById("dob");
    var number = document.getElementById("no");
    var email = document.getElementById("email");
    var address = document.getElementById("add");
    var statee = document.getElementById("state");
    var cityy = document.getElementById("city");
    var username = document.getElementById("un");
    var pwd = document.getElementById("password");
    var cpwd = document.getElementById("cpassword");

  if (firstname.value.trim()=="") {
    document.getElementById('fnn').innerHTML="Enter the first name";
    firstname.style.border="solid 1px red";
    return false;
  }

  if(!isNaN(firstname)){
    document.getElementById('fnn').innerHTML="First Name should not be a Number";
    firstname.style.border="solid 1px red";
    return false;
  }

  if(lastname.value.trim() =="") {
    document.getElementById('lnn').innerHTML="Enter the last name";
    lastname.style.border="solid 1px red";
  	return false;
  }

  if(!isNaN(lastname)){
    document.getElementById('lnn').innerHTML="First Name should not be a Number";
    lastname.style.border="solid 1px red";
    return false;
  }

  if(date.value.trim()=="") {
    document.getElementById('dobb').innerHTML="Enter a valid dob";
    date.style.border="solid 1px red";
    return false;
  }

  if(number.value.trim()=="") {
    document.getElementById('noo').innerHTML="Enter your number";
    number.style.border="solid 1px red";
    return false;
  }

  if(email.value.trim()=="") {
    document.getElementById('emaill').innerHTML="Email should not be empty";
    email.style.border="solid 1px red";
    return false;
  }

  if(address.value.trim()=="") {
    document.getElementById('addd').innerHTML="Address should not be empty";
    address.style.border="solid 1px red";
    return false;
  }

  if(statee.value.trim()=="") {
    document.getElementById('statee').innerHTML="State should not be empty";
    statee.style.border="solid 1px red";
    return false;
  }

  if(cityy.value.trim()=="") {
    document.getElementById('cityy').innerHTML="City should not be empty";
    cityy.style.border="solid 1px red";
    return false;
  }

  if(username.value.trim()=="") {
    document.getElementById('unn').innerHTML="Username should not be empty";
    username.style.border="solid 1px red";
    return false;
  }

  if(pwd.value.trim()=="") {
    document.getElementById('pwdd').innerHTML="Password should not be empty";
    pwd.style.border="solid 1px red";
    return false;
  }

  if(cpwd.value.trim()=="") {
    document.getElementById('cpwdd').innerHTML="Password should not be empty";
    cpwd.style.border="solid 1px red";
    return false;
  }

 

  else {
    return true;
  }
}


