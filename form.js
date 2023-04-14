function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const genderInput = document.getElementById('gender');
const passwordInput = document.getElementById('password');
const passwordConfirmationInput = document.getElementById('passwordConfirmation');
const form = document.getElementById('myForm');
      
// Function to check if a string contains at least one uppercase letter, one lowercase letter, one number, and one special character
function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,10})/;
    return regex.test(password);
}
      

        

