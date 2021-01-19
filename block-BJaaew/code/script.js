let people = got.houses.map(house => house.people).flat();
let houses = got.houses.map(house => house.name);

let rootElement = document.querySelector('.got_all');
let houseElement = document.querySelector('.house_names');
let searchBar = document.querySelector('.search_bar');

houses.forEach(house => {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.innerText = house;
    li.classList.add('name');

    li.append(a);
    houseElement.append(li);
});

function showUI(data = people) {
    rootElement.innerHTML = '';
    
    data.forEach(person => {
        let li = document.createElement('li');
    
        let div = document.createElement('div');
        div.classList.add('intro');
    
        let img = document.createElement('img');
        img.src = person.image;
        img.alt = person.name;
    
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
    
        let p = document.createElement('p');
        p.innerText = person.description;
    
        let a = document.createElement('a');
        a.innerText = 'Learn More!';
        a.href = person.wikiLink;
    
        div.append(img, h2);
    
        li.append(div, p, a);
    
        rootElement.append(li);
    });
}

function showHouseMembers(event) {
    let peopleOfHouse = got.houses.filter( house => house.name === event.target.innerText);
    showUI(peopleOfHouse[0].people);
}

function searchPeople(event) {
    let searchTerm = event.target.value;
    let peopleSearch = people.filter( person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    showUI(peopleSearch);
}

showUI();

houseElement.addEventListener('click', showHouseMembers);
searchBar.addEventListener('keyup', searchPeople);