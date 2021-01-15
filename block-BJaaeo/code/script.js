let screen = document.querySelector('.screen');

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

let calc = document.querySelector('.buttons')
calc.addEventListener('click', function(e) {
    addToExpression(e.target);
});