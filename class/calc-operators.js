function createCalcOperators (operatorsWrapper) {
    
}

function getOperatorElement (operator) {
    const element = document.createElement("button");
    element.innerText = operator;
    return element;
}

function getOperatorComponent(operator, onSelected) {
    const element = getOperatorElement(operator)
    element.addEventListener("click", onSelected)
    return {
        element,
        
    }
}