let movies = document.querySelector('.movies');
let form = document.querySelector('form');

function removeMovie(event) {
    event.target.parentElement.remove();
}

function addMovie(event) {
    event.preventDefault();
    let movieName = event.target.elements.movieInput.value;

    let newMovie = document.createElement('li');
    newMovie.innerText = movieName;
    newMovie.classList.add('movie-item')
    let icon = document.createElement('i');
    icon.classList.add('far','fa-times-circle');

    icon.addEventListener('click', removeMovie);

    newMovie.append(icon);
    movies.append(newMovie);

    event.target.elements.movieInput.value = '';
}

form.addEventListener('submit', addMovie);