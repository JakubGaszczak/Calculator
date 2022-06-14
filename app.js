const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equlas]");
const deleteButtons = document.querySelector("[data-delete]");
const clearButtons = document.querySelector("[data-clear]");
const currentDisplayNumber = document.querySelector("[data-current-operand]");
const previousDisplayNumber = document.querySelector("[data-previous-operand]");

let currentNumber = "";
let previousNumber = "";
let operator = "";


//functions for numbers
numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    })
})

function handleNumber(number) {
    if (currentNumber.length >= 12) {
        return false;
    } else {
        currentNumber += number;
        currentDisplayNumber.textContent = currentNumber;
    }
}

//functions for operators
operationButtons.forEach((btn) => {
    btn.addEventListener("click", e => {
        handleOperator(e.target.textContent);
    })
})

function handleOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    previousDisplayNumber.textContent = previousNumber + " " + operator;
    currentNumber = "";
    currentDisplayNumber.textContent = ""; 
}



