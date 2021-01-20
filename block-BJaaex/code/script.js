const cards = [
    {
        name: 'chess',
        icon: '<i class="fas fa-chess"></i>',
    },
    {
        name: 'dice',
        icon: '<i class="fas fa-dice"></i>',
    },
    {
        name: 'gamepad',
        icon: '<i class="fas fa-gamepad"></i>',
    },
    {
        name: 'heart',
        icon: '<i class="fas fa-heart"></i>',
    },
    {
        name: 'broom',
        icon: '<i class="fas fa-broom"></i>',
    },
    {
        name: 'moon',
        icon: '<i class="fas fa-moon"></i>',
    },
    {
        name: 'dragon',
        icon: '<i class="fas fa-dragon"></i>',
    },
    {
        name: 'star',
        icon: '<i class="fas fa-star"></i>',
    },
];

let cardsRoot = document.querySelector('.cards');
let gameGrid = cards.concat(cards);
let movesElm = document.querySelector('.moves');
let timerElm = document.querySelector('.time');

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousGuess = '';
let moves = 0;
let allMatchedCards = [];

gameGrid.sort(() => 0.5 - Math.random());


gameGrid.forEach(item => {
    let card = document.createElement('div');
    let front = document.createElement('div');
    let back = document.createElement('div');

    front.classList.add('front');
    back.classList.add('back');
    
    card.classList.add('card');
    card.dataset.name = item.name;
    card.innerHTML = item.icon;
    card.append(front);
    card.append(back);

    cardsRoot.append(card);
});

function matchCards() {
    let matchedCards = document.querySelectorAll('.selected');
    matchedCards.forEach( card => {
        card.classList.add('match');
        allMatchedCards.push(card);
    });
    
}

function resetGuess() {
    count = 0;
    firstGuess = '';
    secondGuess = '';

    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach( card => card.classList.remove('selected'));
}

function startTimer() {
    let secs = 00;
    let mins = 00;

    interval = setInterval( () => {
        secs++;
        if(secs == 60) {
            mins++;
            secs = 0;
        }

        let seconds = String(secs).padStart(2,'0');
        let minutes = String(mins).padStart(2,'0');

        timerElm.innerText = `Time: ${minutes}:${seconds}`;

        if(allMatchedCards.length === 16) {
            clearInterval(interval);
        }

    } , 1000);    
}


function findMatch(event) {
    let selectedCard = event.target;
    

    if(selectedCard.className === 'cards'|| selectedCard.className === 'card' || selectedCard == previousGuess || selectedCard.parentNode.classList.contains('selected') ) {
        return;
    }

    if(count < 2){
        count++;

        let name = selectedCard.parentNode.dataset.name;

        if(count === 1) {
            firstGuess = name;
            
        } else {
            secondGuess = name;
        }
        selectedCard.parentNode.classList.add('selected');

        if( firstGuess !== '' && secondGuess !== '') {
            

            if( firstGuess === secondGuess ) {
                matchCards();
            }

            setTimeout(resetGuess, 1000); 
        }

        previousGuess = selectedCard;

        moves++;
        movesElm.innerText = `Moves: ${moves}`;

        if(moves === 1) startTimer();
    }
}

cardsRoot.addEventListener('click', findMatch);