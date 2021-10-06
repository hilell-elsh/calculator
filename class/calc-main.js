const displayInput = document.querySelector(".display");
const operatorsWrapper = document.querySelector(".operators");
const digitsButtons = document.querySelectorAll(".digits button");
const inputNumbers = [0, 0];
let operator;
let position = 0;
let displayNum = 0;
let result;
let sign;

function updateDisplayInput(digit = 0){
    displayInput.value = displayNum = (displayNum * 10) + digit;
}

function onDigitClick(event) {
    const digit = +event.target.innerText;
    updateDisplayInput(digit);
}

function onOperatorClick(event, keyCode107) {
    // debugger
    operator = event.target.innerText;
    updateCurrentNumber()
    displayNum = 0;
}

function updateCurrentNumber() {
    inputNumbers[position] = displayNum;
    position = 1;
}

updateDisplayInput()

operatorsButtons.forEach(function (button) {
    button.addEventListener("click", onOperatorClick);
})

digitsButtons.forEach(function (button) {
    button.addEventListener("click", onDigitClick);
})

function clear(event) {
    const inputNumbers = [0, 0];
    position = 0;
    displayInput.value = displayNum = 0;
}

