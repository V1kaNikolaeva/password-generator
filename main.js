'use strict'

const passwordText = document.querySelector('.password');
const generatePassword = document.querySelector('.createPassword');
const copyPassword = document.querySelector('.copyPassword');
const copySign = document.getElementById('copy');
const copyWrapper = document.querySelector('.copyWrapper');
const passwordLengthInput = document.querySelector('.passwordLength');
const upperCaseLettersCheckbox = document.getElementById('upperCaseLettersCheckbox');
const lowerCaseLettersCheckbox = document.getElementById('lowerCaseLettersCheckbox');
const numbersCheckbox = document.getElementById('numbersCheckbox');
const signsCheckbox = document.getElementById('signsCheckbox');


let passwordLength = 0;
let quantity = 0;
let password = [];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5' ,'6' ,'7' ,'8' ,'9' ,'0'];
const signs = ['!', '"',  '>', '.', ',', ':', ';', '|', '/', '?', '*', '{', '}'];


passwordLengthInput.oninput = function() {
    passwordLength = Number(passwordLengthInput.value); 
}

upperCaseLettersCheckbox.onclick = function() {
    if (upperCaseLettersCheckbox.checked === true) {
        quantity++;
    } else {
        quantity--;
    }
}

lowerCaseLettersCheckbox.onclick = function() {
    if (lowerCaseLettersCheckbox.checked === true) {
        quantity++;
    } else {
        quantity--;
    }
}

numbersCheckbox.onclick = function() {
    if (numbersCheckbox.checked === true) {
        quantity++;
    } else {
        quantity--;
    }
}

signsCheckbox.onclick = function() {
    if (signsCheckbox.checked === true) {
        quantity++;
    } else {
        quantity--;
    }
}

generatePassword.onclick = function() {
    let everyValueLength = Math.ceil(passwordLength / quantity);
    //Просто уберем последний сгенереный символ из массива если длина нечетная!!! Кроме едииницы
    if (upperCaseLettersCheckbox.checked === true) {
        for (let i = 0; i < everyValueLength; i++) {
            let val = Math.floor(Math.random() * upperLetters.length);
            password.push(upperLetters[val]);
        } 
    }

    if (lowerCaseLettersCheckbox.checked === true) {
        for (let i = 0; i < everyValueLength; i++) {
            let val = Math.floor(Math.random() * lowerLetters.length);
            password.push(lowerLetters[val]);
        } 
    }

    if (numbersCheckbox.checked === true) {
        for (let i = 0; i < everyValueLength; i++) {
            let val = Math.floor(Math.random() * numbers.length);
            password.push(numbers[val]);
        } 
    }

    if (signsCheckbox.checked === true) {
        for (let i = 0; i < everyValueLength; i++) {
            let val = Math.floor(Math.random() * signs.length);
            password.push(signs[val]);
        } 
    }

    password = password.sort(() => Math.random() - 0.5);

    if (password.length !== passwordLength) {
        let len = password.length - passwordLength;
        password = password.slice(len);
    }
    passwordText.innerHTML = password.join('');
    password = [];
    return;
}

function clearColor() {
    copySign.style.color = '#ffffff';
    return;
}

function copyPasswordFunc() {
    copyPassword.onclick = function() {
        copySign.style.color = '#5e9e4b';
        if (passwordText.textContent !== '') {
            navigator.clipboard.writeText(passwordText.textContent)
            .then(() => {
            // Получилось!
            })
            .catch(err => {
                console.log('Something went wrong', err)
            });
        }  
    }
    setInterval(clearColor, 5000);
    return;
}
copyPasswordFunc();
