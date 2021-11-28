'use strict';

const form = document.querySelector('form');
const emailAlert = document.getElementById('email-alert');
const passwordAlert = document.getElementById('password-alert');
const checkboxAlert = document.getElementById('checkbox-alert');
const checkbox = document.getElementById('checkbox');

let email;
let password;
const objectsData = {
	email: '',
	password: ''
};
let isValid = false;

const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  event.preventDefault();
	emailAlert.classList.remove('not-email', 'invalid-email');
	passwordAlert.classList.remove('not-password', 'invalid-password');
	checkboxAlert.classList.remove('not-checkbox');

	if ( (email === null) || (email === '') || (email === undefined) ) {
		emailAlert.classList.add('not-email');
		isValid = false;
	} else if (!validateEmail(email)) {
		emailAlert.classList.add('invalid-email');
		isValid = false;
	} else {
		objectsData.email = email;
		isValid = true;
	}

	if ( (password === null) || (password === '') || (password === undefined) ) {
		passwordAlert.classList.add('not-password');
		isValid = false;
	} else if (password.length < 8) {
		passwordAlert.classList.add('invalid-password');
		isValid = false;
	} else {
		objectsData.password = password;
		isValid = true;
	}

	if (!checkbox.checked) {
		checkboxAlert.classList.add('not-checkbox');
		isValid = false;
	}

	if (isValid) {
		console.log(objectsData);
	}
});

const emailInput = document.querySelector('input[id=email-input]');
emailInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
	email = event.target.value;
});

const passwordInput = document.querySelector('input[id=password-input]');
passwordInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
	password = event.target.value;
});

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
