let userDisplay = document.querySelector('.user-choice');
let compDisplay = document.querySelector('.computer-choice');
let vsDisplay = document.querySelector('.vs');
let roundResult = document.querySelector('.round-result');
let userScoreElm = document.querySelector('.user-score');
let compScoreElm = document.querySelector('.comp-score');
let resultScreen = document.querySelector('.result');
let userChoices = document.querySelector('.choices');
let resetElm = document.querySelector('.reset');


let userScore = 0;
let compScore = 0;


function playGame(e) {
    let allChoices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let compChoice = allChoices[randomNum];
    let userChoice = e.dataset.choice;

    resultScreen.style.opacity = 1;
    resetElm.style.opacity = 1;

    if(userChoice === 'rock') {
        userDisplay.innerHTML = `<i class="far fa-hand-rock"></i>`;
        switch(compChoice) {
            case 'rock' : 
                compDisplay.innerHTML = `<i class="far fa-hand-rock"></i>`;
                roundResult.innerText = `It's a tie!`;
                break;
            case 'paper' :
                compDisplay.innerHTML = `<i class="far fa-hand-paper"></i>`;
                roundResult.innerText = `You Lost!`;
                compScore += 1;
                compScoreElm.innerText = `Computer: ${compScore}`;
                break;
            case 'scissors' :
                compDisplay.innerHTML = `<i class="far fa-hand-scissors"></i>`;
                roundResult.innerText = `You Won!`;
                userScore += 1;
                userScoreElm.innerText = `User: ${userScore}`;
                break;               
        }
    } else if(userChoice === 'paper') {
        userDisplay.innerHTML = `<i class="far fa-hand-paper"></i>`;
        switch(compChoice) {
            case 'paper' : 
                compDisplay.innerHTML = `<i class="far fa-hand-paper"></i>`;    
                roundResult.innerText = `It's a tie!`;
                break;
            case 'scissors' :
                compDisplay.innerHTML = `<i class="far fa-hand-scissors"></i>`;  
                roundResult.innerText = `You Lost!`;
                compScore += 1;
                compScoreElm.innerText = `Computer: ${compScore}`;
                break;
            case 'rock' :
                compDisplay.innerHTML = `<i class="far fa-hand-rock"></i>`;  
                roundResult.innerText = `You Won!`;
                userScore += 1;
                userScoreElm.innerText = `User: ${userScore}`;
                break;               
        }
    } else if(userChoice === 'scissors') {
        userDisplay.innerHTML = `<i class="far fa-hand-scissors"></i>`;
        switch(compChoice) {
            case 'scissors' : 
                compDisplay.innerHTML = `<i class="far fa-hand-scissors"></i>`; 
                roundResult.innerText = `It's a tie!`;
                break;
            case 'rock' :
                compDisplay.innerHTML = `<i class="far fa-hand-rock"></i>`;
                roundResult.innerText = `You Lost!`;
                compScore += 1;
                compScoreElm.innerText = `Computer: ${compScore}`;
                break;
            case 'paper' :
                compDisplay.innerHTML = `<i class="far fa-hand-paper"></i>`;
                roundResult.innerText = `You Won!`;
                userScore += 1;
                userScoreElm.innerText = `User: ${userScore}`;
                break;               
        }
    }

}

function resetGame() {
    userScore = 0;
    compScore = 0;
    resultScreen.style.opacity = 0;
    resetElm.style.opacity = 0;
    roundResult.innerText = '';
    compDisplay.innerHTML = '';
    userDisplay.innerHTML = '';
    userScoreElm.innerText = 'User: 0';
    compScoreElm.innerText = 'Computer: 0';
}

userChoices.addEventListener('click', function(e) {
    playGame(e.target);
});

resetElm.addEventListener('click', resetGame);