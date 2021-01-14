let main = document.querySelector('main');


for(let i = 0 ; i < 500 ; i++) {
    let randomNumber = Math.floor(Math.random() * 500)
    let newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerText = randomNumber;
    main.append(newBox);    
}

let allBoxes = document.querySelectorAll('.box');

function changeBox() {
    allBoxes.forEach( box => {
        let newNumber = Math.floor(Math.random() * 500);
        let newColor =  Math.floor(Math.random()*16777215).toString(16);
        
        box.innerText = newNumber;
        box.style.backgroundColor = `hsla(${newColor}, 100%, 70%, 1)`;;
    });
}

allBoxes.forEach( box => box.addEventListener('mousemove', changeBox));