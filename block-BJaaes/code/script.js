let form = document.querySelector('form');

let errorText = '';
let digits = [0,1,2,3,4,5,6,7,8,9];

function containsDigit(str) {
    return str.split('').some(char => Number(char));
}

function isAllDigits(str) {
    return str.split('').every(char => digits.includes(Number(char)));
}

function addError(element, errorText) {
    element.classList.add('error');
    element.nextElementSibling.innerText = errorText;
}

function addSuccess(element) {
    element.classList.add('success');
    element.classList.remove('error');
    errorText = '';
    element.nextElementSibling.innerText = '';
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    let username = elements.username;
    let name = elements.name;
    let email = elements.email;
    let number = elements.number;
    let password = elements.password;
    let confirmedPassword = elements.confirmedPassword;

    

    // Username validation
    if(username.value.length < 4) {
        errorText = `Username can't be less than 4 characters`;
        addError(username, errorText);
    } else {
        addSuccess(username);
    }

    // Name validation
    if(containsDigit(name.value)) {
        errorText = `You can't use number in the name field`;
        addError(name, errorText);
    } else {
        addSuccess(name);
    }

    // Email validation
    if(!email.value.includes('@') || email.value.length < 6) {
        errorText = 'Not a valid email';
        addError(email, errorText);
    } else {
        addSuccess(email);
    }

    // Phone validation
    if(!isAllDigits(number.value)) {
        errorText = 'Phone number can only contain numbers';
        addError(number, errorText);
    } else if (number.value.length < 7) {
        errorText = `Phone number't be less than 7 characters`;
        addError(number, errorText);
    } else {
        addSuccess(number);
    } 

    // Password validation
    if(password.value !== confirmedPassword.value) {
        errorText = 'Passwords do not match';
        addError(confirmedPassword, errorText);
    } else {
        addSuccess(password);
        addSuccess(confirmedPassword);
    }

    if(errorText == '') {
        alert('User Added Successfully!');
    }

}

form.addEventListener('submit', handleSubmit);