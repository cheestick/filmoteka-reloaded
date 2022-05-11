import axios from 'axios';
import { API_KEY, URL } from './routs';

class FetchService {
  constructor() {
    this.server = axios.create({
      baseURL: URL.BASE,
      // method: 'get',
      responseType: 'json',
      params: {
        api_key: API_KEY,
      },
    });
  }

  async trendingMovies() {
    return await this.server.get(URL.TREND);
  }

  async movieDetails(movieId) {
    return await this.server.get(URL.MOVIE + movieId);
  }

  async searchMovies(query) {
    return await this.server.get(URL.SEARCH, { params: { query } });
  }

  async genre() {
    return await this.server.get(URL.GENRE);
  }
}

export default new FetchService();
