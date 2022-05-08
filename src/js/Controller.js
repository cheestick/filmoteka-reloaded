import FetchService from './FetchService';
import GenreList from './GenreList';
import MovieList from './MovieList';
import * as Markup from './Markup';
import refs from './refs';

// FetchService.trendingMovies()
//   .then(res => (MovieList.movies = res.data.results))
//   .then(res => console.log(MovieList.movies));
// FetchService.genre()
//   .then(res => (GenreList.genres = res.data.genres))
//   .then(res => console.log(GenreList.genres));

class Controller {
  constructor() {
    FetchService.trendingMovies().then(res => {
      const cardList = Markup.cardCollection(res.data.results);
      Markup.render(cardList, refs.collection);
    });
  }
}

export default new Controller();
