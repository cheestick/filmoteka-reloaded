import { URL } from './routs';

export function cardCollection(collection) {
  return collection.map(item => card(item)).join('');
}

export function render(component, parent) {
  clear(parent);
  parent.insertAdjacentHTML('afterbegin', component);
}

// export function showMovieIndfoModal(props) {
//   document.body.insertAdjacentHTML('beforeend', movieInfoModal(props));
// }

// export function closeMovieInfoModal() {
//   document.querySelector('#movie__info__modal').remove();
// }

function clear(component) {
  component.innerHTML = '';
}

export function card(props) {
  try {
    const { id, title, poster_path, genres, release_date, vote_average } = props;
    return `<li class="movie__card" data-id="${id}">
   <a class="movie__link">
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
  } catch (error) {
    throw new Error('Movie card information empty', error.message);
  }
}

export function movieInfoModal(props) {
  try {
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
      // watched = false,
      // queue = true,
    } = props;
    return `
 <div class="modal__backdrop js-modal-close" id="movie__info__modal" tabindex="-1">
  <div class="modal__background" data-id="${id}">
    <div class="modal__topper">
      <button class="modal__close">
        <svg class="close__icon js-modal-close" id="modal__close">
         <use class="js-modal-close" href="/sprites.313395d6.svg#cross"></use> 
       <!-- <use class="js-modal-close" href="/filmoteka-reloaded/sprites.6bdc8d38.svg#cross"></use>
       --> 
        </svg>
      </button>
    </div>
    <div class="modal__info">
      <img
        class="info__poster"
        alt="${title} poster"
        src="${URL.POSTER}w342${poster_path}"
        srcset="${URL.POSTER}w342${poster_path} 1x, ${URL.POSTER}w500${poster_path} 2x"
      />
      <div class="description">
        <h2 class="description__title">${title}</h2>
        <table class="description__table">
          <tbody class="briefs__body">
            <tr class="briefs__row">
              <td class="briefs__heading">Vote / Votes</td>
              <td class="briefs__data">
                <span class="data__rating">${vote_average}</span>
                &nbsp/&nbsp
                <span class="data__votes">${vote_count}</span>
              </td>
            </tr>
            <tr class="briefs__row">
              <td class="briefs__heading">Popularity</td>
              <td class="briefs__data">${popularity}</td>
            </tr>
            <tr class="briefs__row">
              <td class="briefs__heading">Original Title</td>
              <td class="briefs__data original__title">${original_title}</td>
            </tr>
            <tr class="briefs__row">
              <td class="briefs__heading">Genre</td>
              <td class="briefs__data">${genres}</td>
            </tr>
          </tbody>
        </table>
        <div class="description__about">
          <h3 class="about__header">About</h3>
          <p class="about__overview">${overview}</p>
        </div>
        <div class="description__controls">
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  } catch (error) {
    throw new Error('Movie information empty', error.message);
  }
}

// <button id="watched__control" class="watched">
//   ${watched ? 'Remove from' : 'Add to'} watched
// </button>
// <button id="queue__control" class="queue">
//   ${queue ? 'Remove from' : 'Add to'} queue
// </button>

export function addToButton(type, flag = null) {
  return `
       <button id="${type}__control" class="${type}">
            ${flag?.[type] ? 'Remove from' : 'Add to'} ${type}
          </button>
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
