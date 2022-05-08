import axios from 'axios';

const API_KEY = 'e594f8b0e830f95dbd764645df4a6e75';
const URL = {
  BASE: 'https://api.themoviedb.org/3',
  TREND: '/trending/movie/day',
  MOVIE: '/movie/',
  SEARCH: '/search/movie',
  GENRE: '/genre/movie/list',
};

class FetchService {
  constructor() {
    this.server = axios.create({
      baseURL: URL.BASE,
      method: 'get',
      responseType: 'json',
      params: {
        api_key: API_KEY,
      },
    });
  }

  trendingMovies() {
    return this.server.get(URL.TREND);
  }

  movieDetails(movieId) {
    return this.server.get(URL.MOVIE + movieId);
  }

  searchMovies(query) {
    return this.server.get(URL.SEARCH, { query });
  }

  genre() {
    return this.server.get(URL.GENRE);
  }
}

export default new FetchService();
