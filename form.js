 
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function check() {
  var input = document.getElementById('passwordConfirmation');
  if (input.value != document.getElementById('password').value) {
      alert("Passwords do not match");
  } 
}
