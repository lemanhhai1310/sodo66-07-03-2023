console.log(
  "%c" + "W E L C O M E   T O   C V . C A T H T M L C S S . N E T",
  "font-family:Montserrat ; font-size:14px; background: #009999; border-radius: 2px; padding: 6px 12px; margin: 5px 10px 7px 0px; color: #ffffff;"
);

const scriptURL = 'https://script.google.com/macros/s/AKfycbya-rHePMK9zoFIy2WxMiEZs-mAWWmyjCQBqzOASDYOPsJm7Kv2EL6F4u7uBjXio7sH/exec'
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const togglePasswordEl = document.querySelector("#togglePassword");
const togglePasswordConfirmEl = document.querySelector("#togglePasswordConfirm");

const form = document.querySelector('#submitForm');


togglePasswordEl.addEventListener("click", function () {
    console.log('togglePasswordEl Icon',this.getAttribute('uk-icon'));
    // toggle the type attribute
    const type = passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
    this.setAttribute('uk-icon',
        this.getAttribute('uk-icon') === 'icon: eye-slash; ratio: 2'
            ? 'icon: eye; ratio: 2'
            : 'icon: eye-slash; ratio: 2'
    );
});

togglePasswordConfirmEl.addEventListener("click", function () {
    console.log('togglePasswordConfirmEl Icon',this.getAttribute('uk-icon'));
    // toggle the type attribute
    const type = confirmPasswordEl.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordEl.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
    this.setAttribute('uk-icon',
        this.getAttribute('uk-icon') === 'icon: eye-slash; ratio: 2'
            ? 'icon: eye; ratio: 2'
            : 'icon: eye-slash; ratio: 2'
    );
});
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        console.log('isFormValid');
        Swal.showLoading()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response)
                $("#submitForm")[0].reset();

                Swal.fire({
                    //position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.error('Error!', error.message))
    }
});

const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'T??n ng?????i d??ng kh??ng th??? ????? tr???ng.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `T??n ????ng nh???p ph???i t??? ${min} ?????n ${max} k?? t???.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email kh??ng ???????c ????? tr???ng.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email kh??ng h???p l???.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'M???t kh???u kh??ng ???????c ????? tr???ng.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'M???t kh???u ph???i c?? ??t nh???t 8 k?? t??? bao g???m ??t nh???t 1 k?? t??? vi???t th?????ng, 1 k?? t??? vi???t hoa, 1 s??? v?? 1 k?? t??? ?????c bi???t trong (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Vui l??ng nh???p l???i m???t kh???u');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'M???t kh???u kh??ng kh???p');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    //const error = formField.querySelector('small');
    //error.textContent = message;
    UIkit.notification({message: '<span uk-icon=\'icon: warning\'></span> '+message, status: 'warning', pos: 'top-right'})
};

const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    //const error = formField.querySelector('small');
    //error.textContent = '';
}


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));