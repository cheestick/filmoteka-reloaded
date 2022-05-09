import FetchService from './FetchService';
import GenreList from './GenreList';
import MovieList from './MovieList';
import * as Markup from './Markup';
import LocalStorage from './LocalStorage';
import refs from './refs';

const userData = {
  WATCHED: 'watched',
  QUEUE: 'queue',
};

const serviceData = {
  GENRES: 'genres',
  PAGINATION: 'pagination',
};

// FetchService.trendingMovies()
//   .then(res => (MovieList.movies = res.data.results))
//   .then(res => console.log(MovieList.movies));
// FetchService.genre()
//   .then(res => (GenreList.genres = res.data.genres))
//   .then(res => console.log(GenreList.genres));

class Controller {
  constructor() {
    FetchService.genre().then(res => {
      // console.log(res);
      LocalStorage.save(serviceData.GENRES, res.data.genres);
    });
    FetchService.trendingMovies().then(({ data }) => {
      const { page, total_pages, total_results } = data;
      const pagination = { page, total_pages, total_results };
      LocalStorage.save(serviceData.PAGINATION, pagination);
      const genre = LocalStorage.load(serviceData.GENRES);
      const results = data.results.map(movie => {
        movie.genre_ids = movie.genre_ids.slice(0, 2);
        movie['genres'] = movie.genre_ids.map(id => genre.find(genre => genre.id === id).name);
        return movie;
      });

      const cardList = Markup.cardCollection(results);
      Markup.render(cardList, refs.collection);
    });
  }

  async init() {}
}

export default new Controller();
