let rootElm = document.querySelector('.todos');
let toDoInput = document.querySelector('.todo_input');
let filterInput = document.querySelector('.filter');
let all = document.getElementById('all');
let active = document.getElementById('active');
let completed = document.getElementById('completed');
let clear = document.getElementById('clear');

let allItems = localStorage.getItem('allItems') ? JSON.parse(localStorage.getItem('allItems')) : [];

function addToDo(event) {
    if(event.keyCode === 13 && event.target.value !== '') {
        let toDoItem = {}
        toDoItem.name = event.target.value;
        toDoItem.isDone = false

        allItems.push(toDoItem);

        event.target.value = '';

        renderItems(allItems, rootElm);

        localStorage.setItem('allItems', JSON.stringify(allItems));
    }
}

function removeItem(event) {
    let id = event.target.dataset.id;
    allItems.splice(id, 1);
    localStorage.setItem('allItems', JSON.stringify(allItems));
    renderItems(allItems, rootElm);
}

function changeItem(event) {
    let id = event.target.dataset.id;
    allItems[id].isDone = !allItems[id].isDone;
    localStorage.setItem('allItems', JSON.stringify(allItems));
    renderItems(allItems, rootElm);
}

function renderItems(data, rootElm) {
    rootElm.innerHTML = '';

    data.forEach( (item, index) => {
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

    });

    filterInput.style.display = 'flex';
}

function showAll() {
    renderItems(allItems, rootElm);
}

function showActive() {
    let activeItems = [];
    activeItems = allItems.filter( item => !item.isDone);
    renderItems(activeItems, rootElm);
}

function showCompleted() {
    let completedItems = [];
    completedItems = allItems.filter( item => item.isDone);
    renderItems(completedItems, rootElm);
}

function clearCompleted() {
    allItems = allItems.filter(item => !item.isDone);
    localStorage.setItem('allItems', JSON.stringify(allItems));
    renderItems(allItems, rootElm);
}

toDoInput.addEventListener('keyup', addToDo);
all.addEventListener('click', showAll);
active.addEventListener('click', showActive);
completed.addEventListener('click', showCompleted);
clear.addEventListener('click', clearCompleted);