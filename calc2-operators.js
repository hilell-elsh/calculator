const signs = ["+", "-", "*", "/", "AC", "="];

function getOperatorElement(operator) {
    const operatorElement = document.createElement("button");
    operatorElement.innerText = operator;
    return operatorElement;
}

function getOperatorComponent(operator, onselected) {
    const operatorElement = getOperatorElement(operator);
    operatorElement.addEventListener("click", onselected);
    return operatorElement;
}

export function getOperatorsListComponent(wrapper, onselected) {
    console.log("getOperatorsListComponent");
    const operatorsList = {element: wrapper, currentOperators: undefined};
    signs.map((sign) => getOperatorComponent(sign, () => {
            onselected(sign);
            operatorsList.currentOperators = sign;
        })).map((component) => wrapper.appendChild(component));
    return operatorsList;
}