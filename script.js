const nameErr = document.getElementById('name-error');
const emailErr = document.getElementById('email-error');
const phoneErr = document.getElementById('phone-error');
const messageErr = document.getElementById('msg-error');
const username = document.getElementById('username');

function validateName(){
    if(username.value.length == 0){
        nameErr.innerHTML = 'Name is required';
        nameErr.style.display = 'block';
        return false;
    }
    if (!username.value.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameErr.innerHTML = 'Enter Full Name';
        return false;
    }
    nameErr.innerHTML = 'valid'
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;

    if(email.length == 0){
        emailErr.style.display = 'block'
        emailErr.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-z0-9!#$%&'\*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'\*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)){
        emailErr.innerHTML = 'Enter valid email';
        return false;
        }
    emailErr.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function ValidatePhone(){
    const phone= document.getElementById('phone').value;
    
    if(phone.length == 0){
        phoneErr.style.display = 'block';
        phoneErr.innerHTML = 'Phone number is required';
        return false;
    }
    if(!phone.length == 10){
        phoneErr.innerHTML = 'Phone number must be of 10 digits only';
        return false;
    }
    phoneErr.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
