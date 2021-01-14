let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

firstBox.addEventListener('click', function() {
    let color = Math.floor(Math.random()*360);
    firstBox.style.background = `hsla(${color}, 100%, 70%, 1)`;
})

secondBox.addEventListener('mousemove', function() {
    let color = Math.floor(Math.random()*360);
    secondBox.style.background = `hsla(${color}, 100%, 70%, 1)`;
})