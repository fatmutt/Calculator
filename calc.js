class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const plus = document.getElementById('+');

const minus = document.getElementById('-');

const times = document.getElementById('x');

const division = document.getElementById('÷');

let digits = Array.from(document.getElementsByClassName('digit'));

let operators = Array.from(document.getElementsByClassName('oper'));

let c = document.getElementById('clear');

let d = document.getElementById('delete');

let equals = document.getElementById('=');

let period = document.getElementById('.');

let displayInput = document.getElementById('currentOperand');

function add(a, b) {
    const sum = a + b;
    return sum;
};

function subtract(a, b) {
    const sum = a - b;
    return sum;
};

function multiply(a,b) {
   return a*b;
};

function divide(a,b) {
    return a/b;
};



function operate(a, operator, b) {
a = Number(a);
b = Number(b);
    switch(operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multiply(a,b)
        case '÷':
            if (b === 0) return null
            else return divide(a,b)
        default:
            return null
    };
};

equals.addEventListener('click', () => {

})



digits.map( digit => {
    digit.addEventListener('click', (e) => {
        displayInput.innerText += e.target.innerText;
    });
});

operators.map( oper => {
    oper.addEventListener('click', () => {
        if (oper)
        
        
    });
});

c.addEventListener('click', () => {
    this.currentOperand;
    this.previousOperand;
    this.operation = undefined

});

d.addEventListener('click', () => {
    displayInput.innerText = displayInput.innerText.slice(0, -1);
});

equals.addEventListener('click', () => {
calculate();
});