let form = document.querySelector('form');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.content');
let close = document.querySelector('#close');

let userInfo = {};

function renderModal() {
    modal.style.display = 'block';
    form.style.display = 'none';

    let html = `<h1>Hello ${userInfo.name}</h1>
    <p class="user-content">Email: ${userInfo.email}</p>
    <p class="user-content">You Love: ${userInfo.interest}</p>
    <p class="user-content">Color: ${userInfo.color}</p>
    <p class="user-content">You rated Inception: ${userInfo.inceptionRating}</p>
    <p class="user-content">Book Genre: ${userInfo.bookGenre}</p>`;

    let terms = document.createElement('p');

    if(userInfo.terms) {
        terms.innerText = `✅ You have accepted the Terms and Conditions`;
    } else {
        terms.innerText = `❌ You have not accepted the Terms and Conditions`;
    }

    terms.classList.add('user-content');

    modalText.innerHTML = html;
    modalText.append(terms);
}

function closeModal() {
    modal.style.display = 'none';
    form.style.display = 'flex';

    userInfo = {};
}

function handleSubmit(e) {
    e.preventDefault();

    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.interest = form.elements.interest.value;
    userInfo.color = form.elements.color.value;
    userInfo.inceptionRating = form.elements.range.value;
    userInfo.bookGenre = form.elements.genre.value;
    userInfo.terms = form.elements.terms.checked;

    renderModal();
}

form.addEventListener('submit', handleSubmit);
close.addEventListener('click', closeModal);