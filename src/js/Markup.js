export function card(props) {
  const { title, poster_path, genre, release_date, vote_average } = props;
  return `<li class="movie__card">
   <a class="movie__link">
      <img class="movie__poster" src="${poster_path}" alt="${title} poster"/>
      <div class="movie__description">
          <h2 class="movie__title">${title}</h2>
          <p class="movie__briefs">
              <span class="movie__genre">${genre.join(', ')}</span>
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
  clear(parent);
  parent.insertAjacenHTML('afterbegin', component);
}

function clear(component) {
  component.innerHTML = '';
}
