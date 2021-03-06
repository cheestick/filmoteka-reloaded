import FetchService from './FetchService';
import * as Markup from './Markup';
import LocalStorage from './LocalStorage';
import MovieInfoModal from './MovieInfoModal';
import refs from './refs';
import { userData, serviceData } from './const';

class App {
  constructor() {
    this.movieModal = null;
    this.lib = LocalStorage.load(userData.LIB);
    this.lib || LocalStorage.save(userData.LIB, []);
  }

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
      movie['myLib'] =
        this.lib && this.findInLib(movie.id)
          ? { ...this.lib.myLib }
          : {
              watched: false,
              queue: false,
            };
      return movie;
    });

    LocalStorage.save(serviceData.MOVIES, results);
    const cardList = Markup.cardCollection(results);
    Markup.render(cardList, refs.collection);

    this.activateEventListener();
  }

  async refreshCatalog() {}

  findInLib(movieID) {
    return this.lib.map(item => item.id === movieID);
  }

  replaceWitchLibMovieInfo(movie) {
    movie = findInLib(movie.id);
  }

  activateEventListener() {
    refs.collection.addEventListener('click', this.onCardClick.bind(this));
  }

  onCardClick({ target }) {
    if (this.isMovieCard(target)) {
      const movieID = Number(this.isMovieCard(target).dataset.id);
      const movieList = LocalStorage.load(serviceData.MOVIES);
      const movie = movieList.find(movie => movie.id === movieID);

      this.movieModal = new MovieInfoModal(movie);
    }
  }

  isMovieCard(element) {
    return element.closest('.movie__card');
  }
}

export default new App();
