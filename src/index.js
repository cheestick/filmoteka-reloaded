import FetchService from './js/FetchService';
import GenreList from './js/GenreList';
import './sass/main.scss';

FetchService.trendingMovies().then(console.log);
FetchService.genre()
  .then(res => (GenreList.genres = res.data.genres))
  .then(res => console.log(GenreList.genres));
