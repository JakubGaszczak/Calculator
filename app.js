const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete-btn");
const clear = document.querySelector(".clear-btn");
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

//funtcion that check selected operator and performs calculations
function calculate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber); 

    if (operator == "+") {
        previousNumber = previousNumber + currentNumber;
    } else if (operator == "-") {
        previousNumber = previousNumber - currentNumber;
    } else if (operator == "/") {
        previousNumber = previousNumber / currentNumber;
    } else if (operator == "*") {
        previousNumber = previousNumber * currentNumber;
    }
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = previousNumber;
}



//event listeners
equal.addEventListener("click", calculate);

del.addEventListener("click", () => {
    currentNumber = currentNumber.slice(0, -1);
    currentDisplayNumber.textContent = currentNumber;
})

clear.addEventListener("click", () => {
    currentDisplayNumber.textContent = "";
    previousDisplayNumber.textContent = "";
    currentNumber = "";
    previousNumber = "";
    operator = "";
})





