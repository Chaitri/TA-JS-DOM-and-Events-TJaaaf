let articleButton = document.querySelector('.btn');
let articleSection = document.querySelector('.article-item');
let tagsElm = document.querySelector('.tags');

let tags = [];

data.forEach(item => {
  if(!tags.includes(item.link_flair_text)) {
    tags.push(item.link_flair_text)
  }
});

tags.sort();

function renderCard() {
  let randIndex = Math.floor(Math.random() * data.length);
  let item = [];
  item.push(data[randIndex]);

  renderUI(item)
}

function renderUI(data) {

  articleSection.innerHTML = '';

  data.forEach( item => {
    let article = document.createElement('article');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');
    let a = document.createElement('a');

    article.classList.add('card');
    img.src = item.thumbnail;
    img.alt = item.domain;

    h2.classList.add('heading')
    h2.innerText = item.title;

    span.classList.add('tag');
    span.innerText = item.link_flair_text;

    a.classList.add('source');
    a.href = item.url_overridden_by_dest;
    a.innerText = 'Read More';

    article.append(img, h2, span, a);

    articleSection.append(article);
  });
}

function createTags() {

  tags.forEach( tag => {
    let p = document.createElement('p');
    p.innerText = tag;
    tagsElm.append(p);
  })

}

function filterCards(event) {

  if(event.target.className === 'tags') {
    return;
  }

  let topic = event.target.innerText;
  let filteredCards = [];
  filteredCards = data.filter( item => item.link_flair_text === topic);
  renderUI(filteredCards);
}

articleButton.addEventListener('click', renderCard);
tagsElm.addEventListener('click',filterCards);

renderCard();
createTags();