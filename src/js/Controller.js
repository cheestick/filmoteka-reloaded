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
  MOVIES: 'movies',
};

class Controller {
  constructor() {}

  async init() {
    const [
      {
        data: { genres },
      },
      { data },
    ] = await Promise.all([FetchService.genre(), FetchService.trendingMovies()]);

    LocalStorage.save(serviceData.GENRES, genres);

    const { page, total_pages, total_results } = data;
    const pagination = { page, total_pages, total_results };
    LocalStorage.save(serviceData.PAGINATION, pagination);

    const genre = LocalStorage.load(serviceData.GENRES);

    const results = data.results.map(movie => {
      movie.genre_ids = movie.genre_ids.slice(0, 2);
      movie.vote_average = movie.vote_average.toFixed(1);
      movie.release_date = movie.release_date.slice(0, 4);
      movie['genres'] = movie.genre_ids
        .map(id => genre.find(genre => genre.id === id).name)
        .join(', ');
      return movie;
    });

    LocalStorage.save(serviceData.MOVIES, results);
    const cardList = Markup.cardCollection(results);
    // Markup.render(cardList, refs.collection);

    const movieDetails = Markup.movieInfoModal(results[1]);
    Markup.render(movieDetails, document.body);
  }

  async refreshCatalog() {}
}

export default new Controller();
