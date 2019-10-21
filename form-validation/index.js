function submitForm(event){
    event.preventDefault();
    
    let isFormValid = true
    
    //Get Values from HTML inputs elements
    const firstNameElement = document.querySelector('#firstName');
    const firstName = firstNameElement.value;
    const lastNameElement = document.querySelector('#lastName');
    const lastName = lastNameElement.value;
    const ageElement = document.querySelector('#age');
    const age = ageElement.value;
    const emailElement = document.querySelector('#email');
    const email = emailElement.value;
    const eighteenOrOlderElement = document.querySelector('#eighteenOrOlder');
    const eighteenOrOlder = eighteenOrOlderElement.value;
    const passwordElement = document.querySelector('#password')
    const password = passwordElement.value;
    const passwordElementConfirm = document.querySelector('#passwordConfirm')
    const passwordConfirm = passwordElementConfirm.value;
    
    
    //Clearing Error Classes
    firstNameElement.classList.remove('error');
    lastNameElement.classList.remove('error');
    ageElement.classList.remove('error');
    emailElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    passwordElement.classList.remove ('error');
    passwordElementConfirm.classList.remove ('error');

        //Validate all values
    if(firstName ==='') {

        //firstName is NOT valid.
        //Highlight the firstName input box to red;
        firstNameElement.classList.add('error');
        return
    }

    const NumberAge = Number(age);


    if (age === '' ||isNaN(NumberAge)) {
        // age validation failed
        //Highlight the age input box to red;
        ageElement.classList.add('error');
              
    }

     if(eighteenOrOlder === 'true' && NumberAge < 18 ){
     ageElement.classList.add('error');
     eighteenOrOlderElement.classList.add('error');
     isFormValid = false;
     return;
 }

    //If form is valid, submit to server

    // If form is not valid, show an error

const isEmailValid = emailIsValid (email);

if (!isEmailValid) {
    //The email is invalid.
    emailElement.classList.add ('error');
}


if (password === '' || passwordConfirm === '') {
    passwordElement.classList.add ('error');
    passwordElementConfirm.classList.add('error');
    isFormValid = false;
}
if (password.length < 8 || passwordConfirm.length < 8) {
    passwordElement.classList.add ('error');
    passwordElementConfirm.classList.add('error');
    isFormValid = false;
}
if (password !== passwordConfirm) {
    passwordElement.classList.add ('error');
    passwordElementConfirm.classList.add('error');
    isFormValid = false;
}

//If form is valid, submit to server
if (isFormValid) {
    alert ('Successfully Submitted Form!')
    //Submit form to server
}
}

function emailIsValid (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
 
    return isValid;
}



debugger;