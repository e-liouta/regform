 
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

function checknameifnum() {
  let nameInput = document.getElementById("name");
  let nameError = document.getElementById("nameError");
  let name = nameInput.value.trim();
  let pattern = /^[a-zA-Z]+$/;
  if (pattern.test(name)) {
    nameError.innerHTML = "";
  } else {
    nameError.innerHTML = "Name should not contain numbers";
  }
}

function checksurnameifnum() {
  let surnameInput = document.getElementById("surname");
  let surnameError = document.getElementById("surnameError");
  let surname = surnameInput.value.trim();
  let pattern = /^[a-zA-Z]+$/;
  if (pattern.test(surname)) {
    surnameError.innerHTML = "";
  } else {
    surnameError.innerHTML = "Surname should not contain numbers";
  }
}
