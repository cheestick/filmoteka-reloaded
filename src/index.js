import FetchService from './js/FetchService';
import GenreList from './js/GenreList';
import MovieList from './js/MovieList';
import './sass/main.scss';

FetchService.trendingMovies()
  .then(res => (MovieList.movies = res.data.results))
  .then(res => console.log(MovieList.movies));
FetchService.genre()
  .then(res => (GenreList.genres = res.data.genres))
  .then(res => console.log(GenreList.genres));
