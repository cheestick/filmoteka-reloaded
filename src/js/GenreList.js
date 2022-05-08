const genres = [];

class GenreList {
  constructor() {}

  get genres() {
    return [...genres];
  }

  set genres(list) {
    if (!list) return;
    genres.push(...list);
  }

  getGenreById(id) {
    return genres.find(genre => genre.id === id);
  }
}

export default new GenreList();
