const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getDigitElement(digit) {
    const digitElement = document.createElement("button");
    digitElement.innerText = digit;
    return digitElement;
}

function getDigitComponent(digit, onselected) {
    const digitElement = getDigitElement(digit);
    digitElement.addEventListener("click", onselected);
    return digitElement;
}

export function getDigitsListComponent(wrapper, onselected) {
    console.log("getDigitsListComponent");
    const digitsList = {element: wrapper,currentDigit: undefined};
    digits.map((digit) => getDigitComponent(digit, () => {
        onselected(digit);
        digitsList.currentDigit = digit;
    })).map((component) => wrapper.appendChild(component));
    return digitsList;
}