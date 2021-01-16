let rootElm = document.querySelector('.todos');
let toDoInput = document.querySelector('.todo_input');

let allItems = [];

function addToDo(event) {
    if(event.keyCode === 13 && event.target.value !== '') {
        let toDoItem = {}
        toDoItem.name = event.target.value;
        toDoItem.isDone = false

        allItems.push(toDoItem);

        event.target.value = '';

        renderItems();

    }
}

function removeItem(event) {
    let id = event.target.dataset.id;
    allItems.splice(id, 1);

    renderItems();
}

function changeItem(event) {
    let id = event.target.dataset.id;
    allItems[id].isDone = !allItems[id].isDone;

    renderItems();
}

function renderItems() {
    rootElm.innerHTML = '';

    allItems.forEach( (item, index) => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let checkBox = document.createElement('input');
        let label = document.createElement('label');
        let icon = document.createElement('i');

        checkBox.type = 'checkbox';
        checkBox.classList.add('check');
        checkBox.setAttribute('data-id', index);
        checkBox.addEventListener('change', changeItem);
        checkBox.checked = item.isDone;

        label.innerText = item.name;

        div.append(checkBox, label);
        div.classList.add('todo_details'); 

        icon.classList.add('far','fa-times-circle','delete');
        icon.setAttribute('data-id', index);
        icon.addEventListener('click', removeItem);

        li.classList.add('todo_item');
        li.append(div, icon);

        rootElm.append(li);

    })
}

toDoInput.addEventListener('keyup', addToDo);