import { URL } from './routs';

export function card(props) {
  const { id, title, poster_path, genres, release_date, vote_average } = props;
  return `<li class="movie__card">
   <a class="movie__link" data-id="${id}">
      <img class="movie__poster"
           loading="lazy"
           alt="${title} poster"
           src="${URL.POSTER}w342${poster_path}"
           srcset="${URL.POSTER}w342${poster_path} 1x, ${URL.POSTER}w500${poster_path} 2x" />
      <div class="movie__description">
          <h2 class="movie__title">${title}</h2>
          <p class="movie__briefs">
              <span class="movie__genre">${genres}</span>
              <span class="movie__devider">&nbsp|&nbsp</span>
              <span class="movie__year">${release_date}</span> 
              <span class="movie__rating">${vote_average}</span>
          </p>
      </div>
    </a>
   </li>`;
}

export function movieInfoModal(props) {
  const {
    id,
    title,
    original_title,
    poster_path,
    genres,
    overview,
    vote_count,
    vote_average,
    popularity,
    watched,
    queue,
  } = props;
  return `
  <div class="backdrop">
    <div class="modal movie-info" data-id="${id}">
      <div class="close__container">
        <svg class="close__button">
          <use href="../images/stoprite.svg#cross"></use>
        </svg>
      </div>
      <div class="movie__info">
         <img class="movie__poster"
           alt="${title} poster"
           src="${URL.POSTER}w342${poster_path}"
           srcset="${URL.POSTER}w342${poster_path} 1x, ${URL.POSTER}w500${poster_path} 2x" />
        <h2 class="movie__title">${title}</h2>
        <table class="movie__briefs">
          <tr>
            <td>Vote/Votes</td>
            <td>
            <span class="movie__rating">${vote_average}</span>
            <span class="movie__votes">${vote_count}</span>
            </td>
          </tr>
          <tr>
            <td>Popularity</td>
            <td>${popularity}</td>
          </tr>
          <tr>
            <td>Original Title</td>
            <td>${original_title}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>${genres}</td>
          </tr>
        </table>
        <h3 class="about">About</h3>
        <p class="movie__overview">${overview}</p>
      </div>
      <div class="movie__controls">
        <button class="watched">
        ${watched ? 'Add to' : 'Remove from'} watched
        </button>
        <button class="queue">
        ${queue ? 'Add to' : 'Remove from'} queue
        </button>
      </div>
    </div>
  </div>
  `;
}

export function modalStudents(props) {
  return `
  <div class="modal developers">
    <h2>Developed by</h2>
    <ul class="developers_list">
      <li class="developer">
      </li>
    </ul>
  </div>`;
}

export function emptyContent(message) {
  return `
  <div class="empty">
    <p class="empty_text">${message}</p>
  </div>
  `;
}

export function spinner() {
  return `
    <div class="spinner">
    </div>
  `;
}

export function cardCollection(collection) {
  return collection.map(item => card(item)).join('');
}

export function render(component, parent) {
  clear(parent);
  parent.insertAdjacentHTML('afterbegin', component);
}

function clear(component) {
  component.innerHTML = '';
}
