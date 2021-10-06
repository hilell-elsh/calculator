import {getOperatorsListComponent} from './calc2-operators.js';
import { getDigitsListComponent } from './calc2-digits.js';
const displayInput = document.querySelector(".display");
const operatorsBtns = document.querySelector(".operators");
const digitsBtns = document.querySelector(".digits");
const inputNums = [0, 0];
let operator = '+';
let  pos = 0;
let displayNum = 0;
let result;
let isAfterEqual = false;

function updateDisplayInput(digit=0) {
    displayInput.value = displayNum = (displayNum * 10) + digit;
    console.log("displayInput", displayNum);
}

function onDigitClick(digit) {
    // const digit = +event.target.innerText;
    console.log("digit click", digit);
    updateDisplayInput(digit);
}

function onOperatorClick(sign) {
    let tempOperator = sign;
    console.log("operator click", tempOperator);
    updateCurrentNum();
    switch (tempOperator) {
        case 'AC':
            start();
            return;
        case '=':
            calculate();
            isAfterEqual = true;
            return;
        default:
            displayNum = 0;
            console.log("display num (0)", displayNum);
            if (!isAfterEqual) {
                calculate();
            }
            operator = tempOperator;
            isAfterEqual = false;
    }
    displayNum = 0;
}

function calculate() {
    let a = inputNums[0];
    let b = inputNums[1];
    console.log("calculate", a, operator, b);
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    console.log("result", result);
    displayInput.value = result;
    inputNums[0] = result;
    console.log("calc-end: nums, op, result, display, pos", inputNums, operator, result, displayNum, pos);
}

function updateCurrentNum() {
    inputNums[pos] = displayNum;
    console.log("update num, pos", inputNums, pos);
    pos = 1;
}

const operatorsList = getOperatorsListComponent(operatorsBtns, onOperatorClick);
const digitsList = getDigitsListComponent(digitsBtns, onDigitClick);
// digitsBtns.forEach(function (btn) {
//     btn.addEventListener('click', onDigitClick);
// }); 

start();

function start() {
    displayNum = 0;
    updateDisplayInput();
    inputNums[0] = 0;
    inputNums[1] = 0;
    pos = 0;
    operator = '+';
    isAfterEqual = false;
    console.log("start displaynum, nums, pos", displayNum, inputNums, pos);
}
