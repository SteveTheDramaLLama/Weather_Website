const userN = document.querySelector('.username');
const passwordInput = document.querySelector('.pword');
const check = document.querySelector('.pword_check');
const signupButton = document.querySelector('.SignUp');
const first = document.querySelector('.Fname');
const last = document.querySelector('.Lname');
const e = document.querySelector('.Email');

signupButton.addEventListener('click', function(event) {
    event.preventDefault();

    const uName = userN.value.trim();
    const password = passwordInput.value.trim();
    const f = first.value.trim();
    const l = last.value.trim();
    const em = e.value.trim();
    const pcheck = check.value.trim();
    const fNumber = /\d/.test(f);
    const lNumber = /\d/.test(l);
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    
    //check for numbers
    if (fNumber) {
        alert('Please enter a valid first name');
        isValid = false;
    }

    if (lNumber) {
        alert('Please enter a valid last name');
        isValid = false;
    }
    
    // check password 
    if (password.length < 8) {
        alert('Password should be at least 8 characters long');
        isValid = false;
    } 

    //ensure all boxes are filled
    if (f === '') {
        alert('Please enter your first name');
        isValid = false;
    }
    
    if (l === '') {
        alert('Please enter your last name');
        isValid = false;
    }
    
    if (em === '') {
        alert('Please enter your email');
        isValid = false;
    }

    if (uName === '') {
        alert('Please enter your username');
        isValid = false;
    }
    
    if (password === '') {
        alert('Please enter your password');
        isValid = false;
    }
    
    if (pcheck === '') {
        alert('Please confirm your password');
        isValid = false;
    }

    //check for string inputs 
    if (typeof f !== 'string') {
        alert('Please enter a valid first name');
        isValid = false;
    }

    if (typeof l !== 'string') {
        alert('Please enter a valid first name');
        isValid = false;
    }

    //check email is valid
    if (!emailReg.test(em)) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    // Check passwords match 
    if (password !== pcheck) {
        alert('Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Sign Up Successful!'); 
    }
});
