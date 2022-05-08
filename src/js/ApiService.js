import axios from 'axios';

const API_KEY = 'api_key=e594f8b0e830f95dbd764645df4a6e75';
const URL = {
  BASE: 'https://api.themoviedb.org/3',
  TREND: '/trending/movie/day',
  MOVIE: '/movie/',
  SEARCH: '/search/movie',
  GENRE: '/genre/movie/list',
};

export default class FetchService {
  static trendingMovies() {}
  static movieDetails() {}
  static searchMovies() {}
  static genre() {}
}
