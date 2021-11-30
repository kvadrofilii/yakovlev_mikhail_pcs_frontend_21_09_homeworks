'use strict';

const emailAlert = document.getElementById('email-alert');
const passwordAlert = document.getElementById('password-alert');
const checkboxAlert = document.getElementById('checkbox-alert');
const checkbox = document.getElementById('checkbox');

let email;
let password;

const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  event.preventDefault();
	emailAlert.classList.remove('not-email', 'invalid-email');
	passwordAlert.classList.remove('not-password', 'invalid-password');
	checkboxAlert.classList.remove('not-checkbox');

	if (!email) {
		emailAlert.classList.add('not-email');
	} else if (!validateEmail(email)) {
		emailAlert.classList.add('invalid-email');
	}

	if (!password) {
		passwordAlert.classList.add('not-password');
	} else if (password.length < 8) {
		passwordAlert.classList.add('invalid-password');
	}

	if (!checkbox.checked) {
		checkboxAlert.classList.add('not-checkbox');
	}

	if (email && validateEmail(email) && password && (password.length > 7)) {
		console.log({email, password});
	}
});

const emailInput = document.getElementById('email-input');
emailInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
	email = event.target.value;
});

const passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
	password = event.target.value;
});

function validateEmail(email) {
	const re =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
