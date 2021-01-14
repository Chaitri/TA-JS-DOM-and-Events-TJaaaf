let screen = document.querySelector('.screen');
let operations = document.querySelector('.operations');
let numbers = document.querySelector('.numbers');
let calculate = document.querySelector('.evaluate');

let expression = '';
let result;

function addToExpression(element) {
    let value = element.dataset.value;
    if(value == 'C') {
        expression = '';
        result = '';
        screen.innerText = '';
    } else if(value == 'calculate') {
        result = eval(expression);
        expression = '';
        screen.innerText = result;
    } else {
        expression += value;
        screen.innerText = expression;
    }
}

numbers.addEventListener('click',  function(e) {
    addToExpression(e.target);
});

operations.addEventListener('click', function(e) {
    addToExpression(e.target);
});

calculate.addEventListener('click', function(e) {
    addToExpression(e.target);
});