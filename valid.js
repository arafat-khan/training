
function validateForm() {
   // required fields validation
   var email = document.forms["FormValidation"]["email"].value;
   if (email == "") {
   alert("Email is Missing");
   focus();
    return false;
   }
   var fname = document.forms["FormValidation"]["fname"].value;
   if (fname == "") {
    alert("First Name is Missing");
    return false;
   }
   var lname = document.forms["FormValidation"]["lname"].value;
   if (lname == "") {
    alert("Last Name is Missing");
    return false;
   }
   var pwd = document.forms["FormValidation"]["pwd"].value;
   if (pwd == "") {
    alert("Password is Missing");
    return false;
   }
   var cpwd = document.forms["FormValidation"]["cpwd"].value;
   if (cpwd == "") {
    alert("Confirm Password is Missing");
    return false;
   }
   // password validation
   if(pwd != cpwd) {
      alert("Password does not match");
      return false;
   }
   // Email Validation
   var email = document.forms["FormValidation"]["email"].value;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email.match(mailformat))
   {
      return true;
   }
   else
   {
      alert("You have entered an invalid email address!");
      return false;
   }
   // zip validation
   var zip = document.forms["FormValidation"]["zip"].value;
   var numbers = /^[0-9]+$/;
   if(zip.match(numbers))
   {
      return true;
   }
   else
   {
      alert("ZIP code must have numeric characters only");
      return false;
   }
}


