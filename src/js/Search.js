import FetchService from './FetchService';
import refs from './refs';

class Search {
  constructor() {
    this.search = refs.search;
    this.addSubmitHandler();
  }

  addSubmitHandler() {
    this.search.addEventListener('submit', onSubmitSearch.bind(this));
  }
}

function onSubmitSearch(e) {
  e.preventDefault();
  const { target: searchForm } = e;
  const query = searchForm.elements.search.value;

  FetchService.searchMovies(query).then(console.log);
  searchForm.reset();
}

export default new Search();
