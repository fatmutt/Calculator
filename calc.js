let previousOperandTextElement ='';

let currentOperandTextElement = '';
let operation = '';

let answer = '';

const operative = document.querySelectorAll('oper');

const previous = document.getElementById('previous');

const current = document.getElementById('current');



const buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (current.innerText.length > 18) {
            current.innerText = current.innerText.slice(0,-1);
        }
        switch(e.target.innerText) {
            case('AC'):
                current.innerText = '';
                previous.innerText = '';
                answer = '';
                currentOperandTextElement = '';
                previousOperandTextElement = '';
                break;
            case('D'):
                current.innerText = current.innerText.slice(0,-1);
                break;
            case('+'):
                previousOperandTextElement = current.innerText;
                previous.innerText = previousOperandTextElement;
                operation = e.target.innerText;
                current.innerText = '';
                if (previousOperandTextElement && currentOperandTextElement !== '')
                break;
            case('-'):
                previousOperandTextElement = current.innerText;
                previous.innerText = previousOperandTextElement;
                operation = e.target.innerText;
                current.innerText = '';
                
                break;
            case('x'):
                previousOperandTextElement = current.innerText;
                previous.innerText = previousOperandTextElement;
                operation = e.target.innerText;
                current.innerText = '';
                
                break;
            case('÷'):
                previousOperandTextElement = current.innerText;
                previous.innerText = previousOperandTextElement;
                operation = e.target.innerText;
                current.innerText = '';
                break;
            case('.'):
                if (current.innerText.includes('.')){
                    break;
                } current.innerText += '.';
            case ('='):
                
                break;

            default:
                current.innerText += e.target.innerText;
        }
    })
})


let c = document.getElementById('clear');

let d = document.getElementById('delete');

const equalsButton = document.getElementById('equals');

let period = document.getElementById('.');

function add(a, b) {
    
    const sum = parseFloat(a) + parseFloat(b);
    answer = sum;

};

function subtract(a, b) {
    let sum = parseFloat(a) - parseFloat(b);
    answer = sum;
};

function multiply(a,b) {
   let sum = parseFloat(a) * parseFloat(b);
   answer = sum;
};

function divide(a,b) {
    let sum = parseFloat(a) / parseFloat(b);
    answer = sum;
};

function equal (a,b) {
    if (operation === '+') {
        add(a,b);
        previous.innerText = '';
        current.innerText = answer;
    } else if (operation === '-') {
        subtract(a,b);
        current.innerText = answer;
    } else if (operation === 'x') {
        multiply(a,b);
        current.innerText = answer;
    } else if (operation === '÷') {
        divide(a,b);
        current.innerText = answer;
    };
    
};

equalsButton.addEventListener('click', () => {
    previousOperandTextElement = previous.innerText;
    currentOperandTextElement = current.innerText;
    equal(previousOperandTextElement, currentOperandTextElement);
    previous.innerText = '';
})

function finale() {
    previousOperandTextElement = previous.innerText;
    currentOperandTextElement = current.innerText;
    equal(previousOperandTextElement, currentOperandTextElement);
    previous.innerText = '';
}

/* digits.map(digit => digits.addEventListener('click', (e) => {
    if (current.innerText.length > 19){
        return;
    } e.target.innerText;
})); */