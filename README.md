# Registration Form
This is an assignment for front-end web programming. The project includes a registration form where users can enter their information and submit them or reset.

## Features

• Extra checkbox or users to see their password in plain text.</br>
• Included password validation check function to ensure password and confirmation password match.</br>
• Name and Surname accept only characters.</br>
• Password accepts at least one uppercase letter, at least one lowercase letter, at least one number, at least one special character (!,#,%, etc.) and a total of 8 to 10 characters.</br>


## Technologies

The project uses HTML, CSS, and JavaScript.

### HTML
The HTML file includes the registration form, with inputs for name, surname, gender, password, and password confirmation.</br>
According to a study by Baymard Institute, real-time validation feedback leads to a 22% increase in form completion rates. Additionally, a study by NN/g (Nielsen Norman Group) found that inline validation, which provides feedback on form fields as soon as users enter data, led to a 22% increase in success rates and a 31% decrease in errors. That's why in this form the passwords check happend in two cases. 1. If the user fills the confirmation password and the clicks submit right after and 2. if the user fills the confirmation password and clicks anywhere else right after. This second case would save so much time and cognitive confution if we had a bigger form.

### CSS
The CSS file includes styling for the form, with comments detailing what each section styles. </br>
The form is displayed in the center of the screen, and a greenish color scheme is used. Centering an element on the screen is a common design trend and can improve the visual appeal and user experience of a website or application. By centering the main element on the screen, the user's attention is focused on the form, which can increase engagement and reduce distraction. </br>
There is some research that suggests that labels on forms may not always be necessary. For example, a study conducted by the Nielsen Norman Group found that users were able to complete forms more quickly and accurately when labels were positioned inside the form fields instead of above or to the left of them. This is because having the label inside the field provides a clearer visual association between the label and the input. That's why the labels are not displayed except the Gender label where there is not obvious placeholder.

### JavaScript
The JavaScript file includes two functions. One function shows the password in plain text when the checkbox is checked. The other function checks the password and confirmation to ensure they match.

## Contributors
This project was created by Effie Liouta.

