import { URL } from './routs';

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
    watched = false,
    queue = false,
  } = props;
  return `
  <div class="modal backdrop">
    <div class="background" data-id="${id}">
      <div class="close__container">
        <svg class="close__button">
          <use href="/sprites.313395d6.svg#cross"></use>
        </svg>
      </div>
      <div class="info">
      <img class="poster"
        alt="${title} poster"
        src="${URL.POSTER}w342${poster_path}"
        srcset="${URL.POSTER}w342${poster_path} 1x, ${URL.POSTER}w500${poster_path} 2x" />
      <div class="description">
          <h2 class="title">${title}</h2>
          <table >
          <tbody class="briefs">
            <tr class="briefs__row">
              <td class="table__heading">Vote / Votes</td>
              <td class="table__data">
              <span class="rating">${vote_average}</span>
              &nbsp/&nbsp
              <span class="votes">${vote_count}</span>
              </td>
            </tr>
            <tr class="briefs__row">
              <td class="table__heading">Popularity</td>
              <td class="table__data">${popularity}</td>
            </tr>
            <tr class="briefs__row">
              <td class="table__heading">Original Title</td>
              <td class="table__data original__title">${original_title}</td>
            </tr>
            <tr class="briefs__row">
              <td class="table__heading">Genre</td>
              <td class="table__data">${genres}</td>
            </tr>
          </tbody>
          </table>
          <div class="about">
          <h3 class="about__header">About</h3>
          <p class="about__overview">${overview}</p>
          </div>
          <div class="controls">
            <button class="watched">
            ${watched ? 'Remove from' : 'Add to'} watched
            </button>
            <button class="queue">
            ${queue ? 'Remove from' : 'Add to'} queue
            </button>
          </div>
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
