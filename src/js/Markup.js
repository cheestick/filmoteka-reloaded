const posterURL = 'https://image.tmdb.org/t/p/';
export function card(props) {
  const { id, title, poster_path, genre_ids, release_date, vote_average } = props;
  return `<li class="movie__card">
   <a class="movie__link" data-id="${id}">
      <img class="movie__poster"
           loading="lazy"
           alt="${title} poster"
           src="${posterURL}w342${poster_path}"
           srcset="${posterURL}w342${poster_path} 1x, ${posterURL}w500${poster_path} 2x" />
      <div class="movie__description">
          <h2 class="movie__title">${title}</h2>
          <p class="movie__briefs">
              <span class="movie__genre">${genre_ids.join(', ')}</span>
              <span class="movie__devider">&nbsp|&nbsp</span>
              <span class="movie__year">${release_date}</span> 
              <span class="movie__rating">${vote_average}</span>
          </p>
      </div>
    </a>
   </li>`;
}

export function cardCollection(collection) {
  return collection.map(item => card(item)).join('');
}

export function render(component, parent) {
  console.log(component, parent);
  clear(parent);
  parent.insertAdjacentHTML('afterbegin', component);
}

function clear(component) {
  component.innerHTML = '';
}
