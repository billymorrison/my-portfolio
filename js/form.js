var submit = document.querySelector('#submit');
var clear = document.querySelector('#clear');
var name = document.querySelector('#name').nodeValue;
var email = document.querySelector('#email').nodeValue;
var phone = document.querySelector('#phone').nodeValue;
var github = document.querySelector('#github').nodeValue;
var message = document.querySelector('#message').nodeValue;

function printName() {
    console.log(name);
};

printName();