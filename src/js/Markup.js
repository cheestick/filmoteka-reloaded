export function card(props) {
  const { title, poster_path, genre, release_date, vote_average } = props;
  return `<li class="card">
   <a class="movie__link">
      <img class="poster" src="${poster_path}" alt="${title} poster"/>
      <div class="description">
          <h2 class="title">${title}</h2>
          <p class="briefs">
              <span class="genre">${genre.join(', ')}</span>
              <span class="devider">&nbsp|&nbsp</span>
              <span class="year">${release_date}</span> 
              <span class="rating">${vote_average}</span>
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
