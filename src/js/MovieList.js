const movies = [];

class MovieList {
  get movies() {
    return [...movies];
  }

  set movies(list) {
    if (!list) return;
    movies.push(...list);
  }

  getMovieById(id) {
    return movies.find(movie => movie.id === id);
  }
}

export default new MovieList();
