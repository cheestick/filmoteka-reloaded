class LocalStorage {
  constructor() {}

  static save(key, value) {
    // if (!key || !value) return 'You miss the key or the value';
    localStorage.setItem(key, JSON.stringify(value));
  }
  static load(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default LocalStorage;
