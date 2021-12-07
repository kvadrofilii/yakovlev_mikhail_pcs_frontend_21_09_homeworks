'use strict';

const emailAlert = document.getElementById('email-alert');
const passwordAlert = document.getElementById('password-alert');
const checkboxAlert = document.getElementById('checkbox-alert');
const checkbox = document.getElementById('checkbox');
const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
	event.preventDefault();
	const emailInput = document.getElementById('email-input').value;
	const passwordInput = document.getElementById('password-input').value;

	if (!emailInput) {
		emailAlert.classList.add('not-email');
	} else if (!validateEmail(emailInput)) {
		emailAlert.classList.add('invalid-email');
		emailAlert.classList.remove('not-email');
	} else {
		emailAlert.classList.remove('invalid-email');
	}

	if (!passwordInput) {
		passwordAlert.classList.add('not-password');
	} else if (passwordInput.length < 8) {
		passwordAlert.classList.add('invalid-password');
		passwordAlert.classList.remove('not-password');
	} else {
		passwordAlert.classList.remove('invalid-password');
	}

	if (!checkbox.checked) {
		checkboxAlert.classList.add('not-checkbox');
	} else {
		checkboxAlert.classList.remove('not-checkbox');
	}

	if (emailInput && validateEmail(emailInput) && passwordInput && (passwordInput.length > 7) && checkbox.checked) {
		console.log({ emailInput, passwordInput });
	}
});

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
