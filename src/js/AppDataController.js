import { appData } from './AppData';
import { deepDataCopy } from './Utility';

class DataController {
  constructor() {
    this.data = deepDataCopy(appData);
  }

  savePaginationData(data) {
    this.data.pagination = { ...data };
  }

  saveGenreData(genres) {
    this.data.genres.push(...genres);
  }

  saveMoviesData(movieList) {
    this.data.movies.push(...movieList);
  }

  saveLibraryData(movie) {
    this.data.library.push({ ...movie });
  }
}

export default new DataController();
