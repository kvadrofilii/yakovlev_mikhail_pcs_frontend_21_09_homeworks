'use strict';

const emailAlert = document.getElementById('email-alert');
const passwordAlert = document.getElementById('password-alert');
const checkboxAlert = document.getElementById('checkbox-alert');


const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
    console.log('click');
    event.preventDefault();
});




function notEmail() {
	emailAlert.style.display = 'block';
}