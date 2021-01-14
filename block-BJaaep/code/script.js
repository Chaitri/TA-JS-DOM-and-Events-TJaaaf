
let firstSet = document.querySelector('.no-event-delegation');
let secondSet = document.querySelector('.event-delegation');

// Creating Boxes

for(let i = 1 ; i <= 12 ; i++) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    
    li.classList.add('box');
    h3.innerText = i;
    h3.setAttribute('hidden', true);

    li.append(h3);
    firstSet.append(li);
}

for(let i = 1 ; i <= 12 ; i++) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    
    li.classList.add('box');
    h3.innerText = i;
    h3.setAttribute('hidden', true);

    li.append(h3);
    secondSet.append(li);
}

// To show and hide the number

function showNumber(li) {
    li.firstElementChild.hidden = false;
    setTimeout( function() { li.firstElementChild.hidden = true; }, 5000)
}

// Without event delegation

let liElements = document.querySelector('.no-event-delegation').children;

Array.from(liElements).forEach( li => {
    li.addEventListener('click', function() {
        showNumber(li);
    });
});


// Using event delegation

secondSet.addEventListener('click', function(e) {
    showNumber(e.target);
});